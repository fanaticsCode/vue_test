import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutation'

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules:{
        // music,
    }
});
