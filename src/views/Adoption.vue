<template>
  <div id="main">
    <nav><a>Waiting首页</a><span>&nbsp;>&nbsp;</span><a>宠物领养</a><span>&nbsp;>&nbsp;</span><a>狗狗</a></nav>
    <ul>
      <li @click="dog_list" :class="activeDog">汪星人</li>
      <li @click="cat_list" :class="activeCat">喵星人</li>
      <li @click="other_list" :class="activeOther">花鸟鱼虫</li>
    </ul>
    <div class="list">
      <!-- 狗 -->
      <div class="listP"v-if="activeDog=='active'" v-for="item in dogList" :key="item.index">
        <div class="p_img" v-bind:style="{ 'background': 'url(' + item.img1 + ')' }">
        </div>
        <div class="P_details">
          <h1>{{item.intro}}</h1><h4>宠物状态: <span>求领养</span></h4>
          <h3>宠物名 : <span>{{item.pname}}</span><span>编号:{{item.ser_id}}</span></h3>
          <p><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              {{item.details}}
          </p>
          <a href="">查看详情</a>
          <h5>发布人: <span>{{item.master}}</span><span>发布日期: {{item.create_time.slice(0,10)}}</span></h5>
        </div>
      </div>
      <!-- 猫 -->
      <div class="listP" v-if="activeCat=='active'" v-for="item in catList" :key="item.index">
          <div class="p_img" v-bind:style="{ 'background': 'url(' + item.img1 + ')' }">
          </div>
          <div class="P_details">
            <h1>{{item.intro}}</h1><h4>宠物状态: <span>求领养</span></h4>
            <h3>宠物名 : <span>{{item.pname}}</span><span>编号:{{item.ser_id}}</span></h3>
            <p><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {{item.details}}
            </p>
            <a href="">查看详情</a>
            <h5>发布人: <span>{{item.master}}</span><span>发布日期: {{item.create_time.slice(0,10)}}</span></h5>
          </div>
        </div>
      <!-- 花鸟鱼虫 -->
      <div class="listP" v-if="activeOther=='active'" v-for="item in otherList" :key="item.index">
          <div class="p_img" v-bind:style="{ 'background': 'url(' + item.img1 + ')' }">
          </div>
          <div class="P_details">
            <h1>{{item.intro}}</h1><h4>宠物状态: <span>求领养</span></h4>
            <h3>宠物名 : <span>{{item.pname}}</span><span>编号:{{item.ser_id}}</span></h3>
            <p><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {{item.details}}
            </p>
            <a href="">查看详情</a>
            <h5>发布人: <span>{{item.master}}</span><span>发布日期: {{item.create_time.slice(0,10)}}</span></h5>
          </div>
        </div>
    </div>
    <div class="loadMore"><button>加载更多...</button></div>
  </div>
</template>
<script>
export default {
        data(){
          return{
            // pet_title:"小狗求收养",
            // pet_name:"大军",
            // ser_id:"D18054161",
            // pet_text:"本人因个人原因，无法照顾狗狗。坐标北京朝阳，寻找有爱心的美女帅哥领养。狗狗身体健康，定期驱虫、打过针、一直吃皇家奶盖。允许探视。本人因个人原因，无法照顾狗狗。坐标北京朝阳，寻找有爱心的美女帅哥领养。狗狗身体健康，定期驱虫、打过针、一直吃皇家奶盖。允许探视。本人因个人原因，无法照顾狗狗。坐标北京朝阳，寻找有爱心的美女帅哥领养。狗狗身体健康，定期驱虫、打过针、一直吃皇家奶盖。允许探视。本人因个人原因，无法照顾狗狗。坐标北京朝阳，寻找有爱心的美女帅哥领养。狗狗身体健康，定期驱虫、打过针、一直吃皇家奶盖。允许探视。本人因个人原因，无法照顾狗狗。坐标北京朝阳，寻找有爱心的美女帅哥领养。狗狗身体健康，定期驱虫、打过针、一直吃皇家奶盖。允许探视。本人因个人原因，无法照顾狗狗。坐标北京朝阳，寻找有爱心的美女帅哥领养。狗狗身体健康，定期驱虫、打过针、一直吃皇家奶盖。允许探视。本人因个人原因，无法照顾狗狗。坐标北京朝阳，寻找有爱心的美女帅哥领养。狗狗身体健康，定期驱虫、打过针、一直吃皇家奶盖。允许探视。",
            // master:"li19931130",
            // create_time:"",
            petClass:"",
            dogList:[],
            catList:[],
            otherList:[],
            activeDog:'active',
            activeCat:"",
            activeOther:""
            }
        },
        created() {
          this.dog_list()
        },
        methods: {
          dog_list(){
            this.activeCat="";
            this.activeOther="";
            this.activeDog="active";
            this.axios.get('http://127.0.0.1:3000/pet/dogList').then(res=>{
            this.dogList=res.data;
            })
          },
          cat_list(){
            this.activeCat="active";
            this.activeOther="";
            this.activeDog="";
            this.axios.get('http://127.0.0.1:3000/pet/catList').then(res=>{
            this.catList=res.data;
            })
          },
          other_list(){
            this.activeCat="";
            this.activeOther="active";
            this.activeDog="";
            this.axios.get('http://127.0.0.1:3000/pet/otherList').then(res=>{
            this.otherList=res.data;
            })
          }
        }
      }
