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
						<view @click="Menu(1)" class="navlink has-mb-2-mobile has-mr-2-tablet ">Tasks</view>
						<a @click="Menu(2)"  class="navlink has-mb-2-mobile ">Posts</a>
						<a @click="Menu(3)"  class="navlink has-mb-2-mobile ">Mangage</a>
					</div>
					<!-- Right side conttent -->
					<div class="has-ml-auto-tablet has-mt-4-mobile" @click="logout()">
						<a class="button is-secondary">Logout</a>
					</div>
				</div>
			</div>
			 <div class="container has-pt-16 has-pb-24">
			<div class="">
		            <h2>Hi, Welcome </h2>
		            <hr />
					<div class="is-flex">
					<div class="card has-ml-auto has-mr-auto has-w-96 is-shadowed">
					   ALL TASKS: <span class="has-size-7"> {{mytask}}</span>
					</div>
					<div class="card has-ml-auto has-mr-auto has-w-96 is-shadowed">
					   UNFINISHED: <span class="has-size-7"> {{unfinished}}</span>
					</div>
					</div>
					
		            <div class="container has-pt-16 has-pb-16 has-bg-white">
		                <div class="has-size-7 has-weight-black has-mb-4 has-lh-none has-w-192">
		                    Post <span class="has-text-primary"> Your Tasks</span>
		                </div>
						
		                <div class="has-size-3 has-lh-heading has-text-dark is-semitransparent has-mb-6 has-w-192">
		                   Post your tasks and let others help you with them 
		                </div>
		                <div class="is-flex">
		                    <view @click="gotoPage(1)" class="button">Post</view>
		                    <view @click="gotoPage(2)" class="button has-ml-3 has-bg-highlight has-text-primary">Manage</view>
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
				mytask:0,
				unfinished:0,
				userinfo:{}
			}
		},
		onLoad() {
		var userinfo = uni.getStorageSync("userinfo")
		this.userinfo = JSON.parse(userinfo)
		
		if(!userinfo){
		   uni.navigateTo({
			url:"/pages/login/login"
		   })
		   return
		}
			this.$http.post(this.$url+'/user/userinfo', {
			
			  
			  user_id:this.userinfo._id
			
			}).then((response) => {
				this.unfinished = response.data.unfinished;
				this.mytask = response.data.total;
			
			console.log(response)
			 
			})
		},
		methods: {
			logout(e){
				uni.navigateTo({
					url:"/pages/login/login"
				})
			},
			Menu(e) {
				console.log(e)
				var url = "/pages/admin/admin"
				if(e== 2){
					url="/pages/post/post"
				}else if(e == 3){
					url="/pages/manage/manage"
				}
				uni.navigateTo({
					url: url
				})
			},
			gotoPage(e){
				if(e==1){
					uni.navigateTo({
						url:"/pages/post/post"
					})
				}else{
					uni.navigateTo({
						url:"/pages/manage/manage"
					})
				}
			}
		}
	}
</script>

<style>

</style>
