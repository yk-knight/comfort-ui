<template>
    <div class="cf-input">

        <template v-if="type != 'textarea'">

            <input v-bind="$attrs" :disabled="disabled" :value="value" @input="onInput" :type=type class="cf-input-base" />

            <!-- 后置元素 -->
            <i class="cf-icon"
                @click="handleClear"
                :class="[
                    {
                        'is-clear':clearable
                    }
                    ]" 
                ></i>
        </template>
        

        
        <textarea v-else cols="30" rows="10"></textarea>
    </div>
    
</template>

<script>
    export default {
        name: 'CfInput',
        inheritAttrs:false,
        data() {
            return {
                currentValue:this.value
            }
        },
        props:{
            value:{
                type:String,
                default:''
            },
            type:{
               type:String,
               default:'text'
            },
            size: String,
            disabled: Boolean,
            clearable: Boolean
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
            onInput(event) {
                this.$emit('input',event.target.value)
            },
            handleClear(event) {
                
            }
        }
    }
</script>