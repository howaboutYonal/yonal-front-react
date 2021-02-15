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
router.get('/get-result/:project_id', async (req, res) =>{
    const projectuser_id_userid = await ProjectUser.findAll({
        attributes:['id', 'userId'],
        where:{projectId: req.params.project_id}
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
router.post('/user/register', async (req, res) => {
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

module.exports = router
