<template>
  <div class="account">
    <div class="acc-head">账号</div>
    <div class="acc-box">
      <p>登录网易云音乐</p>
      <p>手机电脑多端同步，320k高音乐无限下载</p>
      <div>立即登录</div>
    </div>
    <div class="acc-item">
      <ul>
        <li>
          <div></div>
          <p>我的消息</p>
          <div> ＞ </div>
        </li>
        <li>
          <div></div>
          <p>会员中心</p>
          <div> ＞ </div>
        </li>
        <li>
          <div></div>
          <p>商场</p>
          <div> ＞ </div>
        </li>
        <li>
          <div></div>
          <p>游戏推荐Beta</p>
          <div> ＞ </div>
        </li>
        <li>
          <div></div>
          <p>在线歌曲免流量</p>
          <div> ＞ </div>
        </li>
        <li>
          <div></div>
          <p>设置</p>
          <div> ＞ </div>
        </li>
        <li>
          <div></div>
          <p>扫一扫</p>
          <div> ＞ </div>
        </li>
        <li>
          <div></div>
          <p>个性换肤</p>
          <div> ＞ </div>
        </li>
        <li>
          <div></div>
          <p>夜间模式</p>
          <div> ＞ </div>
        </li>
        <li>
          <div></div>
          <p>定时关闭</p>
          <div> ＞ </div>
        </li>
        <li>
          <div></div>
          <p>音乐闹钟</p>
          <div> ＞ </div>
        </li>
        <li>
          <div></div>
          <p>驾驶模式</p>
          <div> ＞ </div>
        </li>
        <li>
          <div></div>
          <p>优惠劵</p>
          <div> ＞ </div>
        </li>
        <li>
          <div></div>
          <p>分享网易云音乐</p>
          <div> ＞ </div>
        </li>
        <li>
          <div></div>
          <p>关于</p>
          <div> ＞ </div>
        </li>
      </ul>
    </div>
    <foot/>
  </div>
</template>

<script>
import Foot from '../components/foot/Footer'
export default {
  name: 'account',
  components: {
    Foot
  }
}
</script>

<style scoped>
.account {
  background-color: #eceae8;
  color: dimgrey;
}
.acc-head {
  height: 60px;
  width: 100%;
  background-color: #d7463f;
  color: white;
  text-align: center;
  line-height: 60px;
}
/*--------------------load---------------------------*/
.acc-box {
  width: 100%;
  height: 120px;
  background-color: white;
  text-align: center;
  padding-top: 8px;
}
.acc-box p {
  font-size: 0.8em;
  margin-bottom: 8px;
}
.acc-box div {
  height: 30px;
  line-height: 30px;
  border: 1px solid dimgrey;
  border-radius: 25px;
  margin: 15px 5px;
}
/*--------------------item---------------------------*/
.acc-item ul li{
  line-height: 40px;
  background-color: white;
  display: flex;
  width: 100%;
}
.acc-item ul li p {
  width: 90%;
}
.acc-item ul li:nth-child(1),
.acc-item ul li:nth-child(2),
.acc-item ul li:nth-child(6),
.acc-item ul li:nth-child(14){
  margin-top: 9px;
}
.acc-item ul li:after {
  content:"";
  width: 88%;
  left: 30px;
  right: 0;
  height:1px;
  background-color:#eceae8;
  position:absolute;
  z-index:1;
}
.acc-item ul li div {
  width: 40px;
  height: 100%;
}
</style>
