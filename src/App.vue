<template>
  <div id="app">
    <drow-polygon></drow-polygon>
  </div>
</template>

<script>
import DrowPolygon from './components/DrowPolygon.vue'

export default {
  name: 'app',
  components: {
    DrowPolygon,
  }
}
</script>

<style lang="scss">
    html,
    #app,
    body,
    .home{
        width: 100%;
        height: 300%;
        margin: 0;
        padding: 0;
    }
</style>
