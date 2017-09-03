<template>
  <div class="hello">
      <Button type="primary">hello vue and iview</Button>
      <div class="axios-status">{{msg}}<span>scss works fine</span></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  created () {
    this.axios.get('').then((res) => {
      this.msg = res.data.msg
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .axios-status{
    span{
      color: #ff0000
    }
  }
</style>
