const express = require('express');
const { json } = require('sequelize');
// const { combineTableNames } = require('sequelize/types/lib/utils');
const router = express.Router();
const { User, Project, ProjectUser,VoteData } = require('../models');
const { findAll, findOne } = require('../models/user');
/*
url 예시
localhost:5000/v1/user
*/


// save/sharedLink
router.post('/save/shareLink', async(req, res) =>{
    const {shareLink, projectId} = req.body;
    try {
        const project = await Project.update(
            {shareLink:shareLink},
            {where:{projectId:projectId}},

        );
        if (!project){
            return res.status(202).json({
                code: 202,
                message: '존재하지 않는 캘린더입니다.'
            });
        }
        return res.json({
            code: 200,
            payload: JSON.stringify(project)
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            message: '서버 에러',
        });
    }
});

// sharedLink로 프로젝트 매칭 결과 호출
router.post('/get/project-result-from-link', async(req, res) =>{
    const shareLink = req.body;
    try {

        const project_projectId = await Project.findOne({
            attributes:['projectId'],
            where :{shareLink:shareLink}
        });

        const projectuser_data = await ProjectUser.findAndCountAll({
            attributes:['id', 'userId'],
            where:{projectId:project_projectId.dataValues.projectId, isManager:0}
        });
        if (!project_projectId||!projectuser_data){
            return res.status(202).json({
                code: 202,
                message: '존재하지 않는 캘린더입니다.'
            });
        }
    
        const votedata = await Promise.all(projectuser_data.rows.map(async function(x) {
            return await VoteData.findOne({ where:{id:x.dataValues.id}});
        }));
    
        const user_name = await Promise.all(projectuser_data.rows.map(async function(x) {
            return await User.findOne({attributes:['name'], where:{userId: x.dataValues.userId}})
        }));
    
        if (!votedata || !user_name){
            return res.status(202).json({
                code: 202,
                message: '존재하지 않는 유저입니다.',
                }); 
        }
        return res.json({
            code: 200,
            count:projectuser_data.count,
            votedata: JSON.stringify(votedata),
            user_name: JSON.stringify(user_name)
        });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            message: '서버 에러',
        });
    }
});

// invitedLink -> 프로젝트 정보(프로젝트 이름, 참여자 수, 일정)
router.post('/get/link-data', async(req,res) =>{
    const inviteLink = req.body;
    try {

        const selectedProject = await Project.findOne({
            attributes:['projectId', 'name', 'startDate','endDate'],
            where:{inviteLink:inviteLink}
        });

        if(!selectedProject){
            return res.status(202).json({
                code: 202,
                message: '존재하지 않는 프로젝트입니다.'
            })
        }

        const projectuser_userID_count = await ProjectUser.count({
            attributes:['userID'],
            where:{projectId:selectedProject.dataValues.projectId, isManager:0}
        });

        return res.json({
            code: 200,
            projectName: selectedProject.dataValues.name,
            number: projectuser_userID_count,
            startDate:selectedProject.dataValues.startDate,
            endDate:selectedProject.dataValues.endDate
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            message: '서버 에러',
        });
    }
});

// 프로젝트 생성 api -> project, projectuser테이블 업데이트
router.post('/create/project', async(req, res) =>{
   const {name, userId, startDate, endDate, invitedLink} = req.body;
    try {
        // project생성
        const project_Data = await Project.create({
            name:name,
            startDate:startDate,
            endDate:endDate,
            invitedLink:invitedLink
        });
        // projectuser 생성
        const projectuser_Date = await ProjectUser.create({
            projectId:project_Data.dataValues.projectId,
            userId:userId,
            isManager:1
        });
    
        return res.json({
            code: 200,
            project: JSON.stringify(project_Data),
            projectuser: JSON.stringify(projectuser_Date)
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            message: '서버 에러',
        });
    }
});

