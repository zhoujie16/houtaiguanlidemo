<template>
	<!--文件图标组件-->
	<el-card :body-style="{ padding: '0px' }" class="file-icon">
		<!--<img src="http://element-cn.eleme.io/static/hamburger.50e4091.png" class="image">-->
		<i class="fa fa-file image" aria-hidden="true"></i>
		<div class="file-name">
			<span>{{fileName}}</span>
		</div>
	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				fileClass:{
					
				}
			}
		},
		props: ['fileName'],
		methods: {
			//取文件后缀名
			GetFileExt(filepath) {
				if(filepath != "") {
					var pos = "." + filepath.replace(/.+\./, "");
					return pos;
				}
			}
		},
		mounted() {

		}
	}
</script>

<style >
	.el-card.file-icon {
		display: inline-block;
		background-color: initial;
		text-align: center;
		width: 120px;
		height: 130px;
		margin: 10px;
	}
	
	.el-card.file-icon .image {
		margin-top: 10px;
		width: 80px;
		height: 80px;
		font-size: 60px;
		line-height: 80px;
	}
	
	.el-card.file-icon .file-name {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		height: 20px;
		line-height: 20px;
		margin: 10px;
	}
</style>