<template>
        <div class="notation">
            <form 
                ref="form"
                class="form"
            >
                <h1 style="margin: 15px">Редактировать</h1>

                <div class="input-form">
                    <!-- <input name="firstName" placeholder="First name" type="text" > -->
                    <input name="firstName" placeholder="First name" type="text" v-model="firstName">
                </div>

                <div class="input-form">
                    <!-- <input name="firstName" placeholder="First name" type="text" > -->
                    <input name="lastName" placeholder="Last name" type="text" v-model="lastName">
                </div>

                <div class="input-form">
                    <!-- <input name="firstName" placeholder="First name" type="text" > -->
                    <input name="email" placeholder="email" type="email" v-model="email">
                </div>

                <!-- <div class="input-form">
                    <input name="firstName" placeholder="First name" type="text" >
                    <input name="pass" placeholder="password" type="password" >
                </div> -->

                <div class="input-form form-buttom">
                    <router-link to="/personal_area" tag="button" class="btnBack">назад</router-link>
                    <input type="button" value="отправить" @click="sendingData">
                </div>
            </form>
        </div>
</template>

<script>
export default {
    data() {
        return {
            // id: localStorage
            firstName: localStorage.getItem('firstName'),
            lastName: localStorage.getItem('lastName'),
            email: localStorage.getItem('email'),
        }
    },
    methods: {
        async sendingData() {
            try {
                const form = this.$refs.form
                let formData = new FormData(form)

                formData.append('id', localStorage.getItem('id'))

                const url = 'http://localhost:8080/edit_user_profile'
                const responce = await fetch(url, {
                    method: "POST",
                    body: formData
                    });

                const data = await responce.json()
				console.log('Data:', data);
        
                if(data === true) {
                    localStorage.setItem('firstName', this.firstName)
                    localStorage.setItem('lastName', this.lastName)
                    localStorage.setItem('email', this.email)
                    this.$router.push('/personal_area');
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
.notation{
    width: 600px;
    /* height: 200px; */
    background-color: #ffffff;
    border-radius: 5px;
    margin: 10px auto;
    padding: 20px 15px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

input::placeholder {
  transition: 0.5s; /* Время трансформации */
  color: #aaa; /* Цвет подсказки */
}

input:focus::placeholder { 
  /* font-size: 10px; Размер шрифта */
  transform: translateY(-25px); /* Сдвигаем вверх */
}

input[type="text"] {
   border: 1px solid #cccccc; 
   border-radius: 3px; 
   -webkit-border-radius: 3px; 
   -moz-border-radius: 3px; 
   -khtml-border-radius: 3px; 
   background: #ffffff !important; 
   outline: none; 
   height: 30px; 
   width: 570px; 
   color: black;  
   /* font-size: 11px;  */
   /* font-family: Tahoma;  */
   font-family: Arial; 
   font-size: 14px;
}

input[type="email"] {
   border: 1px solid #cccccc; 
   border-radius: 3px; 
   -webkit-border-radius: 3px; 
   -moz-border-radius: 3px; 
   -khtml-border-radius: 3px; 
   background: #ffffff !important; 
   outline: none; 
   height: 30px; 
   width: 570px; 
   color: black;  
   font-family: Arial; 
    font-size: 14px;
}

input[type="password"] {
   border: 1px solid #cccccc; 
   border-radius: 3px; 
   -webkit-border-radius: 3px; 
   -moz-border-radius: 3px; 
   -khtml-border-radius: 3px; 
   background: #ffffff !important; 
   outline: none; 
   height: 30px; 
   width: 570px; 
   color: black;  
   /* font-size: 11px;  */
   /* font-family: Tahoma;  */
}

.input-form {
    margin: 15px 10px;
    text-align: center;
}

.input-form input[type="button"] {
    margin-top: 20px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
    background:  #0fc3f5;
    transform: .3s;
    padding: 10px 20px;
}

.btnBack {
    margin-top: 20px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
    background:  #0fc3f5;
    transform: .3s;
    padding: 10px 20px;
}


.form-buttom {
    display: flex;
    justify-content: space-between;
}
</style>