<template>
	<view class="content" >
		<div class="container has-pt-4 has-pb-4 has-pl-6 has-pr-6 is-flex has-items-center has-flex-wrap-mobile is-rounded" >
				<!-- Navbar brand: always visible -->
				<a class="is-flex has-items-center has-mr-6-tablet has-mr-auto-mobile has-size-2 has-text-current">
					<i class="si-mug has-size-4 has-mr-2"></i>
					<strong>Welcome</strong>
				</a>
				<!-- Toggler button: only visible in mobile screens -->
				<div id="navbar-toggler" class="menu has-bg-dark is-hidden-tablet"></div>
				<!-- Navigation menu: by default hidden on mobile screens -->
				<div id="navbar-menu" class="is-flex-tablet has-justify-between has-w-full has-mt-4-mobile">
					<!-- Left side links -->
					<div class="is-flex-tablet">
						<view @click="gotoPage(1)" class="navlink has-mb-2-mobile has-mr-2-tablet ">Tasks</view>
						<a @click="gotoPage(2)"  class="navlink has-mb-2-mobile ">Applied</a>
					
					</div>
					<!-- Right side conttent -->
					<div class="has-ml-auto-tablet has-mt-4-mobile" @click="logout()">
						<a class="button is-secondary">Logout</a>
					</div>
				</div>
			</div>
			<div class="container has-pt-16 has-pb-24">
			<div class="">
		            <h2>Find jobs nearby and apply!</h2>
		            <hr />
		            <div class="has-mt-12 has-mb-12">
		                <h1 class="has-weight-black has-mb-1">All results</h1>
		                <div class="has-size-2 has-w-192 has-text-dark is-semitransparent">
		                    You can pick a task to done it.once you done it,you will receive money from the employers.
		                </div>
		            </div>
		            <div class="columns">
		                <div class="column is-one-third is-full-mobile" v-for="(item,index) in dataList" :key="index" >
		                    <div class="card is-shadowed">
		                        <h4 class="has-mb-1">{{item.title}}</h4>
		                        <h1 class="has-mb-2">
		                            ${{item.money}}<span class="has-size-2 has-text-dark is-semitransparent">/hour</span>
		                        </h1>
		                        <div class="has-text-dark is-semitransparent">
		                           {{item.detail}}
		                        </div>
		                        <hr />
		                        <div class="has-mb-2 is-flex has-items-start">
		                            <i class="si-check has-text-primary has-pr-2"></i>
		                            <span>Contact :{{item.phone}}</span>
		                        </div>
		                        <div class="has-mb-2 is-flex has-items-start">
		                            <i class="si-check has-text-primary has-pr-2"></i>
		                            <span>spend time:{{item.spend}}</span>
		                        </div>
		                        <div class="has-mb-2 is-flex has-items-start">
		                            <i class="si-check has-text-primary has-pr-2"></i>
		                            <span>{{item.last_modified}}</span>
		                        </div>
		                        <div @click="apply(item)" class="has-mt-6">
		                            <button class="button is-full">
		                                <span>Apply</span>
		                                <i class="si-arrow-right has-pl-2"></i>
		                            </button>
		                        </div>
		                    </div>
		                </div>
		              
						
		            </div>
		        </div>
		        </div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				dataList:[],
			userinfo:{}
			}
		},
		onLoad() {
			   var userinfo = uni.getStorageSync("userinfo")
			   if(!userinfo){
				   uni.navigateTo({
				   	url:"/pages/login/login"
				   })
				   return
			   }
			   this.userinfo = JSON.parse(userinfo)
			      this.$http.get(this.$url+'/tasks', {
			        params: {
			        
			        }
			      }).then((response) => {
			        this.dataList = response.data
					console.log(this.dataList)
			       
			      })
			  
		},
		methods: {
			updateUI(){
				this.$http.get(this.$url+'/tasks', {
				  params: {
				  
				  }
				}).then((response) => {
				  this.dataList = response.data
									console.log(this.dataList)
				 
				})
			},
			logout(e){
				uni.navigateTo({
					url:"/pages/login/login"
				})
			},
			gotoPage(e) {
				console.log(e)
				var url = "/pages/post/post"
				if(e== 2){
					url="/pages/tasks/tasks"
				}else if(e == 3){
					
				}
				uni.navigateTo({
					url: url
				})
			},
			apply(task){
				if(task.belong && task.belong.length >0){
					uni.showToast({
						icon:"error",
						title:"The task can not apply."
					})
					return
				}
				var taskid = task._id
				this.$http.post(this.$url+'/tasks/applyTask', {
				
				  user_id:this.userinfo._id,
				  taskid:taskid
				
				}).then((response) => {
				
					uni.showToast({
						icon:"success",
						title:"successfully"
					})
					this.updateUI()
				})
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
