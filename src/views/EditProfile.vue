<template>
        <div class="notation">
            <form class="form">
                <h1 style="margin: 15px">Редактировать</h1>

                <div class="input-form">
                    <!-- <input name="firstName" placeholder="First name" type="text" > -->
                    <input name="firstName" placeholder="First name" type="text" v-model="usersInfo[0].title">
                </div>

                <div class="input-form">
                    <!-- <input name="firstName" placeholder="First name" type="text" > -->
                    <input name="lastName" placeholder="Last name" type="text" v-model="usersInfo[1].title">
                </div>

                <div class="input-form">
                    <!-- <input name="firstName" placeholder="First name" type="text" > -->
                    <input name="email" placeholder="email" type="email" v-model="usersInfo[2].title">
                </div>

                <div class="input-form">
                    <!-- <input name="firstName" placeholder="First name" type="text" > -->
                    <input name="pass" placeholder="password" type="password" v-model="usersInfo[3].title">
                </div>

                <div class="input-form form-buttom">
                    <router-link to="/personal_area" tag="button" class="btnBack">назад</router-link>
                    <input type="submit">
                </div>
            </form>
        </div>
</template>

<script>
export default {
    data() {
        return {
            usersInfo: []
        }
    },
    beforeCreate() {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
        .then(response => response.json())
        .then(json => {
            this.usersInfo = json
            this.loading = false 
        })
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
   /* font-size: 11px;  */
   /* font-family: Tahoma;  */
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

.input-form input[type="submit"] {
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