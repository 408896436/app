<template>
	<div class='category'>
		<div class='nav'>
			<ul>
				<li @click='changeSelect(index)' :class="selectIdx==index? 'select' : ''" v-for='(item, index) in categoryList'>{{item}}</li>
			</ul>
		</div>
		<div class='wppx'>
			<a class='select' href="javascript:;" title='新品排序'>新品排序</a>
			<a href="javascript:;" title='销量排序'>销量排序</a>
			<span class='hui'>共{{wpval}}件商品</span>
		</div>
		<div class='wplist'>
			<dl v-for='item in wplist[selectIdx]'>
				<dt><a href='javascript:;'><img :src=item.pic></a></dt>
				<dd>
					<p class='name'>{{item.name}}</p>
					<ul>
						<li class='lx1'><span class='price'>{{item.price}}</span><del class='delprice hui'>{{item.delprice}}</del></li>
						<li class='lx2 hui'>销量：<span class='xiaoliang'>{{item.xiaoliang}}</span>评论：<span class='pinlun'>{{item.pinlun}}</span></li>
					</ul>
					<a class='buy' href="javascript:;" title='去购买'>去购买</a>
				</dd>
			</dl>
		</div>
	</div>
</template>
<style>
	.category .select{color: #fb4c45 !important; border-bottom: 0.03rem solid #fb4c45 !important; }

	
	.category{font-size: 0.3rem;}
	.category .nav{overflow: hidden;}
	.category .nav li{float: left; border-bottom: 0.03rem solid #ebebeb; width: 1.5rem; height: 0.85rem; line-height: 0.85rem; text-align: center;}
	.category .wppx{height: 0.7rem; border-bottom: 0.03rem solid #ebebeb; line-height: 0.7rem; padding-left: 0.07rem; font-size: 0.24rem; }
	.category .wppx a{color: #1a1a1a; width: 1.5rem; text-align: center; display: block; float: left;}
	.category .wppx span{float: right; margin-right: 0.2rem;}
	.category .wplist dl{ width: 7.1rem; height: 2.43rem; margin: 0 auto; position: relative; margin-top: 0.16rem;}
	.category .wplist dt a{display: block; width: 2.3rem;}
	.category .wplist dt, .category .wplist dd{float: left; display: inline;}
	.category .wplist dd{width: 4.52rem; height: 100%; padding-left: 0.28rem; border-bottom: 0.01rem solid #dddddd;}
	.category .wplist .name{margin-top: 0.18rem;}
	.category .wplist .price{font-size: 0.3rem; color: #fb4c45;}
	.category .wplist .delprice{font-size: 0.2rem;  margin-left: 0.22rem;}
	.category .wplist .lx2{font-size: 0.2rem;}
	.category .wplist .xiaoliang{margin-right: 0.22rem;}
	.category .wplist li{margin-top: 0.06rem;}
	.category .wplist ul{position: absolute; bottom: 0.3rem;}
	.category .wplist .buy{display: block; width: 1.44rem; height: 0.66rem; line-height: 0.66rem; text-align: center; background: #fb4c45; color: #fff; border-radius: 0.05rem; position: absolute; right: 0; bottom: 0.3rem;}
</style>
<script>
	
	/*pic*/
	import pic3 from '../assets/pic3.jpg'
	import pic2 from '../assets/pic2.jpg'

	export default{
		data(){
			return {
				selectIdx : -1,
				categoryList : ['衣服', '手办', '皮具', '抱枕', '游戏机'],
				wplist : [
					[{
						pic : pic3,
						name : '大风衣',
						price : 1000,
						delprice : 1500,
						xiaoliang : 500,
						pinlun : 259
					},
					{
						pic : pic3,
						name : '大风衣',
						price : 1000,
						delprice : 1500,
						xiaoliang : 500,
						pinlun : 259
					}],
					[{
						pic : pic2,
						name : '索尼子',
						price : 1000,
						delprice : 1500,
						xiaoliang : 500,
						pinlun : 259
					},
					{
						pic : pic2,
						name : '索尼子',
						price : 1000,
						delprice : 1500,
						xiaoliang : 500,
						pinlun : 259
					}],
					[{
						pic : pic2,
						name : '皮具',
						price : 1000,
						delprice : 1500,
						xiaoliang : 500,
						pinlun : 259
					},
					{
						pic : pic2,
						name : '皮具',
						price : 1000,
						delprice : 1500,
						xiaoliang : 500,
						pinlun : 259
					}],
					[{
						pic : pic2,
						name : '抱枕',
						price : 1000,
						delprice : 1500,
						xiaoliang : 500,
						pinlun : 259
					},
					{
						pic : pic2,
						name : '抱枕',
						price : 1000,
						delprice : 1500,
						xiaoliang : 500,
						pinlun : 259
					}],
					[{
						pic : pic2,
						name : '游戏机',
						price : 1000,
						delprice : 1500,
						xiaoliang : 500,
						pinlun : 259
					},
					{
						pic : pic2,
						name : '游戏机',
						price : 1000,
						delprice : 1500,
						xiaoliang : 500,
						pinlun : 259
					}]
					
				],
				wpval : 5
			}
		},
		methods : {
			changeSelect : function(index){
				this.selectIdx = index;
			}
		},
		mounted(){

			//获取路由路径
			const path = this.$root._route.params.name;
			switch(path)
			{
				case 'clothes':
					this.selectIdx = 0;
				break;

				case 'garage_kit':
					this.selectIdx = 1;
				break;

				case 'leather':
					this.selectIdx = 2;
				break;

				case 'pillow':
					this.selectIdx = 3;
				break;
			}
			console.log(this.selectIdx)
		}
	}


</script>