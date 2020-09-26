<template>
    <div class="background">

        <div class="notation">
            <form class="form">
                <h1 style="margin: 15px">Добавить объявление</h1>

                <div class="input-form">
                    <input name="title" placeholder="Заголовок" type="text">
                </div>

                <div class="input-form">
                    <textarea name="body" id="" cols="10" rows="10"></textarea>
                </div>

                <div class="input-form form-buttom">
                    <router-link to="/personal_area" tag="button" class="btnBack">назад</router-link>
                    <input type="submit">
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.background {
    background: burlywood; 
    padding: 5px;
    min-height: 650px;
}

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

textarea {
   border: 1px solid #cccccc; 
   border-radius: 3px; 
   -webkit-border-radius: 3px; 
   -moz-border-radius: 3px; 
   -khtml-border-radius: 3px; 
   background: #ffffff !important; 
   outline: none; 
   height: 120px; 
   width: 570px; 
   color: black;  
}

.input-form {
    margin: 15px 10px;
    /* text-align: center; */
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