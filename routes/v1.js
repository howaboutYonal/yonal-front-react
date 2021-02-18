const express = require('express');
// const { combineTableNames } = require('sequelize/types/lib/utils');
const router = express.Router();
const { User, Project, ProjectUser,VoteData } = require('../models');
const { findAll, findOne } = require('../models/user');
/*
url 예시
localhost:5000/v1/user
*/

//TEST: user length
router.post('/user', async (req, res)=>{
    try {
        const users = await User.findAll();

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

//정상작동하는지 check
router.use('/check',(req,res)=>{
    try {
        console.log('hi');
        
        return res.json({
            code: 200
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
    const projectuser_id_userid = await ProjectUser.findAll({
        attributes:['id', 'userId'],
        where:{projectId: project_id}
    });
    if (!projectuser_id_userid){
        return res.status(202).json({
            code: 202,
            message: '존재하지 않는 캘린더입니다.'
        })
    }

    const votedata = await Promise.all(projectuser_id_userid.map(async function(x) {
        return await VoteData.findOne({ where:{id:x.dataValues.id}});
    }));

    const user_name = await Promise.all(projectuser_id_userid.map(async function(x) {
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
        votedata: JSON.stringify(votedata),
        user_name: JSON.stringify(user_name)
    })
});



//신규 유저 등록하기 (관리자)
router.post('/register/user-login', async (req, res) => {
    const { user_email, user_pw } = req.body;
    try {
        
        let user = await User.findOne({
            where: { email: user_email }
        });

        if(user){
            return res.status(202).json({
            code: 202,
            message: '등록된 유저 입니다.',
            });
        }

        const hash = await bcrypt.hash(user_pw, SALT_ROUND); 
        user = await User.create({
            email: user_email,
            pw: hash
        });
        
        console.log(`insert into users values ${user}`);
        
        return res.json({
            code: 200,
            payload: JSON.stringify(user),
        });
  
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            message: '서버 에러',
        });
    }
});

// *****만드는 중*****

// // 유저의 투표를 업로드, project-user와 voteData에 업로드해야함
// //router.post('/save/project-userId-date'), async(req,res) =>{
// //    const {projectId, userId, date} = req.body;
// router.get('/get/:project/:userId/:date', async (req, res) =>{    
//     const projectId = req.params.project;
//     const userId = req.params.userId;
//     const date = req.params.date;// date array형식
//     console.log(projectId, userId,date);
//     const projectuser_data = await ProjectUser.findOne({
//         attributes: ['id','userId'],
//         where: {projectId: projectId, userId:userId, isManager:0}
//     });
//     console.log(projectuser_data);
//     id_for_creat_votedata = 0;
//     if(projectuser_data){// 이하 코드는 실제 데이터가 삭제되기때문에 개발단계 주석처리
//         // user가 앞서서 투표한 내용이 있으면 votedata 삭제해줘야함
//         //VoteData.destroy({where:{id:projectuser_data.dataValues.id}});
//         id_for_creat_votedata = projectuser_data.dataValues.id;
//     }else{
//         created_Date = await ProjectUser.create({
//             projectId:projectId, userId:userId, isManager:0
//         }).then(result => console.log(result));
//     }
// });



//링크 타고온 new user 저장
router.post('/link/nickname', async (req, res) => {
    const { project_id, user_nickname } = req.body;
    try {
        
        //같은 프로젝트에 닉네임 중복체크
        let user = await ProjectUser.findOne({
            where: { name: user_name }
        });
        
        const same_nickname = await Promise.all(projectuser_id_userid.map(async function(x) {
            return await User.findOne({attributes:['name'], where:{project_id: x.dataValues.projectId}})
        })); //맞는건가

        if(same_nickname){
            return res.json({
                code: 202,
                message:'같은 닉네임이 있습니다.',
                
            });
        }

        const new_user = await User.create({ //TODO autoincrement
            id: LAST_INSERT_ID(),
            name: user_nickname
        });

        console.log(`insert into user values ${new_user}`);

        const new_project_user = await ProjectUser.create({
            id: LAST_INSERT_ID(),
            projectId: project_id,
            userId:User.LAST_INSERT_ID(),
            isManager: false
        });

        return res.json({
            code: 200,
            payload: JSON.stringify(new_project_user),
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
