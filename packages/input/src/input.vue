<template>
    <div class="cf-input">

        <template v-if="type != 'textarea'">

            <input :disabled="disabled" class="cf-input-base" type="text" placeholder="请输入内容">

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
        name: 'CfButton',
        props:{
            type:{
               
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
            handleClear(event) {
                
            }
        }
    }
</script>