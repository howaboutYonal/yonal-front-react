const express = require('express');
const router = express.Router();
const { User, Project, ProjectUser,VoteData } = require('../models');
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
