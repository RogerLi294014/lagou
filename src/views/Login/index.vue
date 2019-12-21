<template>
    <div class="login">
        <div id="logo-box">
            <img src="http://gw.alicdn.com/tfs/TB1QfeUQAvoK1RjSZFDXXXY3pXa-300-138.png" alt="">
        </div>
        <div class="formBox">
            <form action="">
                <div class="login-label-text">
                    <div class="phone-code-select" @click="popupVisible = !popupVisible">{{num}}&nbsp;∨</div>
                    <input type="text" @blur="ifFocus=false" placeholder="请输入手机号" class="rightIput" @focus="setLine" v-model="telNum">
                    <div id="box">
                        <p :class="['a',{'aBox':ifFocus}]"></p>
                    </div>
                    <div class="x" v-if="showX" @click="telNum=''">×</div>
                </div>
                <div class="msgCode">
                    <input type="text" placeholder="请输入验证码" @focus="setLine1" @blur="ifMsg=false" v-model="msgC">
                    <div class="msg" @click="getMsg">获取验证码</div>
                    <div id="box">
                        <p :class="['a',{'aBox':ifMsg}]"></p>
                    </div>
                    <div class="x x2" v-if="showX2" @click="msgC=''">×</div>
                </div>
                <router-link class="loginBtn" :to="{name:'mine',params:{id:telNum}}">登录</router-link>
                
            </form>
            <div class="registBox">
                <a>账号密码登录</a>
                <a>新用户注册</a>
            </div>
            
        </div>
        <div class="otherpart-login">
            <p>其他方式登录</p>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAJ1BMVEXvVjvvVTrvVTrvVTrvVTrvVjvwVDjvVjvwVTrwVTnvVTrvVTrxVDgxkGpaAAAADXRSTlP+Ab2e2foJ7V0qekEUkXdbKgAAAo1JREFUSMetVgly5DAIxAh0gP7/3uWQx5YzM9mtWpJU2Y5aoKYBwfG0OlQKETNRER31xwJ4vKtgg5s1lPEVotgYdmNoZXyETIwlD4h9aDLfQ7p5eAKWI6D+BlILfDWpT4gHxV8xpe6QSfCrlR2CDH+NCUgV+BtjuSD9JObG0VvTEzLWikaReH6lk594mguy6C1jjuKJU1PNWscPNZSEaH7F5AHYH9QWF+mqY6iWi842AlLSe+ZKgPWoR5dhMZyZqJ0uNxWWE14UluWtehV0t7nlzdzAIZyBUc1/ae48VhUwqW8w2qJCDgj5xgt17bS4z3A5bayI4wtWOBk2ikN9saVsEoqQlxuLDPolVduYfEd1V7OfRvgqJvfTofAlVAmMgiwG8gcDUnHlVABPJ0dgmDpbIMOZPtSd6MMLAm0RSz6MhqnvYPP0skQDba+hOI82IyakcG02L8hNvThdKaWIlBK13ouZtN1Lu+nUMMavnb9W//Vl/jTxCbk3OlPDIEJCpFCcoBnx8yy0e9G2lp1nIdkZMwDuBSQwgrjgAo3yepTdS4GrfXnmJ/FMSOrMkzrKBhETzFnGGl2gpWTSSyL7BukvWbIjqp0sdJvBDK17w05ZrkfuLqqeWs4S879pZxmbFxN/FgJnmyYvqWvn2huoZgllMbC9WCG3RVZd/QzHqy4jc9GJctkqZONlTYOZ+uZGYZbmoYg+kOrVubIpnars/KFxvxoq8Li3Phunzx5Mdbr5wN1b33myn52YPT6MGBfDc2/j73o979v0a77IZ8zd921Y/Doof46kW//4YjjrNl4r/o741yFeXoNguyp8Bry9Knh+SnszJjkG3MdrzyhvPDXU/3u5Oq9waJesj1e4P46NE0UeOhwBAAAAAElFTkSuQmCC" alt="">
        </div>
        <mt-popup
            v-model="popupVisible"
            position="bottom">
            <header>
                <div class="headerBox">
                    <a class="cancel-btn" @click="popupVisible = false">取消</a>
                    <a class="ok-btn" @click="changenum">确认</a>
                </div>
            </header>
            <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
       </mt-popup>
    </div>
</template>

<script>
// import Vue from 'vue'
// Vue.directive('focus', {
//   // 当被绑定的元素插入到 DOM 中时……
//   inserted: function (el) {
      
//   }
// })
import { Toast } from 'mint-ui';

