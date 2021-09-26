import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    users:[]
  },
  mutations: {
    SET_USERS(state, users){
      state.users = users;
    },
    REMOVE_USER(state, user){
      let user_index = state.users.findIndex(u => u.id == user.id);
      if(user_index > -1) {
        state.users.splice(user_index, 1);
      }
    }
  },
  actions: {
    fetchUsers(context){
      axios.get('https://reqres.in/api/users').then(res => {
        context.commit('SET_USERS', res.data.data);
      });
    }
  },
  getters: {
    usersList(state){
      return state.users;
    }
  }
})
