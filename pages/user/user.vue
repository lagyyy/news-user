<template>
	<view>
		<view class="page_content">
			<view class="header">
				<image class="btn" src="/static/icon_scan.png"></image>
				<text class="title">个人中心</text>
				<image class="btn" src="/static/icon_msg.png"></image>
			</view>
			<image class="logo" src="/static/head.png"></image>
			<view class="welfare">
				<template v-for="(info,i) in welfare">
					<view class="item" :key="'welfare_'+i">
						<view class="border">
							<image class="img" :src="info.icon"></image>
						</view>
						<text class="txt">{{info.name}}</text>
					</view>
				</template>
			</view>
		</view>

		<u-cell-group>
			<u-cell url="./info/info" icon="setting" title="个人资料" :isLink="true" arrow-direction="right"></u-cell>
			<u-cell icon="map" title="霜叶红于二月花" :isLink="false"></u-cell>
		</u-cell-group>

		<scroll-view class="slider" scroll-x="true">
			<template v-for="(task,i) in tasks">
				<view :key="'task_'+i" class="s_item">
					<view class="content">
						<image :src="task.icon" class="img"></image>
						<text class="name">{{task.name}}</text>
						<text class="desc">{{task.desc}}</text>
						<text class="btn">去完成</text>
					</view>
				</view>
			</template>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				bigIdx: 1,
				tasks: [{
						icon: '/static/icon_signin.png',
						name: '连续7天签到',
						desc: '连续签到获得7积分奖励'
					},
					{
						icon: '/static/icon_profile.png',
						name: '完善个人信息',
						desc: '完善信息获得7积分奖励'
					},
					{
						icon: '/static/icon_friend.png',
						name: '邀请好友参加',
						desc: '邀请好友获得7积分奖励'
					}
				],
				welfare: [{
						icon: '/static/icon_evaluate.png',
						name: '消息'
					},
					{
						icon: '/static/icon_gift.png',
						name: '发表文章'
					},
					{
						icon: '/static/icon_score.png',
						name: '我的积分'
					},
					{
						icon: '/static/icon_other.png',
						name: '其他'
					}
				]

			}
		},
		onLoad() {

		},
		methods: {
			swiperChange(e) {
				this.bigIdx = e.detail.current
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: white;
	}
</style>
<style lang="scss" scoped>
	@function realSize($args) {
		@return $args / 1.5;
	}

	.page_content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.header {
		padding-top: var(--status-bar-height);
		width: 95%;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-left: 10px;
		margin-right: 10px;

		.btn {
			width: 27px;
			height: 27px;
		}

		.title {
			font-size: 18px;
			font-weight: 500;
			color: rgba(43, 43, 43, 1);
			line-height: 41px;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	.logo {
		margin-top: 10px;
		width: 100px;
		height: 100px;
	}

	.swiper {
		width: 100%;
		margin-top: 10px;

		.swiper-item {
			border-radius: 16px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-left: 10px;
			margin-right: 10px;
		}

		.big {
			margin-top: 0;

			.img {
				margin-top: 15px;
				width: 40px;
				height: 40px;
			}

			.title {
				font-size: 25px;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
				line-height: 41px;
			}

			.sub_title {
				font-size: 11px;
				font-weight: 300;
				color: rgba(255, 255, 255, 1);
				line-height: 41px;
			}
		}

		.small {
			margin-top: 14px;
			height: 75%;

			// transition: all 0.3s;
			.img {
				margin-top: 5px;
				width: 25px;
				height: 25px;
			}

			.title {
				font-size: 15px;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
				line-height: 31px;
			}

			.sub_title {
				font-size: 7px;
				font-weight: 300;
				color: rgba(255, 255, 255, 1);
			}
		}
	}

	// .title_line {
	// 	width: 100%;
	// 	display: flex;
	// 	flex-direction: row;
	// 	align-items: center;
	// 	justify-content: space-between;

	// 	.title {
	// 		margin-left: 20px;
	// 		font-size: 18px;
	// 		font-weight: 500;
	// 		color: rgba(51, 51, 51, 1);
	// 		line-height: 41px;
	// 	}

	// 	.more {
	// 		margin-right: 20px;
	// 		font-size: 10px;
	// 		font-weight: 300;
	// 		color: rgba(153, 153, 153, 1);
	// 		line-height: 41px;
	// 	}
	// }

	.slider {
		white-space: nowrap;
		width: 100%;

		.s_item {
			display: inline-block;
			width: 35%;
			margin-left: 20px;
			margin-bottom: 10px;

			.content {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				border-radius: 8px;
				background: white;
				margin-top: 5px;
				box-shadow: 0px 2px 6px 0px rgba(103, 103, 103, 0.2);

				.img {
					width: 103px;
					height: 105px;
				}

				.name {
					margin-top: -10px;
					font-size: 12px;
					font-weight: 400;
					color: rgba(51, 51, 51, 1);
					line-height: 21px;
				}

				.desc {
					font-size: 10px;
					font-weight: 400;
					color: rgba(153, 153, 153, 1);
					line-height: 21px;
				}

				.btn {
					width: 80px;
					height: 30px;
					margin-bottom: 10px;
					background: linear-gradient(94deg, rgba(192, 160, 105, 1), rgba(233, 213, 172, 1));
					box-shadow: 0px 9px 28px 0px rgba(195, 164, 110, 0.23);
					border-radius: 29px;
					font-size: 12px;
					font-weight: 400;
					color: rgba(255, 255, 255, 1);
					line-height: 21px;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}

	.welfare {
		width: 92%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 1px 21px 0px rgba(103, 103, 103, 0.2);
		border-radius: 10px;
		margin-bottom: 10px;

		.item {
			padding: 10px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			.border {
				margin-top: 5px;
				border: 2px solid #c9ac7a;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;

				.img {
					width: 40px;
					height: 40px;
				}
			}

			.txt {
				margin-top: 5px;
				font-size: 10px;
				font-weight: 300;
				color: rgba(153, 153, 153, 1);
			}
		}
	}
</style>