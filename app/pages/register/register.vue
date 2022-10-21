<template>
	<view  class="has-bg-light" style="min-height: 100vh;">
	
		    <div class="container has-pt-16 has-pb-16">
		        <div class="has-w-96 has-pl-4 has-pr-4 has-ml-auto has-mr-auto">
		            <div class="card is-shadowed">
		                <h3>Sign Up</h3>
		                <div class="has-mb-4">
		                    <label class="label">Your email</label>
		                    <input type="text" class="uinput" v-model="email" placeholder="you@email.com" />
		                </div>
		                <div class="has-mb-6">
		                    <label class="label">Your password</label>
		                    <input type="password" v-model="password" class="uinput" placeholder="Password" />
		                </div>
						<div class="has-mb-6">
		                    <label class="label">ReType Your password</label>
		                    <input type="password" v-model="password2"  class="uinput" placeholder="Password" />
		                </div>
						<div class="has-mb-6">
							<label class="label">User Type</label>
		                   <select v-model="user_type" class="select">
								<option selected>user</option>
								<option>employer</option>
								<option>other</option>
							</select>
		                </div>
		                <button @click="register" class="button is-full">
		                    <i class="si-lock has-pr-1"></i>
		                    <span>Sign Up</span>
		                </button>
					
		            </div>
		            <div class="has-mt-8" align="center">
		                <view @click="gotoPage" class="is-not-underlined has-text-current has-text-primary-hover">
		                    <strong>Already have an account? Login</strong>
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
				password2:'',
				user_type:'user',
			}
		},
		methods: {
			gotoPage(){
				uni.navigateTo({
					url:"/pages/login/login"
				})
			},
			register(){
				if(this.email.length <6){
					uni.showToast({
						icon:"error",
						title:"The email you entered was to short"
					})
					return
				}
				if(this.password.length <6){
					uni.showToast({
						icon:"error",
						title:"The passwords you entered was to short"
					})
					return
				}
				if(this.password != this.password2){
					uni.showToast({
						icon:"error",
						title:"The passwords you entered twice do not match"
					})
					return
				}
				this.$http.post(this.$url+'/auth/register', {
				
				  email:this.email,
				  password:this.password,
				  user_type:this.user_type,
				
				}).then((response) => {
					uni.navigateTo({
						url:"/pages/login/login"
					})
				
				console.log(response)
				 
				})
			}
		}
	}
</script>

<style>

</style>
