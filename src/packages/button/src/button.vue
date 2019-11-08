<template>
    <button
        class="cf-button" 
        @click="handleClick"
        :disabled="btnDisabled"
        :class="[
            buttonSize ? 'cf-button--' + buttonSize : '',
            {
                'is-circle':circle
            }
            
        ]">
        <span><slot></slot></span>
    </button>
</template>

<script>
    export default {
        name: 'CFButtom',
        props:{
            size: String,
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