<template>
	<view>
		<article-one></article-one>
		<comment-eg :articleId="articleId1"></comment-eg>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				articleId1: 1,
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>