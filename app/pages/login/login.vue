<template>
	<view class="has-bg-light" style="min-height: 100vh;">
		
		    <div class="container has-pt-16 has-pb-16">
		        <div class="has-w-96 has-pl-4 has-pr-4 has-ml-auto has-mr-auto">
		            <div class="card is-shadowed">
		                <h3>Sign in</h3>
		                <div class="has-mb-4">
		                    <label class="label">Your email</label>
		                    <input type="text" class="uinput" v-model="email" placeholder="you@email.com" />
		                </div>
		                <div class="has-mb-6">
		                    <label class="label">Your password</label>
		                    <input type="password" class="uinput" v-model="password" placeholder="Password" />
		                </div>
						<div class="has-mb-6" align="center">
						<a href="#" class="is-not-underlined has-text-current has-text-primary-hover">
								<strong>Forgot your password?</strong>
							</a>
						</div>
		                <button class="button is-full" @click="login()">
		                    <i class="si-lock has-pr-1"></i>
		                    <span>Sign in</span>
		                </button>
					
					
		            </div>
		            
					 <div class="has-mt-8" align="center">
		                <view @click="gotoPage" class="is-not-underlined has-text-current has-text-primary-hover">
		                    <strong>Create an account?</strong>
		                </view>
		            </div>
		        </div>
		    </div>
			
		 
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				email:'',
				password:'',
				
			}
		},
		methods: {
			gotoPage(){
				uni.navigateTo({
					url:"/pages/register/register"
				})
			},
			login(){
				this.$http.post(this.$url+'/auth/login', {
				
				  email:this.email,
				  password:this.password,
				
				}).then((response) => {
				 if(response.data==null){
					 uni.showToast({
						icon:"error",
					 	title:"Your account password does not match"
					 })
					 return
				 }
				 uni.setStorageSync("userinfo",JSON.stringify(response.data))
				 if(response.data.user_type == "employer"){
					 uni.navigateTo({
					 	url:"/pages/admin/admin"
					 })
				 }else{
					 uni.navigateTo({
					 	url:"/pages/index/index"
					 })
				 }
				
				console.log(response)
				 
				})
			}
		}
	}
</script>

<style>

</style>
