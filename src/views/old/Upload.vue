<template>
	<section class="container">
		<el-row>
			<el-col :xs="24" :sm="24" :md="24" :lg="10" :xl="8">
				<div class="" style="text-align: center;padding: 30px;">
					<el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
						<i class="el-icon-upload"></i>
						<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
						<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
					</el-upload>
				</div>
			</el-col>
			<el-col  :xs="24" :sm="24" :md="24" :lg="14" :xl="16">
				<div class="handle-box">
					<el-row :gutter="20">
						<el-col :span="12">
							<el-input placeholder="搜索" size="small"></el-input>
						</el-col>
						<el-col :span="12" style="text-align: right;">
							<el-button type="primary" size="small">下载</el-button>
							<el-button type="danger" size="small">删除</el-button>
						</el-col>
					</el-row>

				</div>
				<div class="">
					<el-table :data="fileList" style="width: 100%" size="small" stripe border>
						<el-table-column type="selection" width="40">
						</el-table-column>
						<el-table-column prop="name" label="文件名">
						</el-table-column>
						<el-table-column prop="size" label="大小" width="100">
						</el-table-column>
						<el-table-column prop="type" label="类型" width="100">
						</el-table-column>
						<el-table-column prop="data" label="上传日期" width="200">
						</el-table-column>
						<!--<el-table-column label="操作" width="160">
							<template slot-scope="scope">
								<el-button size="mini">重命名</el-button>
								<el-button size="mini" type="danger">删除</el-button>
							</template>
						</el-table-column>-->
					</el-table>
					<div class="pagination">
						<el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
						</el-pagination>
					</div>
				</div>
			</el-col>
		</el-row>
	</section>
</template>

<script>
	import FileIcon from './../components/FileIcon';
	export default {
		data() {
			return {
				fileList: [{
					name: 'food.jpeg',
					size:'24kb',
					type:'jepg',
					data:"2018-05-30 12:04"
				},{
					name: 'food.jpeg',
					size:'24kb',
					type:'jepg',
					data:"2018-05-30 12:04"
				},{
					name: 'food.jpeg',
					size:'24kb',
					type:'jepg',
					data:"2018-05-30 12:04"
				},{
					name: 'food.jpeg',
					size:'24kb',
					type:'jepg',
					data:"2018-05-30 12:04"
				},{
					name: 'food.jpeg',
					size:'24kb',
					type:'jepg',
					data:"2018-05-30 12:04"
				},{
					name: 'food.jpeg',
					size:'24kb',
					type:'jepg',
					data:"2018-05-30 12:04"
				},{
					name: 'food.jpeg',
					size:'24kb',
					type:'jepg',
					data:"2018-05-30 12:04"
				},{
					name: 'food.jpeg',
					size:'24kb',
					type:'jepg',
					data:"2018-05-30 12:04"
				},{
					name: 'food.jpeg',
					size:'24kb',
					type:'jepg',
					data:"2018-05-30 12:04"
				},{
					name: 'food.jpeg',
					size:'24kb',
					type:'jepg',
					data:"2018-05-30 12:04"
				},{
					name: 'food.jpeg',
					size:'24kb',
					type:'jepg',
					data:"2018-05-30 12:04"
				},{
					name: 'food.jpeg',
					size:'24kb',
					type:'jepg',
					data:"2018-05-30 12:04"
				},{
					name: 'food.jpeg',
					size:'24kb',
					type:'jepg',
					data:"2018-05-30 12:04"
				},{
					name: 'food.jpeg',
					size:'24kb',
					type:'jepg',
					data:"2018-05-30 12:04"
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
	.file-list {
		display: flex;
		flex-wrap: wrap;
	}
	
	.handle-box {
		margin-bottom: 20px;
	}
</style>