// 프로젝트 매칭 결과 (req: project_id -> res: votedata, user)
router.post('/get/project-result', async (req, res) =>{
    const project_id = req.body;
    try {
        const projectuser_id_userid = await ProjectUser.findAndCountAll({
            attributes:['id', 'userId'],
            where:{projectId: project_id}
        });
        if (!projectuser_id_userid){
            return res.status(202).json({
                code: 202,
                message: '존재하지 않는 캘린더입니다.'
            })
        }
    
        const votedata = await Promise.all(projectuser_id_userid.rows.map(async function(x) {
            return await VoteData.findOne({attributes:['date'], where:{id:x.dataValues.id}});
        }));
    
        const user_name = await Promise.all(projectuser_id_userid.rows.map(async function(x) {
            return await User.findOne({attributes:['name'], where:{userId: x.dataValues.userId}})
        }));
    
        if (!votedata && !user_name){
            return res.status(202).json({
                code: 202,
                message: '존재하지 않는 유저입니다.',
                }); 
        }
    
        return res.json({
            code: 200,
            count: projectuser_id_userid.count,
            votedata: JSON.stringify(votedata),
            user_name: JSON.stringify(user_name)
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            message: '서버 에러',
        });
    }
});


// 유저의 투표를 업로드, voteData에 업로드해야함
router.post('/save/project-userId-date', async(req,res) => {
   const {projectId, userId, date} = req.body;// date 는 Date array형식
    try {

        const projectuser_data = await ProjectUser.findOne({
            attributes: ['id','userId'],
            where: {projectId: projectId, userId:userId, isManager:0}
        });
    
        if(!projectuser_data){
            return res.json({
                code: 202,
                message:'해당 유저가 존재하지 않습니다.',
            });
        }
        if(!date){
            return res.json({
                code: 202,
                message:'선택한 날짜가 존재하지 않습니다.',
            });
        }
    
        // user가 앞서서 투표한 내용이 있으면 votedata 삭제해줘야함
        result = VoteData.destroy({where:{id:projectuser_data.dataValues.id}});
        await Promise.all(date.map(async (x) =>{
            return await VoteData.create({id:projectuser_data.dataValues.id, date:x});
        }));

        return res.json({
            code: 200,
            payload: JSON.stringify(result),
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            message: '서버 에러',
        });
    }
});

//신규 유저 등록하기 (관리자) - TODO 구글 로그인 확정되면 좀 손봐야함
router.post('/register/google-login', async (req, res) => {
    const {user_name, user_email ,user_profile} = req.body;
    try {
        
        let user = await User.findOne({
            where: { email: user_email }
        });

        if(user){
            return res.status(202).json({
            code: 202,
            message: '등록된 유저 입니다.',
            payload: JSON.stringify(user)
            });
        }

        const new_user = await User.create({ //TODO autoincrement
            name: user_name,
            email: user_email,
        })

        return res.json({
            code: 200,
            payload: JSON.stringify(new_user),
        });
  
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            message: '서버 에러',
        });
    }
});

//링크 타고온 new user 저장
router.post('/link/new-user', async (req, res) => {
    const project_id = 2;
    const user_nickname = "jojo2";
    //1. 링크타고 들어와서 닉네임 입력하면, 디폴트로 이름 입력칸에 "익명 `명수 + 1`" 보여줌 - 이건 이전화면에서 props 로
    //2. 이름이 프로젝트에 현재 존재하는 이름일때 202 " 이미 존재합니다."
    //3. 아니면 user에 추가하고, projectUser 에 추가


    try {

        //2.
        const projectuser = await ProjectUser.findAll({
            attributes:['id','projectId','userId'],
            where:{projectId: project_id},
            include:{
                attributes:['name'],
                model: User,
                where:{name:user_nickname}
            },
            raw:true
        });

        console.log(projectuser);
        console.log(projectuser.length)


        if(projectuser.length != 0){
            return res.status(202).json({
                code: 202,
                message: '이미 존재하는 닉네임입니다.'
            })
        }

        //create new user
        const new_user = await User.create({ //TODO autoincrement
            name: user_nickname
        })

        console.log("RESULT:\n",new_user);

        const new_project_user = await ProjectUser.create({
            projectId: project_id,
            userId:new_user.dataValues.userId,
            isManager: 0
        });

        return res.json({
            code: 200,
            payload: JSON.stringify(projectuser),
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            message: '서버 에러',
        });
    }
});

//TEST: user length
router.post('/user', async (req, res)=>{
    try {
        const users = await ProjectUser.findAll();

        console.log(users.length);

        return res.json({
            code: 200,
            payload: JSON.stringify(users),
        });
  
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            message: '서버 에러',
        });
    }
});

module.exports = router
