import * as types from './mutation-types';

const mutations = {
    //设置token
    [types.SET_M_TOKEN](state,token){
        state.token = token;
    },
    //是否登录
    [types.SET_M_ISLOGIN](state,is){
        state.isLogin = is;
    },
    //是否断网
    [types.SET_M_CHANGENETWORK](state,is){
        state.changeNetwork = is;
    }
}

export default mutations
