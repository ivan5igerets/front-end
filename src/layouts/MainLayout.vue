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
    /* background-color:rgba(156, 148, 133, 0.308); */
    background:#e8e8e8;
    min-height: 725px;
    padding-bottom: 5px;
}
</style>