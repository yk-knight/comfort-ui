<template>
	<div class="cf-formItem">
		<label v-if="label">{{label}}</label>
		<slot></slot>
		<p v-if="error">{{error}}</p>
	</div>
</template>

<script>
export default {
	name: 'CfFormItem',
	data () {
		return {
			error: ''
		}
		
	},
	props:{
		label: {
			type: String,
			default: ''
		}
	}
}
</script>