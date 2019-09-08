<template>
  <div class="index-side">
      <el-container>
        <el-header>
            <commonheader></commonheader>
        </el-header>
        <el-container>
            <el-scrollbar style="height:100%">
                <el-aside width="200px">
                    <sidebar :act="index"></sidebar>
                </el-aside>
            </el-scrollbar>
            <el-main>
                <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="项目 ID">
                            <span>{{ props.row.id }}</span>
                        </el-form-item>
                        <el-form-item label="项目名称">
                            <span>{{ props.row.name }}</span>
                        </el-form-item>
                        <el-form-item label="项目设备">
                            <span>{{ props.row.device }}</span>
                        </el-form-item>
                        <el-form-item label="项目描述">
                            <span>{{ props.row.desc }}</span>
                        </el-form-item>
                        <el-form-item label="项目收益">
                            <span>{{ props.row.money }}</span>
                        </el-form-item>
                        <el-form-item label="支付方式">
                            <span>{{ props.row.pay }}</span>
                        </el-form-item>
                        <el-form-item label="日期">
                            <span>{{ props.row.date }}</span>
                        </el-form-item>
                        <el-form-item label="手机号">
                            <span>{{ props.row.moblie }}</span>
                        </el-form-item>
                        </el-form>
                    </template>
                    </el-table-column>
                    <el-table-column
                    label="ID"
                    prop="id">
                    </el-table-column>
                    <el-table-column
                    label="名称"
                    prop="name">
                    </el-table-column>
                    <el-table-column
                    label="设备"
                    prop="device">
                    </el-table-column>
                    <el-table-column
                    label="描述"
                    prop="desc">
                    </el-table-column>
                    <el-table-column
                    label="微信号"
                    prop="wechatnumber">
                    </el-table-column>
                    <el-table-column
                    label="日期"
                    prop="date">
                    </el-table-column>
                    <el-table-column
                    label="收益"
                    prop="money">
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
      </el-container>
  </div>
</template>

<script>
import sidebar from './sidebar'
import commonheader from './header'
export default {
    data(){
        return{
            index:'index',
             tableData: [{
                id: '12987122',
                name: '好滋好味鸡蛋仔',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                device:'iPhone 8',
                money:'￥200',
                pay:'微信零钱入账',
                date:'2019-09-08',
                wechatnumber:'不如诗',
                moblie:'13029431631'
                }, {
                id: '12987123',
                name: '好滋好味鸡蛋仔',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                device:'iPhone 8',
                money:'￥100',
                pay:'微信零钱入账',
                date:'2019-09-08',
                wechatnumber:'活动1号',
                moblie:'13404023808'
                }, {
                id: '12987125',
                name: '好滋好味鸡蛋仔',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                device:'iPhone 6',
                money:'￥200',
                pay:'微信服务号红包',
                date:'2019-09-07',
                wechatnumber:"活动2号",
                moblie:'13029431631'
                }, {
                id: '12987126',
                name: '好滋好味鸡蛋仔',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                device:'iPhone 8',
                money:'￥500',
                pay:'微信零钱入账',
                date:'2019-08-08',
                wechatnumber:'活动3号',
                moblie:'13029431631'
            },{
                id: '12987127',
                name: '好滋好味鸡蛋仔',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                device:'iPhone 8',
                money:'￥500',
                pay:'微信零钱入账',
                date:'2019-08-08',
                wechatnumber:'活动3号',
                moblie:'13029431631'
            },{
                id: '12987128',
                name: '好滋好味鸡蛋仔',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                device:'iPhone 8',
                money:'￥500',
                pay:'微信零钱入账',
                date:'2019-08-08',
                wechatnumber:'活动3号',
                moblie:'13029431631'
            }]
        }
    },
    components:{
        sidebar,
        commonheader
    },
    methods:{
        tableRowClassName({row, rowIndex}) {
            if (rowIndex === 1) {
            return 'warning-row';
            } else if (rowIndex === 3) {
            return 'success-row';
            }
            return '';
        }
    }
}
</script>

<style lang="scss" scoped>
    .index-side{
        height: 100%;
        color: #fff
    }
    header{
        line-height: 60px;
    }
</style>
<style>
    .el-aside{
        height: 100%;
    }
    .el-container{
        height: 100%;
    }
    .el-aside{
        background: #140D43;
        border-radius: 10px
    }
    .demo-table-expand {
    font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 52%;
    }
</style>