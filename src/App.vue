<template>
  <div id="app">
    <component :is="layout"> 
       <router-view />
    </component>
  </div>
</template>

<script>
import EmptyLayuot from '@/layouts/EmptyLayout'
import MainLayuot from '@/layouts/MainLayout'
export default {
  computed: {
    layout() {

      console.log(this.$route.meta.layout);

      if(this.$route.meta.layout === 'main') {
        return MainLayuot
      } else {
        return EmptyLayuot
      }
    }
  },
  components: {
    EmptyLayuot, MainLayuot
  }
}
</script>

<style>
 /* урок 2, время 5:46, подключение стилей */
 * {
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
}
</style>