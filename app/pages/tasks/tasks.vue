<template>
	<view>
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
			 <h2>Manage your applied task</h2>
			 
			 <hr />
		<div class="columns has-mb-24">
			<div class="column is-one-third is-full-mobile" v-for="(item,index) in dataList" :key="index" >
				<div class="card is-shadowed">
					<h4 class="is-capitalized">{{item.title}}</h4>
					<p style="min-height:4rem">{{item.detail}}</p>
					<div class="is-flex has-direction-column-mobile" style="gap:0.5rem">
						<div @click="stopTask(item)" class="has-w-full"><a 
								class="button is-not-underlined is-full" target="_blank"><strong>Remove</strong></a></div>
						<div @click="doneTask(item)"  class="has-w-full">
							<a
								
								class="button is-full has-bg-white has-text-primary has-bg-highlight-hover"
								target="_blank"><strong>{{item.state == 2?"Done":"In processing"}}</strong>
							</a></div>
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
				dataList:{},
			userinfo:{}
			}
		},
		onLoad() {
			var userinfo = uni.getStorageSync("userinfo")
			this.userinfo = JSON.parse(userinfo)
			this.updateUI()
		},
		methods: {
			logout(e){
							uni.navigateTo({
								url:"/pages/login/login"
							})
						},
			gotoPage(e) {
				console.log(e)
				var url = "/pages/index/index"
				if(e== 2){
					url="/pages/tasks/tasks"
				}else if(e == 3){
					
				}
				uni.navigateTo({
					url: url
				})
			},
			updateUI(){
				this.$http.post(this.$url+'/task/applyTaskList', {
				
				  
				  user_id:this.userinfo._id
				
				}).then((response) => {
				
					this.dataList = response.data;
				
				console.log(response)
				 
				})
			},
			stopTask(task){
				var taskid = task._id
				this.$http.post(this.$url+'/tasks/declineTask', {
				
				  
				  taskid:taskid
				
				}).then((response) => {
				
					uni.showToast({
						icon:"success",
						title:"successfully"
					})
					this.updateUI()
				})
			},
			doneTask(task){
				var state = parseInt( task.state)
				if(state==1){
					state = 2;
				}else{
					state = 1;
				}
				var taskid = task._id
				this.$http.post(this.$url+'/tasks/doneTask', {
				
				  state:state,
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

</style>
