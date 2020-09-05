<template>
  <div class="recommend-song">
     <h3 class="title">{{title}}</h3>
      <ul class="body-group">
        <li class="body-item" v-for="(item,index) in data" :key="index">
          <router-link :to="{name: 'songlist', params:{id:item.id}}">
            <img class="item-img" :src="item.picUrl" />
            <span class="item-span">{{item.name}}</span>
          </router-link>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "recommend-song",
  props: {
    data: Array,
    title: String
  }
}
</script>

<style>
.recommend-song {
  width: 100%;
  margin: auto;
}

.title {
  height: 40px;
  line-height: 40px;
  margin-left: 3vw;
}

.body-group {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.body-item {
  width: 30%;
  display: inline-block;
  margin-bottom: 15px;
  height: auto;
  flex: 0 0 30%;
  font-size: 14px;
}

.item-span {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.item-img,
.item-span {
  width: 100%;
  border-radius: 5px;
  color: rgb(80, 80, 80);
}

a {
  text-decoration: none;
  color: black;
}
</style>
