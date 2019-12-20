<template>
    <div class="com-view">
        <h2>Input 输入框</h2>
        
        <h3>示例</h3>

        <h5>基础用法</h5>
        <div>
            <div class="exp-box">
                <div class="view-row">
                    <cf-formItem label="用户名">
                        <cf-input type="text" v-model="userModel.username"></cf-input>
                    </cf-formItem>
                    <cf-formItem label="密码">
                        <cf-input type="password" v-model="userModel.password" placeholder="abc"></cf-input>
                    </cf-formItem>
                </div>
                {{userModel}}
                <div class="view-row">
                    <cf-input :disabled = 'true'></cf-input>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CfInput from '../../packages/input/src/input'
import CfFormItem from '../../packages/form/src/formItem'

export default {
    data(){
        return {
            userModel:{ username:'', password:'' },
            rules:[

            ]
        }
    },
    components:{
        CfInput,CfFormItem
    }
}
</script>

<style lang="stylus" scope>
.exp-box {
    width:1100px;
    border:solid 1px #ccc;
    background:#FFF;
    padding:30px 25px;
    .view-row{
        margin-bottom: 20px;
        margin-right:20px;
        width:180px;
    }
}
</style>