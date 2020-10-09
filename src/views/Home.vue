<template>
  <div class="home">

    <NotationList 
    />

  </div>
</template>

<script>
import NotationList from '@/components/NotationList'
export default {
  name: 'Home',
  data() {
        return {
            // notations: [
            //     // {title: 'Заголовок 1', content: 'Текст описание 1, Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nihil a qui aliquam iste ea modi perferendis sint labore. Explicabo!', time: '12:37 21.09,2020', name: 'author 1'},
            // ]
            // countOfBulletins: 0,
        }
    },
    mounted() {
        // fetch('http://127.0.0.1:8080/get_count',{
        //   method: 'POST'
        // })
        // .then(response => response.json())
        // .then(json => {
        //     this.countOfBulletins = json
        //     this.loading = false 
        //     console.log(this.countOfBulletins);
        // })
    },
    components: {
        NotationList
    }
}
</script>
