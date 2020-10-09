<template>
    <div>
        <form
         id="form"
         ref="form"
         class="form" 
         >
        <h1>Регистрация</h1>
        <div class="input-form">
            <input name="firstName" placeholder="First name" type="text" v-model="firstName">
        </div>
        <div class="input-form">
            <input name="lastName" placeholder="Last name" type="text" v-model="lastName">
        </div>
        <div class="input-form">
            <input name="email" placeholder="email" type="email" v-model="email">
        </div>
        <div class="input-form">
            <input name="pass" placeholder="password" type="password" v-model="password">
        </div>

        <div class="input-form">
            <input type="button" @click="auth" value="регистрация" />
            <router-link to="/login"  class="btnLoguot">Вернуться к авторизации</router-link>
        </div>
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
			password: ''
		};
	},
	mounted() {},
	methods: {
		auth() {
			if (this.fieldValidation()) {
                this.signUp()
			}
		},
		fieldValidation() {
            if (this.firstName == '' || this.lastName == ''
                || this.email == '' || this.password == '') {
				alert('все поля должны быть заполнены')
				return false
			} else if (this.email.length < 8) {
				alert('поле \'email\' должно содержать не меньше 8-ми символов')
				return false
			} else if (this.password.length < 6) {
				alert('поле \'password\' должно содержать не меньше 6-ми символов')
				return false
			} else {
				return true
			}
        },
        async signUp() {
            try {
                const url = 'http://localhost:8080/signup'
                const form = this.$refs.form
                const responce = await fetch(url, {
                    method: "POST",
                    body: new FormData(form)
                    });

                const data = await responce.json()
                // console.log('Data:', data);
                
                if(data !== null) {
                    console.log(data);
                    localStorage.setItem('id', data)
                    localStorage.setItem('firstName', this.firstName);
                    localStorage.setItem('lastName', this.lastName);
                    localStorage.setItem('email', this.email);

				    console.log('переход');
				    this.$router.push('/');
                } else {
                    alert('что-то пошло не так')
                }
            } catch (e) {
                console.error(e);
                alert('что-то пошло не так')

            }
        }
    }
}
</script>

<style scoped>
.form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, .7);
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

.input-form input[type="text"]:focus, .input-form input[type="email"]:focus, .input-form input[type="password"]:focus {
    border: 1px solid #0fc3f5;
}

.input-form input[type="button"] {
    margin-top: 20px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    background:  #0fc3f5;
    transform: .3s;
}

.input-form input[type="button"]:hover {
    background: #4442db;
}

.form a {
    display: block;
    padding: 20px 10px 10px;
    text-align: center;
    color: #fff;
    text-decoration: none;
    transition: .3s;
}

.form a:hover {
    color: #0fc3f5
}
</style>