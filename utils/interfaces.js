//const domain = "https://uniapp-interface.herokuapp.com/";
const domain = "http://localhost:3000/"
const interfaces = {
	// 获取首页数据
	getMallData: domain + "getMallList",
	// 获取分类数据
	getCategoryPageData: domain + "getCategoryPageData",
	// 获取商品列表数据
	getGoodsList: domain + 'getBooklistByCategory',
	
	getGoodsListTotal:domain + 'getBooklistByCategoryTotal',
	// 商品详情信息
	getGoods: domain + "getBookDetail",
	
	getcomment:domain + "getcomment"
}
module.exports = interfaces;