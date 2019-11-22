export default {
    oauth: {
        login: '/login', // 登录
        logout: '/oauth/logout', // // 退出
        resigter:'/resigter'
    },
    user: {
        addUser: '/user/add',
        updateUser: '/user/update',
        getUser:'/user/',  //+ Id
        exists:'/exists/',  // +id
        enable:'/enable/',  // +id
        disable:'/disable/', // +id
        delete:'/delete/',    //+id
        password:'/password ',
        query:'/query'
    }
}