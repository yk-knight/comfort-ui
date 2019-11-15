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
                'is-round': round,
                'is-circle': circle
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
            disabled: Boolean,
            circle: Boolean
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