<template>
    <div id="main">
        <nav><a>Waiting首页</a><span>&nbsp;>&nbsp;</span><a>发布宠物信息</a></nav>
        <div class="input">
            <p class="pet_class"><span>宠物种类:</span><select v-model="pet_class"><option>小狗</option><option>小猫</option><option>其他小动物</option></select><i>⁎</i>
            <span>城市:</span><select v-model="pet_city"><option>郑州</option><option>北京</option><option>上海</option></select><i>⁎</i>
            </p>
            <p class="pet_name"><span>宠物名:</span><input type="text" maxlength="10" v-model="pet_name" ><i>⁎</i></p>
            <p class="pet_title"><span>标题:</span><input type="text" maxlength="30" v-model="pet_title" ><i>⁎</i></p>
            <p class="pet_detail"><span>请填写宠物详情 ( 选填 ) : </span></p>
            <p class="pet_text"><textarea v-model="pet_text"></textarea><!-- 800*250 --></p>
            <div class="file">
              <h4>上传图片 ( 至少上传一张 ) :</h4>
              <input type="file"  id="file" @change="file()"></input><i>⁎</i>
              <input type="file" disabled></input>
              <input type="file" disabled></input>
              <input type="file" disabled></input>
            </div>
            <p >提示 : 带 <i> ⁎ </i> 号的为必填项</p>
        </div>
        <button class="SubPet" @click="subPet">提交信息</button>
    </div>
</template>
<script>
    export default{
        data() {
          return {
            pet_class:"小狗",
            pet_city:"郑州",
            pet_name:"",
            pet_title:"",
            pet_text:"",
            pet_file:"",
            uid:"",
            img1:"",
            ser_id:""
          }
        },
        created() {
          //加载页面时验证登录状态
          if(!this.$store.state.islogin){
            alert("请先登录!");
            this.$router.push({path: '/login'})
          }
        },
        watch: {
          pet_class(){
            console.log(this.pet_class);
          }
        },
        methods: {
          file(){
            this.pet_file=1;
          },
          subPet(){
            var uname = this.$store.state.uname;
            var ser_id="";
            //console.log(uname);
            if(this.pet_file>0 && this.pet_name.length>0 && this.pet_title.length>0){
            //promise  ---------------嵌套第一次请求-------------------
              this.axios.post('http://127.0.0.1:3000/user/reg/sea_uname',Qs.stringify({uname})).then(res=>{
                this.uid = res.data[0].uid;
                    //promise  ---------------嵌套第二次请求-------------------
                    var pet_class=this.pet_class
                    var formData = new FormData() // 声明一个FormData对象
                    var formData = new window.FormData()
                    formData.append('file', document.querySelector('#file').files[0])
                    formData.append('pet_class',pet_class)
                    var options = {  // 设置axios的参数
                    url: 'http://127.0.0.1:3000/pet/upload',
                    data: formData,
                    method: 'post',
                    headers: { 
                      'Content-Type': 'multipart/form-data'
                    }
                    }
                    this.axios(options).then((res) => {
                      this.img1 = res.data.img1;
                      this.ser_id = res.data.ser_id;
                      
                          //发送提交请求!promise  ---------------嵌套第三次请求-------------------
                          this.axios.post('http://127.0.0.1:3000/pet/addpet',Qs.stringify({pet_class:this.pet_class,pet_city:this.pet_city,pet_name:this.pet_name,pet_title:this.pet_title,pet_text:this.pet_text,uid:this.uid,img1:this.img1,ser_id:this.ser_id,pet_class:this.pet_class,
                          master:this.$store.state.uname})).then(res=>{
                            if(res.data.success==200){
                              alert("恭喜您,信息发布成功!点击回到首页查看!")
                              this.$router.push({path: '/'})
                              location.reload();
                            }else{
                              alert("Sorry!连接超时,请重试!")
                            }
                          })
                     }) 
            })
            }else{
              alert('请检查必选项是否填写完整!');
            }




















          }
        },
    }
</script>
<style scoped>
    #main{
    margin: 0 auto;
    margin-top:70px; 
    margin-bottom:10px; 
    width: 1200px;
    height: 850px;
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
  /* input样式 */
  div.input{
    width: 90%;
    height: 650px;
    margin: 0 auto;
    margin-top:20px; 
  }
  div.input i{
    color: red;
  }
  div.input p{
    margin-left: 100px;
    text-align: left;
  }
  div.input p span{
      display: inline-block;
      height: 30px;
      width: 100px;
      font-size: 18px;
      color:#666 ;
      text-align: right;
      padding-right: 20px;
  }
  .pet_class select{
    width: 80px;
    height: 25px;
    border-radius: 4px;
  }
  .pet_name input,.pet_title input{
    width: 160px;
    height: 25px;
    border-radius: 4px;
    border: 1px solid #aaa;
  }
  .pet_title input{
    width:400px;
  }
  div.input p{
    margin-top: 20px;
  }
  .pet_detail span{
    width: 200px !important;
  }
  .pet_text{
    margin-top: 0 !important;
  }
  .pet_text textarea{
    margin-left: 50px;
    width: 776px;
    height: 280px;
    font-size: 22px;
    resize:none;
    border-radius:5px; 
  }
  div.file h4{
    text-align: left;
    padding-left: 110px;
  }
  div.file input{
    width: 170px;
    margin: 10px 0 0 20px;
  }
  .SubPet{
    width: 200px;
    height: 40px;
  }
</style>