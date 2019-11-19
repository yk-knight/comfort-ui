<template>
    <div class="com-view">
        <h2>Input 输入框</h2>
        
        <h3>示例</h3>

        <h5>基础用法</h5>
        <div>
            <div class="exp-box">
                <div class="butRow">
                    <cf-input></cf-input>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CfInput from '../../packages/input/src/input'

export default {
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
    button{
        margin-right:20px;
    }
    .butRow{
        margin-bottom: 20px;
    }
}
</style>