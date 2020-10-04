<template>
    <div class="notation">

        <div class="notation-header">
            <h3>{{notation.title}}</h3>
        </div>
      

        <br>

        <div class="notation-body"> 
            <p>{{notation.content}}</p>
        </div>
       

        <br>

        <div class="notation-footer">
            <span>{{notation.name}}</span>
            <span>{{notation.time}}</span>
        </div>
       
        

    </div>
</template>

<script>
export default {
    props: ['notation']
}
</script>

<style>
.notation{
    width: 600px;
    /* height: 200px; */
    background-color: #ffffff;
    border-radius: 5px;
    margin: 10px auto;
    padding: 20px 15px;
    font-family: Hevenica;
    font-size: 18px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.notation-header {
    /* margin: 10px 10px; */
    display: flex;
    justify-content: space-between;
    /* border-bottom: 2px solid #eeeeee; */
}

.notation-body {
    padding: 10px 0px;
    text-align: justify;
}

.notation-footer {
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
}

</style>