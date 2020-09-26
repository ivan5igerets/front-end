<template>
    <div class="personal-area">
        <div class="main-block">
            <!-- <input type="text" placeholder="Добавить объявление"> -->

            <div class="add-note">
                <router-link to="/add_new_bulletian"><li>Добавить объявление</li></router-link>
            </div>
           
            <br>

            <div class="profile-header">
                <span>My profile</span> 
                 <router-link to="/edit_profile"><li>Редактировать</li></router-link>
            </div>

            <div class="profile-body">
                <table>
                    <tr>
                        <td>first name:</td>
                        <td>name</td>
                    </tr>
                     <tr>
                        <td>last name:</td>
                        <td>surname</td>
                    </tr>
                     <tr>
                        <td>email:</td>
                        <td>email</td>
                    </tr>
                </table>
            </div>

            <div class="log-out">
                <router-link to="/login" tag="button" class="btnLoguot">выйти</router-link>
            </div>
        </div>
    </div>
</template>



<style scoped>
/* .personal-area {
    background: burlywood; 
    padding: 5px;
    min-height: 650px;
} */
.main-block {
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
   width: 600px; 
   color: black;  
   /* font-size: 11px;  */
   /* font-family: Tahoma;  */
}

.profile-header {
    margin: 0px 10px;
    display: flex;
    justify-content: space-between;
    /* border-bottom: 2px solid #DCDCDC; */
}

.add-note {
    margin: 10px 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #DCDCDC;
    padding-bottom: 10px; 
}

.profile-body {
    margin: 10px 10px;
    border-bottom: 2px solid #DCDCDC;
    padding-bottom: 10px;
    /* display: flex; */
}

.log-out {
    text-align: center;
}

.btnLoguot {
    margin-top: 10px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 10px;
    border: none;
    background:  #e05050;
    transform: .3s;
    padding: 10px 20px;
}
</style>