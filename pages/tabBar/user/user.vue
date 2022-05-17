<template>
	<div>
	<view>
		<view class="user">
			<!-- avatar 头像 -->
			<view class="left">
				<image :src="user.face"></image>
			</view>
			<!-- 昵称 个性签名 -->
			<view class="right">
				<view class="username">{{user.username}}</view>
			</view>
			<view class="erweima" @tap="handleQRCode">
				<view class="icon iconfont">&#xe67c;</view>
			</view>
			</view>
		</view>
		<view class="row">
			<view class="item" @tap="handleAddress()"><p>我的地址</p></view>
			<view class="item" @tap="handleUserDetail()"><p>个人详情</p></view>
		</view>
	</view>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				// 个人信息ss
				user: {
					username: "洪泽龙",
					face: "/static/img/face.jpg"
				}
			}
		},
		methods:{
			handleQRCode(){
				uni.navigateTo({
					url:"./qrcode"
				})
			},
			handleAddress(){
				console.log("地址")
			},
			handleUserDetail(){
				console.log("个人详情")
			}
		}
	}
</script>

<style lang="scss">
	.user {
		width: 92%;
		padding: 0 4%;
		display: flex;
		align-items: center;
		position: relative;
		top: 0;
		background-color: #f06c7a;
		padding-bottom: 80upx;

		.left {
			width: 20vw;
			height: 20vw;
			flex-shrink: 0;
			margin-right: 20upx;
			border: solid 1upx #fff;
			border-radius: 100%;

			image {
				width: 20vw;
				height: 20vw;
				border-radius: 100%;
			}

		}

		.right {
			width: 100%;

			.username {
				font-size: 36upx;
				color: #fff;
			}
		}

		.erweima {
			flex-shrink: 0;
			width: 10vw;
			height: 10vw;
			margin-left: 5vw;
			border-radius: 100%;

			display: flex;
			justify-content: center;
			align-items: center;
			background: linear-gradient(to left, #fbbb37 0%, #fcf0d0 105%);

			.icon {
				color: #7b6335;
				font-size: 42upx;
			}
		}
	}
	.row{
		width: 100%;
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
		.item{
			margin-top:35upx;
			width:100%;
			height: 120upx;
			background-color: #f06c7a;
			font-size: 36upx;
			color:#fff;
			p{
				padding-top:40upx;
			}
		}
	}
</style>

