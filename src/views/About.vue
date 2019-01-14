<template>
    <div>
            <button @click="btn()">dianji{{aabb}} </button>
    </div>
</template>
<script>
export default {
        data(){
          return{
          aabb:'哈加快速度'
        }
        },
        methods: {
          btn(){
            console.log(this.aabb);
          }
        },
      }</script>
<style></style>