<template>
	<div>
		<form 
		 id="form"
         ref="form"
         class="form" 
		 >
			<h1>Вход</h1>
			<div class="input-form">
				<input name="email" placeholder="email" type="email" v-model="email" />
			</div>
			<div class="input-form">
				<input name="pass" placeholder="password" type="password" v-model="password" />
			</div>

			<div class="input-form">
				<input type="button" @click="auth" value="войти" />
			</div>

			<!-- должна быть кнопка, но я сделаю ссылкой -->
			<router-link to="/signin" class="checkIn" title="перейти к регистрации">нет учетной записи?</router-link>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
		};
	},
	mounted() {},
	methods: {
		auth() {
			if (this.fieldValidation()) {	
				this.sendingData()
			} else {
				alert('Проверьте введённые данные, не должно быть пустых полей')
			}
		},
		fieldValidation() {
			if (this.email.length < 6 || this.password.length < 6) {
				return false
			} else {
				return true
			}
		},
		async sendingData() {
            try {
                const url = 'http://localhost:8080/login'
                const form = this.$refs.form
                const responce = await fetch(url, {
                    method: "POST",
                    body: new FormData(form)
                    });

                const data = await responce.json()
				console.log('Data:', data);
		
				this.responseAnalysis(data)
				
            } catch (e) {
				console.error(e);
				alert('что-то пошло не так(((')
            }
		},
		responseAnalysis(data) {
			if(data.firstName !== null) {
				console.log('должна быть авторизация');

				localStorage.setItem('id', data.id);
				localStorage.setItem('email', this.email);
				localStorage.setItem('firstName', data.firstName);
				localStorage.setItem('lastName', data.lastName);

				console.log('переход');
				this.$router.push('/');

			} else {
				console.log('что-то пошло не так');
				alert('что-то пошло не так(((')
			}
			console.log("а всё уже"); 
		}
	},
};
</script>

<style scoped>
.body {
	/* background: linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)), url(https://cdn.segodnya.ua/i/image_650x/media/image/5ed/c1d/5bc/5edc1d5bc6b4e.jpg)); */
	background: url(https://bgfons.com/uploads/newspaper/newspaper_texture2847.jpg);
}

.form {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: rgba(0, 0, 0, 0.7);
}

.form h1 {
	margin: 30px 100px;
	padding: 0;
	text-align: center;
	color: #fff;
	font-size: 30px;
	text-transform: uppercase;
}

.input-form {
	margin: 15px 40px;
	text-align: center;
}

.input-form input {
	padding: 10px;
	width: 100%;
	color: #fff;
	font-size: 20px;
	background: none;
	outline: none;
	border: 1px solid #fff;
	box-sizing: border-box;
}

.input-form input[type='text']:focus,
.input-form input[type='email']:focus,
.input-form input[type='password']:focus {
	border: 1px solid #0fc3f5;
}

.input-form input[type='button'] {
	margin-top: 20px;
	color: #fff;
	font-weight: bold;
	text-transform: uppercase;
	border: none;
	background: #0fc3f5;
	transform: 0.3s;
}

.input-form input[type='button']:hover {
	background: #4442db;
}

.form a {
	display: block;
	padding: 0 0 30px;
	text-align: center;
	color: #fff;
	text-decoration: none;
	transition: 0.3s;
}

.form a:hover {
	color: #0fc3f5;
}
</style>
