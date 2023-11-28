<template>
	<view>
		<view>
			<u-navbar leftText="返回" :safeAreaInsetTop="false">
				<view slot="left" style="font-size: 30rpx;">
					Origin
				</view>
				<view slot="center">
					<u-search :height="28" :showAction="true" actionText="搜索" :animation="true"></u-search>
				</view>
			</u-navbar>
		</view>
		<view style="padding-top: 44rpx;">
			<view style="margin: 20rpx;">
				<u-swiper :list="list4" keyName="url"></u-swiper>
			</view>
		</view>
		<!-- <u-sticky> -->
		<u-tabs :current='tabsCurrent' :list="list1" @click="click"></u-tabs>
		<!-- </u-sticky> -->
		<view>
			<swiper style="min-height: 100vh;" :current="tabsCurrent" @change="swiperTab">
				<swiper-item v-for="(listItem,listIndex) in articleList" :key="listIndex">
					<scroll-view style="height: 100%;" scroll-y="true" @scrolltolower="lowerBot" scroll-with-animation>
						<view class='content'>
							<view v-if="listIndex == 0">
								<view v-for="i in 5">
									<article-one :list="[]"></article-one>
								</view>
							</view>
						</view>
						<view class='noCard' v-if="listItem.length===0">
							暂无信息
						</view>

					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<add-tag></add-tag>
	</view>
</template>

<script>
	// import article from '../../components/article/ar'
	export default {
		data() {
			return {
				Component: {
					// article
				},
				articleList: [
					[{
						id: 1,
						content: "一息尚存，从吾所好，虽不能至，心向往之。",

					}],
					[]
				],
				tabsCurrent: 0,
				list1: [{
					name: '最新',
				}, {
					name: '科技'
				}, {
					name: "热点"
				}, {
					name: "test"
				}],
				list4: [{
					url: 'https://cdn.uviewui.com/uview/resources/video.mp4',
					title: '昨夜星辰昨夜风，画楼西畔桂堂东',
					poster: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					type: 'video'
				}, {
					url: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					title: '身无彩凤双飞翼，心有灵犀一点通',
					type: 'image'
				}, {
					url: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
				}],
			}
		},
		onLoad() {

		},
		methods: {
			changeTab(index) {
				this.currentTab = index
			},
			// swiper 滑动
			swiperTab: function(e) {
				var index = e.detail.current //获取索引
				console.log(index)
				this.tabsCurrent = index
				// this.currentTab = e.detail.current
				// this.$refs.navTab.longClick(index);
			},
			click(item) {
				console.log('item', item.index);
			},
			rightClick() {
				console.log('rightClick');
			},
			leftClick() {
				console.log('leftClick');
			},
			lowerBot() {
				console.log('到底');
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>