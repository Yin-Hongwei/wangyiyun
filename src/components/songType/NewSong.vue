<template>
  <div class="new-song">
    <h3 class="title">{{title}}</h3>
    <ul class="body-group">
      <li class="body-item" v-for="(item,index) in data" :key="index">
        <img class="item-img" :src="item.song.album.picUrl" />
        <p class="item-title">{{ item.name }}</p>
        <span class="item-span">{{item.song.artists[0].name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "new-song",
  props: {
    data: Array,
    title: String,
  },
};
</script>

<style>
.new-song {
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
