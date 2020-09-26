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
    width: 100%;
    background: burlywood; 
    min-height: 725px;
    padding-bottom: 5px;
}
</style>