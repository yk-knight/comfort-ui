<template>
    <div class="cf-input">
        <input type="text">
    </div>
    
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