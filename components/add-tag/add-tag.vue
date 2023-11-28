<template>
	<view>
		<view @click="goPostAdd" class="add-post">
			<u-icon name="plus" color="#ffffff" size="30"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			link: String,
		},
		data() {
			return {

			};
		},
		options: {
			styleIsolation: 'shared'
		},
		methods: {
			goPostAdd() {
				uni.navigateTo({
					url: this.link
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.add-post {
		position: fixed;
		bottom: 140rpx;
		right: 20rpx;
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		// background-color: #ff3d17;
		background-color: #1093c2;
		box-shadow: 0 0 20rpx #999;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>