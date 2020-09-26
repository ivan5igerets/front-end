<template>
    <div class="notation">

        <div class="notation-header">
            <h3>{{notation.title}}</h3>
        </div>
      

        <br>

        <div> 
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
}

.notation-header {
    /* margin: 10px 10px; */
    display: flex;
    justify-content: space-between;
    /* border-bottom: 2px solid #eeeeee; */
}

.notation-footer {
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
    /* border-bottom: 2px solid #eeeeee; */
}
</style>