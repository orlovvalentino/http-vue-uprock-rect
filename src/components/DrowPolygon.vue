<template>
  <div>
      <DrowRectangle
        v-on:newitem="newitem"
      />
      <rectangles
              v-for="(item, index) in items"
              :item="item"
              :key="item.id"
              v-on:remove="remove(index)"/>

  </div>
</template>

<script>
import PostsService from '@/services/PostsService.js'
import DrowRectangle from '@/components/DrowRectangle.vue'
import Rectangles from '@/components/Rectangles.vue'
import response from '../../1.json';
export default {
    name: 'DropPolygon',
    data () {
      return {
        response,
        items:[]
      }
    },
    methods: {
      async getPosts () {
        // const response = await PostsService.fetchPosts();
        this.items = response;
      },
      remove(index){
        this.items.splice(index, 1);
      },
      newitem(item){
        this.items.push(item);
      }
    },
    mounted () {
      this.getPosts()
    },
    components:{
        Rectangles,
        DrowRectangle,
        PostsService
    }
}
</script>
<style lang="scss">
    .div{
        position: absolute;
    }
</style>
