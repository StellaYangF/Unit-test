<template>
  <div id='hello'>
    {{info}}{{msg}}
  </div>
</template>
<script>
export default {
  data () {
    return { info: "乡聚"}
  },
  props: {
    msg: String
  }
}
</script>