export default {
    watch:{
        telNum(val){
            if(val){
                this.showX = true;
            }else{
                this.showX = false;
            }
        },
        msgC(val){
            if(val){
                this.showX2 = true;
            }else{
                this.showX2 = false;
            }
        }
    },
methods: {
    msgCode(){
        this.msgC = '';
    },
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
      var str = values[0].substr(0,4)
      console.log(str)
      this.num2 = str;
    },
    changenum(value){
        this.num = this.num2
        this.popupVisible = false
    },
    setLine(){
        this.popupVisible =false
        this.ifFocus = true
    },
    setLine1(){
        this.ifMsg = true
    },
    getMsg(){
        if((/^[1-3]\d{10}$/).test(this.telNum)){
            if(!this.toastObj){
                Toast({
                    message: '已发送',
                    position: 'bottom',
                    duration: 3000,
                    className:'msgFont'
                });
                this.toastObj = true;
                this.telNum = "";
                setTimeout(() => {
                    this.toastObj = false;
                }, 3000);
            }
            
        }else{
            if(!this.toastObj){
                Toast({
                    message: '请输入正确手机号码',
                    position: 'bottom',
                    duration: 3000,
                    className:'msgFont'
                });
                this.toastObj = true;
                setTimeout(() => {
                this.toastObj = false;
            }, 3000);
        }
            
            
        }
    }
  },
  data() {
    return {
      msgC:"",
      showX2:false,
      toastObj:false,
      showX:false,
      telNum:null,
      slots: [
        {
          flex: 1,
          values: ['+86 中国大陆', '+852 中国香港', '+853 中国澳门', '+886 中国台湾'],
          className: 'slot1',
          textAlign: 'center'
        }
      ],
      num:'+86',
      num2:'',
      popupVisible:false,
      ifFocus:false,
      ifMsg:false,
    }
  }
}
</script>

<style lang="scss">
.clearfn:after{
	content:"";
	clear:both;
	height:0;
	display:block;
	overflow:hidden;
	visibility:hidden;
}
// div{
//     color:#666;
// }

.x{
    position: absolute;
    right: 10px;
    bottom: 12px;
    font-size:14px;
    width:16px;
    height:16px;
    text-align: center;
    line-height: 16px;
    background: #666;
    color: #fff;
    border-radius:50%;
}
.x2{
    right:110px;
}
.msgFont{
    font-size: 14px;
}
.otherpart-login{
    width:100%;
    position: fixed;
    bottom: 10px;
    font-size:14px;
    text-align: center;
    p{
        text-align: center;
    }
    img{
        margin:0 auto;
        margin-top:5px;
        text-align: center;
    }
}
.registBox{
    margin: 8px 0;
    height:16px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    color:#666;
    a{
        font-size:12px;
        text-decoration: none;
        color:#666;
    }
}
.loginBtn{
    display: block;
    font-size: 18px;
    background-color: #ff1268;
    background-image: -webkit-gradient(linear,left top,right top,from(#ff4aae),to(#ff1268));
    background-image: linear-gradient(90deg,#ff4aae,#ff1268);
    border-color: #ff1268;
    height: 42px;
    line-height: 42px;
    outline: none;
    color: #fff;
    width: 100%;
    cursor: pointer;
    text-align: center;
    border-radius:5px;
    margin-top:20px;
}
#box{
    // background-color:#ccc;
    height:2px;
    overflow:hidden;
    width:100%;
    position: absolute;
    bottom:-1px;
}
.a{
    background-color:red;
    width:0;
    height:2px;
    margin: 0 auto;
    // transition:width .8s;
}
.aBox{
    width:100%;
    transition:width .3s;
}



.msgCode{
    border-bottom:1px solid #ccc;
    width:100%;
    margin-bottom: 10px;
    position: relative;
    font-size: 14px;
    justify-content: space-between;
    input{
        border:none;
        width:100%;
        height: 42px;
        outline: none;
        font-size: 14px;
        padding:0 10px;
    }
    .msg{
      border-radius: 20px;
      padding: 0 10px;
      margin-bottom: 8px;
      background: #fff1f6;
      line-height: 25px;
      position: absolute;
      right: 10px;
      bottom: 0;
      color:#fc347b;
    }
}
#logo-box{
    height: 1.6rem;
    display: flex;
    justify-content: center;
    img{
        width: 1.3rem;
        height: 0.6rem;
        margin-top: 0.5rem;
    }
}
.login-label-text{
    border-bottom:1px solid #ccc;
    width:100%;
    margin-bottom: 10px;
    font-size: 14px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    .phone-code-select{
        color:#666;
        width: 70px;
        padding-left: 10px;
        height: 42px;
        line-height: 40px;
        border-right: 1px solid #ccc;
        float: left;
        cursor: pointer;
        display: flex;
        justify-content: center;
    }
    .rightIput{
        width:100%;
        border:0;
        padding-left:10px;
        font-size:14px;
    }
}
.formBox{
    padding: 0 20px 20px;
}
.phone-code{
    position: absolute;
    top: 100px
}

//picker
.mint-popup {
    width: 100%;
    position:fixed;
    // bottom:36px;
    bottom:0px;
    font-size:14px;
    background: #fff;
}
header{
    background-color: #fff;
    border-bottom: 1px solid #eee;
    width:100%;
    line-height: 40px;
    height: 40px;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
    .headerBox{
        margin:0 15px;
        display: flex;
        justify-content: space-between;
    }
    a{
        display: block;
        color:#ff1268;
    }
}
.picker{
    overflow: hidden;
}
.picker-item{
    height: 36px;
    line-height: 36px;
    color:#ccc;
}
.picker-items{
    text-align: center;
    font-size: 14px;
    position: relative;
}
.picker-center-highlight{
    border-top:1px solid #ddd;
    border-bottom:1px solid #ddd;
    color:#222;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    pointer-events: none;
}
.picker-selected{
    color:#222;
}
.picker-slot-wrapper{
    transition: .3s;
    transition-timing-function: ease-out;
    margin-top:30px;
}
.activeInput{
   background: #ff1268;
}
</style>