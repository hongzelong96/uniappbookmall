<template>
	<view>
		<view class="header">
			<view @tap="handleSelect(index)" class="target" v-for="(target,index) in filterByList" :key="index"
				:class="{'on':target.selected}">
				{{target.text}}
			</view>
		</view>
		<!-- 占位 tabbar 有定位 -->
		<view class="place"></view>
		<!-- 商品列表 -->
		<view class="goods-list">
			<view class="product-list">
				<view class="product" @tap="handleGoods(goods)" v-for="goods in goodsList" :key="goods.goods_id">
					<image mode="aspectFit" :src="goods.url"></image>
					<view class="name">{{goods.name}}</view>
					<view class="info">
						<view class="price">
							<text>￥</text>
							{{goods.price}}
						</view>
						<view class="slogan">{{goods.slogan}} <text>人付款</text></view>
					</view>
				</view>
			</view>
			<view class="loading-text">{{loadingText}}</view>
		</view>
	</view>
</template>
<!-- 商品列表页 -->
<script>
	import interfaces from '../../utils/interfaces.js'
	export default {
		onLoad(option) {
			// 动态修改nav title
			uni.setNavigationBarTitle({
				title: option.name,
			})
			this.categoryId = option.categoryId
			// 加载数据
			console.log("get categoryId =",option.categoryId)
			this.loadData(option.categoryId);
		},
		data() {
			return {
				categoryId:'',
				goodsList: [], // 商品列表大数组
				filterby: "all", // 默认选择的tab
				listCount:0,
				page: 0,
				size: 6,
				loadingText: "正在加载....",
				filterByList: [{
						text: "全部",
						selected: true,
						filterby: "all" //过滤条件
					},
					{
						text: "口碑",
						selected: false,
						filterby: "rating"
					},
					{
						text: "热门",
						selected: false,
						filterby: "hot"
					}
				],
			}
		},
		methods: {
			// 页面跳转 商品详情
			handleGoods(goods) {
				console.log("点击的商品是：",goods.id)
				uni.navigateTo({
					url: './goods?goodsID=' + JSON.stringify(goods.id)
				})
			},
			//切换条件选择
			handleSelect(index) {
				this.filterByList[index].selected = true;

				// 其他的selected false
				for (let i = 0; i < this.filterByList.length; i++) {
					if (i != index) {
						this.filterByList[i].selected = false;
					}
				}
				// 数据请求
				this.filterby = this.filterByList[index].filterby; // 切换条件
				this.page = 0;
				this.loadingText = "加载中...";
				this.goodsList = [];
				this.loadData(this.categoryId);
			},
			
			//加载数据
			loadData(params) {
				console.log("pageindex",this.page,"pagesize",this.size,"category",params,'filterby',this.filterby)
				this.request({
					url: interfaces.getGoodsList,
					method: "GET",
					header: {
						'Content-Type': 'application/json'
					},
					data:{
						pageindex:this.page,
						pagesize:this.size,
						category:params,
						filterby:this.filterby
					},
					success:(res) => {
						//是初次请求
						if(this.page == 0){
							this.request({
							url:interfaces.getGoodsListTotal,
							method:'get',
							header: {
								'Content-Type': 'application/json'
							},
							data:{
								category:params
							},
							success:(res)=>{
								this.listCount = res.total
								console.log("get this.listCount==>",this.listCount)
							}
						})
						}
						if (res.length > 0) { // 如果上拉有数据则添加到列表数组里
							console.log("res!!!!",res)
							this.goodsList = this.goodsList.concat(res) 
						} else {
							this.loadingText = "到底了";
						}
					}
				})
				
				
			},
			onPullDownRefresh() {
				setTimeout(() => {
					this.page = 0;
					this.loadingText = "加载中...";
					this.goodsList = [];
					this.loadData(this.categoryId);
					uni.stopPullDownRefresh();
				}, 1000)
			},
			// 上拉加载
			onReachBottom() {
				console.log("到底了!!!!!!!")
				setTimeout(()=>{
					this.page++;
					if(this.page * this.size < this.listCount){
						console.log("上拉请求")
						this.loadData(this.categoryId);
					}
					else this.loadingText ="已经到底了~"
				},1000)
				
			}
		},
	}
</script>

<style lang="scss">
	.header {
		width: 92%;
		padding: 0 4%;
		height: 79upx;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		position: fixed;
		z-index: 10;
		background-color: #fff;
		border-bottom: solid 1upx #eee;

		.target {
			width: 20%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28upx;
			margin-bottom: -2upx;
			color: #aaa;

			&.on {
				color: #555;
				border-bottom: 4upx solid #f06c7a;
				font-weight: 600;
				font-size: 30upx;
			}

			.icon {
				font-size: 26upx;
			}
		}
	}

	.place {
		background-color: #ffffff;
		height: 100upx;
	}

	// 商品列表
	.goods-list {
		.loading-text {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 60upx;
			color: #979797;
			font-size: 24upx;
		}

		.product-list {
			display: flex;
			width: 100%;
			flex-direction:row;
			flex-wrap: wrap;
			justify-content:center;
			align-items: center;
			.product {
				width: 45%;
				border-radius: 20upx;
				background-color: #fff;
				margin: 7.5upx 7.5upx 15upx 15upx;
				box-shadow: 0upx 5upx 25upx rgba(0, 0, 0, 0.1);
				image {
					width: 100%;
					border-radius: 20upx 20upx 0 0;
				}

				.name {
					width: 92%;
					padding: 6upx 4%;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					text-align: justify;
					overflow: hidden;
					font-size: 30upx;
				}

				.info {
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					width: 92%;
					padding: 10upx 4% 10upx 4%;

					.price {
						color: #e65339;
						font-size: 30upx;
						font-weight: 600;
					}

					.slogan {
						color: #807c87;
						font-size: 24upx;
					}
				}
			}

		}
	}
</style>
