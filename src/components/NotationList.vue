<template>
    <div>
        <Notation 
             v-for="notation of notations"
            :notation="notation"
            :key="notation.id" 
        />
      
    </div>    
</template>

<script>
import Notation from '@/components/Notation'
export default {
    props: ['notations'],
    components: {
        Notation
    }
}
</script>