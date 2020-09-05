<template>
  <div class="song-list-card">
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
  name: "song-list-card",
  props: {
    data: Array,
    title: String
  }
}
</script>

<style>
.song-list-card {
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

.line2 .item-span {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
}

.line2 .body-item {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
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
