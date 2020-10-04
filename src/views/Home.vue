<template>
  <div class="home">

    <Loader 
      v-if="loading"
    />
    <NotationList 
      v-bind:notations="notations"
    />

    <!-- <Navigation /> -->
  </div>
</template>

<script>
import NotationList from '@/components/NotationList'
import Loader from '@/components/Loader'
import Navigation from '@/components/Navigation'
export default {
  name: 'Home',
  data() {
        return {
            notations: [
                // {title: 'Заголовок 1', content: 'Текст описание 1, Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nihil a qui aliquam iste ea modi perferendis sint labore. Explicabo!', time: '12:37 21.09,2020', name: 'author 1'},
            ],
            // нужно создать лоадер
            loading: true
        }
    },
    mounted() {
        fetch('http://127.0.0.1:8080/',{
          method: 'POST'
        })
        .then(response => response.json())
        .then(json => {
            this.notations = json
            this.loading = false 
        })
    },
    components: {
        NotationList, Loader, Navigation
    }
}
</script>
