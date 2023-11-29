<template>
	<view>
		<article-one :article="article"></article-one>
		<comment-eg :articleId="articleId1"></comment-eg>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				article: null,
				articleId1: 1,
			}
		},
		onLoad(option) {
			this.id = option.item
			console.log(option.item)
			this.init()
		},
		methods: {
			async init() {
				console.log("__")
				const res = await this.$request({
					url: 'news/getOne/' + this.id,
					method: 'GET'
				})
				if (res.data.code == 200) {
					console.log(res.data.data)
					this.article = res.data.data

				}
			},
		}
	}
</script>

<style>

</style>