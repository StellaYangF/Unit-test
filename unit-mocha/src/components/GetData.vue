<template>
  <div id='app'>
    {{user}}
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return { user: 'xj' }
  },

  mounted() {
    axios
      .get('/user')
      .then(res => { this.user = res.data.user })
      .catch(err => console.log(err));
  }
}
</script>