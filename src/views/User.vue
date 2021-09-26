<template>
    <div class="user">
        <h1 v-for="user in users" :key="user.id">
          {{ `${user.first_name} - ${user.last_name}` }}
          <button @click="remove(user)">remove</button>
        </h1>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$store.dispatch("fetchUsers");
    },
    methods:{
      remove(user){
        this.$store.commit('REMOVE_USER', user);
      }
    },
    computed: {
        users() {
            return this.$store.state.users;
        },
    },
};
</script>