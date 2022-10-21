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
		
		       
		
		        <!-- Dark hero with a sign-in form -->
		        <div class="has-mt-24">
		            <h2>Post your task</h2>
					
		            <hr />
		            <div class="container has-mt-16">
		                <div class="columns has-bg-dark has-p-16">
		                  
		                    <div class="column is-two-fifths is-full-mobile">
		                        <div class="card has-bg-white">
		                            <h4>Add a new task</h4>
		                            <div class="has-mb-4">
		                                <input type="text" v-model="title" class="uinput" placeholder="Task Title" />
		                            </div>
		                            <div class="has-mb-4">
										<textarea class="textarea"  v-model="detail" rows="5">Task Details</textarea>
		                           
		                            </div>
									
									<div class="has-mb-4">
		                                <input type="number" class="uinput" v-model="money" placeholder="money" />
		                            </div>
									<div class="has-mb-4">
		                                <input type="number" class="uinput" v-model="spend_time" placeholder="spend times" />
		                            </div>
									<div class="has-mb-4">
		                                <input type="number" class="uinput" v-model="phone"  placeholder="contact phone" />
		                            </div>
		                            <div class="has-mb-3">
		                                <button @click="submit" class="button is-full">Add</button>
		                            </div>
		                          
		                        </div>
		                    </div>
							  <div class="column is-three-fifths is-full-mobile">
		                       
		                        <div class="has-size-7 has-weight-black has-mb-4 has-lh-none has-text-white">
		                            add a new course or change a course
		                        </div>
		                        <div class="has-size-3 has-lh-heading has-text-white has-mb-8 is-semitransparent">
		                            As a coach,I would like to easily split a course into appropriate segments /add a new course /change a course as a web or desktop app,so that the software is easy for us to use.
		                        </div>
		                        <div class="is-flex">
		                            <view  @click="gotoPage" class="button">Manage my tasks</view> 
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
				title:'',
				detail:'',
				money:'',
				spend_time:'',
				phone:'',
				userinfo:{},
			}
		},
		onLoad() {
			var userinfo = uni.getStorageSync("userinfo")
			this.userinfo = JSON.parse(userinfo)
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
				uni.navigateTo({
					url:"/pages/manage/manage"
				})
			},
			submit(){
				if(this.title.length <6){
					uni.showToast({
						icon:"error",
						title:"The title you entered was to short"
					})
					return
				}
				if(this.detail.length <6){
					uni.showToast({
						icon:"error",
						title:"The detail you entered was to short"
					})
					return
				}
				this.$http.post(this.$url+'/tasks/post', {
				
				  title:this.title,
				  detail:this.detail,
				  money:this.money,
				  spend_time:this.spend_time,
				  phone:this.phone,
				  user_id:this.userinfo._id
				
				}).then((response) => {
					uni.showToast({
											icon:"success",
						title:"Your task was posted successfully!"
					})
				
				console.log(response)
				 
				})
			}
		}
	}
</script>

<style>

</style>
