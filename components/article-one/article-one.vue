<template>
	<view>

		<view class="u-page">
			<view class="album">
				<view class="album__avatar">
					<image src="/static/logo.png" mode="" style="width: 32px;height: 32px;"></image>
				</view>
				<view class="album__content" @click="goPage">
					<u--text text="Origin" type="primary" bold size="15"></u--text>
					<u--text margin="0 0 8px 0" text="全面的组件和便捷的工具会让您信手拈来，如鱼得水"></u--text>
					<u-album :urls="urls2"></u-album>
				</view>
			</view>
			<view style="padding-top: 15rpx;">
				<u-row gutter="10">
					<u-col :span="3">
					</u-col>
					<u-col :span="3">
						<u-icon name="thumb-up"></u-icon>
					</u-col>
					<u-col :span="3">
						<u-icon name="thumb-down"></u-icon>
					</u-col>
					<u-col :span="3">
						<u-icon name="heart"></u-icon>
					</u-col>
				</u-row>
			</view>
		</view>
		<view style="padding: 20rpx;">
			<!-- <u-line color="#f3f4f6" :margin="20" :hairline="false"></u-line> -->
			<u-gap height="2" bgColor="#f3f4f6"></u-gap>
		</view>

		<!-- <view style="width: 100%;height: 100rpx;opacity:0;">底部占位盒子</view> -->
	</view>
</template>

<script>
	import {
		methods
	} from '../../uni_modules/uview-ui/libs/mixin/mixin'
	export default {
		name: "article-one",
		props: {
			list: Array,
		},
		data() {
			return {
				albumWidth: 0,
				urls2: [
					'https://cdn.uviewui.com/uview/album/1.jpg',
					'https://cdn.uviewui.com/uview/album/2.jpg',
					'https://cdn.uviewui.com/uview/album/3.jpg',
					'https://cdn.uviewui.com/uview/album/4.jpg',
					'https://cdn.uviewui.com/uview/album/5.jpg',
					'https://cdn.uviewui.com/uview/album/6.jpg',
					'https://cdn.uviewui.com/uview/album/7.jpg',
					'https://cdn.uviewui.com/uview/album/8.jpg',
					'https://cdn.uviewui.com/uview/album/9.jpg',
					'https://cdn.uviewui.com/uview/album/10.jpg',
				],
			};

		},
		methods: {
			goPage() {
				// getCurrentPages() 函数用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。
				let pages = getCurrentPages();
				console.log('当前页面的路由：', pages[pages.length - 1].$page.fullPath)
				let route = pages[pages.length - 1].$page.fullPath;
				if (route == '/pages/article/details/details') {
					return;
				}
				uni.navigateTo({
					url: '/pages/article/details/details'
				})
			}
		}
	}
</script>

<style lang="scss">
	.album {
		@include flex;
		align-items: flex-start;

		&__avatar {
			background-color: $u-bg-color;
			padding: 5px;
			border-radius: 3px;
		}

		&__content {
			margin-left: 10px;
			flex: 1;
		}
	}
</style>