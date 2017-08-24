<template>
	<div class='category'>
		<div class='nav'>
			{{$route.params}}
			<ul>
				<li :class="selectIdx==index? 'select' : ''" v-for='(item, index) in categoryList'>{{item}}{{index}}</li>
			</ul>
		</div>
	</div>
</template>
<style>
	.category .nav .select{color: red;}
</style>
<script>
	export default{
		data(){
			return {
				selectIdx : 1,
				categoryList : ['衣服', '手办', '皮具', '抱枕']
			}
		}
	}


</script>