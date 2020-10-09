<template>
    <div class="main">
        <Header />
        <router-view />
    </div>
</template>

<script>
import Header from '@/components/Header'
export default {
    components: {
        Header
    }
}
</script> 

<style scoped>
.main {
    height: 100%;
    background:#e8e8e8;
    min-height: 100vh;
    /* padding-bottom: 1px; */
}
</style>