</script>
<style scoped>
  #main{
    margin: 0 auto;
    margin-top:70px; 
    width: 1200px;
    border: 1px solid transparent;
    box-shadow: 0 0 4px rgba(250,136,83,0.8)
  }
  #main>nav{
    width: 90%;
    height: 40px;
    text-align: left;
    line-height: 40px;
    margin:10px 60px;
    margin-bottom:0px;  
    border-bottom:1px solid #e6e6e6;
  }
  #main>nav a:hover{
    text-decoration: underline;
    cursor: pointer;
  }
  #main>ul{
    width: 90%;
    height: 40px;
    text-align: center;
    margin-left:60px;
  }
  #main>ul li{
    float: left;
    width: 10%;
    height: 40px;
    line-height: 40px;
    margin: 20px 40px;
    font-size: 1.3rem;
    color: #666;
    font-family: "华文琥珀";
    transition: .1s;
    border-bottom:2px solid transparent; 
    transition: .3s
  }
  #main>ul li:hover{
    border-bottom:2px solid #aaa; 
    cursor: pointer;
  }
  .active{
    border-bottom:2px solid #aaa !important; 
  }
  /* 宠物列表 */
  .list{
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-flow: column;
  }
  .list>div.listP{
    width: 100%;
    height: 200px;
    border-bottom:1px solid #c6c6c6;
    position: relative;
    margin: 20px 0;
  }
  .p_img{
    width: 245px;
    height: 195px;
    background-position: center center;
    background-size:cover;
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .P_details{
    width: 760px;
    height: 200px;
    position: absolute;
    top: 0;
    right: 20px;
    text-align: left;
  }
  .P_details h1{
    cursor: pointer;
  }
  .P_details h1:hover,.P_details p:hover,.P_details h5 span:nth-child(1):hover{
    text-decoration: underline;
  }
  .P_details h1,.P_details h4{
    display: inline-block;
  }
  .P_details h4{
    position: absolute;
    top: 10px;
    right: 0;
  }
  .P_details h4 span{
    display: inline-block;
    width: 50px;
    height: 22px;
    text-align: center;
    line-height: 25px;
    background: #00BC00;
    color: white;
  }
  .P_details h3{
    margin: 15px 0;
    color: #aaa;
  }
  .P_details h3 span:nth-child(2){
    margin-left: 100px;
  }
  .P_details p{
    width: 100%;
    height: 30px;
    white-space:nowrap; 
    overflow:hidden; 
    text-overflow:ellipsis; 
  }
  .P_details a{
    display: inline-block;
    width: 150px;
    height: 40px;
    line-height: 45px;
    text-align: center;
    border:1px solid #684029;
    border-radius: 3px;
    color: #684029;
    margin: 5px 0px;
    transition: .2s;
  }
  .P_details a:hover{
    color: #000;
    background: rgba(250,136,83,0.9);
  }
  .state0{
    display: inline-block;
    margin-left: 500px;
    color: green;
  }
  .P_details h5{
    margin: 3px;
    color: #aaa;
  }
  .P_details h5 span,.P_details h3 span{
    display: inline-block;
    width: 150px;
    height: 10px;
  }
  .P_details h5 span:nth-child(2){
    position: absolute;
    top: 175px;
    right: 0px;
    margin-right: -30px;
  }
  .loadMore button{
    width: 150px;
    height: 40px;
    margin-bottom: 10px;
  }
</style>