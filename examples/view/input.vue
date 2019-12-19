<template>
    <div class="com-view">
        <h2>Input 输入框</h2>
        
        <h3>示例</h3>

        <h5>基础用法</h5>
        <div>
            <div class="exp-box">
                <div class="view-row">
                    <cf-input v-model="test"></cf-input>
                    {{test}}
                </div>
                <div class="view-row">
                    <cf-input :disabled = 'true'></cf-input>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CfInput from '../../packages/input/src/input'

export default {
    data(){
        return {
            test:"kkk"
        }
    },
    components:{
        CfInput
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