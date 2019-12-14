<!--> 
    组件名称：按钮组件
    属性 Attributes{
        type - 类型 - string - primary/success/warning/danger - 默认值：无
        size - 尺寸 - string - 
        plain - 是否朴素按钮 - string
        round - 是否圆形按钮 - string
        disabled - 是否禁用 - string  
    }
        
<-->
<template>
    <button
        class="cf-button" 
        @click="handleClick"
        :disabled="btnDisabled"
        :class="[
            type ? 'cf-button-' + type : '',
            buttonSize ? 'cf-button--' + buttonSize : '',
            {
                'is-plain': plain,
                'is-round': round
            }
            
        ]">
        <span><slot></slot></span>
    </button>
</template>

<script>
    export default {
        name: 'CfButton',
        props:{
            type:{
               
            },
            size: String,
            plain: Boolean,
            round: Boolean,
            disabled: Boolean
        },
        computed: {
            buttonSize() {
                return this.size
            },
            btnDisabled() {
                return this.disabled
            }
        },
        methods: {
            handleClick(event) {
                this.$emit('click',event);
            }
        }
    }
</script>