<template>
	<section class="container">
		<!--文件上传组件-->
		<el-row>
			<el-col :span="12" class="">
				<el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
					<i class="el-icon-upload"></i>
					<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
				</el-upload>
			</el-col>
		</el-row>
		<div class="content-title">文件列表
			<el-button size="small">s</el-button>
		</div>
		<div class="file-list">
			<file-icon v-for="(item,i) in fileList" :file-name="item.name"></file-icon>
		</div>
		 
	</section>
</template>

<script>
	import FileIcon from './../components/FileIcon';
	export default {
		data() {
			return {
				fileList: [{
					name: 'food.jpeg'
				}, {
					name: 'fossssssssssssssssssssssod2.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}, {
					name: 'food.jpeg'
				}, {
					name: 'food.jpeg'
				}, {
					name: 'food.jpeg'
				}, {
					name: 'food.jpeg'
				}, {
					name: 'food.jpeg'
				}, {
					name: 'food.jpeg'
				}, {
					name: 'food.jpeg'
				}, {
					name: 'food.jpeg'
				}, {
					name: 'food.jpeg'
				}, {
					name: 'food.jpeg'
				}, {
					name: 'food.jpeg'
				}]
			};
		},
		methods: {

		},
		components: {
			FileIcon
		}
	}
</script>

<style scoped>
	.file-list{
		display: flex; 
		flex-wrap: wrap;
	}
</style>