<template>
  <div class="jsmethods">
    <el-tabs type="border-card">
      <el-tab-pane label="字符串">
        <div class="item">
          <p>substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。</p>
          <el-table :data="substringData" border style="width: 100%">
            <el-table-column label="字符串" title="要操作的字符串" width="180">
              <template slot-scope="scope">
                <el-input v-model="substrparam1" @input="substrfn()" placeholder="请输入字符串" />
              </template>
            </el-table-column>
            <el-table-column label="参数1(start)" title="开始位置" width="180">
              <template slot-scope="scope">
                <el-input v-model="substrparam2" @input="substrfn()" placeholder="请输入开始位置" />
              </template>
            </el-table-column>
            <el-table-column label="参数2(length)" title="数量" width="180">
              <template slot-scope="scope">
                <el-input v-model="substrparam3" @input="substrfn()" placeholder="请输入length" />
              </template>
            </el-table-column>
            <el-table-column label="结果">
              <p>{{substrres}}</p>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="数组">数组</el-tab-pane>
      <el-tab-pane label="数值">数值</el-tab-pane>
      <el-tab-pane label="布尔">布尔</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      substringData: [1],
      substrparam1: "",
      substrparam2: "",
      substrparam3: "",
      substrres: ""
    };
  },
  methods: {
    substrfn() {
        this.substrparam2=this.substrparam2.replace(/[^0-9|^-]/g,'')
        if(this.substrparam2.charAt(0)=='-' || this.substrparam2.indexOf('-')>0){
            if(this.substrparam2.substr(1).length>=1){
                this.substrparam2=this.substrparam2.charAt(0)+this.substrparam2.substr(1).replace(/-/g,'')
            }
        }
        this.substrparam3=this.substrparam3.replace(/\D/g,'')
        if(this.substrparam1.trim() && this.substrparam2.trim() &&　!this.substrparam3.trim()){
            this.substrres=this.substrparam1.substr(this.substrparam2)
        }
        if(this.substrparam1.trim() && this.substrparam2.trim() &&　this.substrparam3.trim()){
            this.substrres=this.substrparam1.substr(this.substrparam2,this.substrparam3)
        }
    }
  }
};
</script>

<style scoped>
.jsmethods {
  color: #000;
}
</style>