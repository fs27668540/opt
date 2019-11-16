<template>
  <div class="deciphering">
    <div class="leftcon">
      <p>解密</p>
      <el-input clearable v-model="input1" placeholder="请输入要解密的內容"></el-input>
      <el-button type="primary" @click="decryptionSure">确认解密</el-button>
      <p v-if="decryptionResult">结果：{{decryptionResult}}</p>
    </div>
    <div class="rightcon">
      <p>加密</p>
      <el-input clearable v-model="input2" placeholder="请输入要加密的內容"></el-input>
      <el-button type="primary" @click="encryptionSure">确认加密</el-button>
      <p v-if="encryptionResult">结果：{{encryptionResult}}</p>
    </div>
  </div>
</template>

<script>
import md5 from "js-md5";
let Base64 = require('js-base64').Base64;
export default {
  data() {
    return {
      input1: "",
      input2: "",
      AUTH_KEY: "soon.im520",
      encryptionResult:'',
      decryptionResult:''
    };
  },
  created(){
      
  },
  methods: {
    encryptionSure(){
        this.encryptionResult=this.think_encrypt(this.input2)
    },
    decryptionSure(){
        if(this.think_decrypt(this.input1)){
            this.decryptionResult=this.think_decrypt(this.input1)
        }else{
            this.$message.error('您的输入有误')
        }
    },
    //加密
    think_encrypt($data) {
      var $key = md5(this.AUTH_KEY);
      $data = Base64.encode($data);
      var $x = 0;
      var $len = $data.length;
      var $l = $key.length;
      var $char = "";

      for (let $i = 0; $i < $len; $i++) {
        if ($x == $l) $x = 0;
        $char += $key.substr($x, 1);
        $x++;
      }

      var $str = '0000000000';

      for (let $i = 0; $i < $len; $i++) {
        $str += String.fromCharCode(
          $data.charCodeAt($i) + $char.charCodeAt($i) % 256
        );
      }
      return Base64.encode($str).replace(/\+/g,'-').replace(/\//g,'_').replace(/=/g,'')
    },
    //解密
    think_decrypt($data) {
	var $key = md5 (this.AUTH_KEY);
	var data = $data.replace(/-/g,'+').replace(/_/g,'/')
    var $mod4 = data.length % 4;
	if ($mod4) {
		data += '===='.substr($mod4);
	}
	data = Base64.decode ( data );
	// $expire = substr ( data, 0, 10 );
	data = data.substr (10);
	
	// if ($expire > 0 && $expire < time ()) {
	// 	return '';
	// }
	var $x = 0;
	var $len = data.length;
	var $l = $key.length;
    var $char = '';
    var $str = ''
	
	for(let $i = 0; $i < $len; $i ++) {
		if ($x == $l)
			$x = 0;
		$char += $key.substr($x, 1 );
		$x ++;
	}
	
	for(let $i = 0; $i < $len; $i ++) {
		if (data.charCodeAt ($i) < $char.charCodeAt ($i)) {
			$str += String.fromCharCode( data.charCodeAt($i) + 256 - $char.charCodeAt ($i) );
		} else {
			$str += String.fromCharCode( data.charCodeAt($i) - $char.charCodeAt($i ) );
		}
	}
	return Base64.decode($str);
}
  }
};
</script>

<style  scoped>
.deciphering {
  display: flex;
}
.deciphering > div {
  width: 30%;
}
.deciphering > div.rightcon {
  margin-left: 25px;
}
.deciphering > div > p {
  padding-bottom: 15px;
}
.deciphering > div > button {
  margin-top: 25px;
}
.deciphering > div > button + p {
  margin-top: 30px;
}
</style>