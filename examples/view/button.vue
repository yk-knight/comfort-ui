<template>
    <div class="com-view">
        <h2>Button 按钮</h2>
        
        <h3>示例</h3>

        <h5>基础用法</h5>
        <div>
            <div class="exp-box">
                <div class="butRow">
                    <cf-button>默认按钮</cf-button>
                    <cf-button type="primary">默认按钮</cf-button>
                    <cf-button type="submit">确认按钮</cf-button>
                    <cf-button type="warning">警告按钮</cf-button>
                    <cf-button type="danger">错误按钮</cf-button>
                </div>
                <div class="butRow">
                    <cf-button round>默认按钮</cf-button>
                    <cf-button type="primary" round>默认按钮</cf-button>
                    <cf-button type="submit" round>确认按钮</cf-button>
                    <cf-button type="warning" round>警告按钮</cf-button>
                    <cf-button type="danger" round>错误按钮</cf-button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import CfButton from '../../packages/button/src/button'

export default {
    components:{
        CfButton
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