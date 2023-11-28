<template>
	<view>
		<view>
			<cmd-cel-item title="头像" slot-right arrow>
				<u-avatar src="https://avatar.bbs.miui.com/images/noavatar_small.gif" shape="circle"></u-avatar>
			</cmd-cel-item>
			<cmd-cel-item title="积分" addon="566" arrow></cmd-cel-item>
			<cmd-cel-item title="积分" addon="566" arrow></cmd-cel-item>
			<cmd-cel-item title="昵称" addon="Slimmer" arrow></cmd-cel-item>
			<cmd-cel-item title="姓名" addon="Lich" arrow></cmd-cel-item>
			<cmd-cel-item title="联系方式" addon="15676109501" arrow></cmd-cel-item>
			<cmd-cel-item title="证件号码" addon="450112xxxxxxxx2017" arrow></cmd-cel-item>
			<cmd-cel-item title="我的地址" addon="广西壮族自治区南宁市西乡塘区大学西路29号" arrow></cmd-cel-item>
			<cmd-cel-item title="修改密码" @click="fnClick('modify')" arrow></cmd-cel-item>
			<button class="btn-logout">退出登录</button>
		</view>
	</view>
</template>

<script>
	import cmdCelItem from "../../../components/cmd-cel-item/cmd-cel-item.vue"
	export default {
		data() {
			return {
				components: {
					cmdCelItem,
				},
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>