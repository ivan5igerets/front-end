<template>
    <div>

        <Loader 
            v-if="loading"
        />

        <Notation 
            v-for="notation of notations"
            :notation="notation"
            :key="notation.id" 
        /> 


        <div>
            <div class="btn-group">
                <button class="btn-page" v-for="p in pages" :key="p.id" @click.prevent="setPage(p)">
                    {{p}}
                </button>
            </div>
        </div>

    </div> 
</template>

<script>
import Notation from '@/components/Notation'
import Loader from '@/components/Loader'
export default {
    data() {
        return {
            pages: [],
            notations: [],
            loading: true,
            pagesCount: 0,
            countOfBulletins: 0
        }
    },
    beforeCreate() {
        fetch('http://127.0.0.1:8080/get_count',{
          method: 'POST'
        })
        .then(response => response.json())
        .then(json => {
            this.countOfBulletins = json
            this.loading = false 

            this.pagesCount = this.getCountOfPages()
        })
    },
    mounted() {
        fetch('http://127.0.0.1:8080/?page=1', {
          method: 'POST'
        })
        .then(response => response.json())
        .then(json => {
            this.notations = json
            this.loading = false 

            this.getInitalValueListOfPages()
            this.printData()
        })
    },
    methods: {

        printData() {
            console.log('print data');

            console.log('notations:', this.notations);
            console.log('countOfBulletins', this.countOfBulletins);
            console.log('pageCount:', this.pagesCount);
            console.log('pages:', this.pages);

            console.log('end print data');
        },

        setPage(p) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'auto'
            });
           
            fetch('http://127.0.0.1:8080/?page=' + p,{
                method: 'POST'
            })
            .then(response => response.json())
            .then(json => {
                this.notations = json
                this.loading = false 

                this.getAccessiblePages(p)
            })
        },
        getAccessiblePages(currPage) {
            if (this.pagesCount <= 5) {
                console.log('if #1');
                this.pages = []
                for(let i = 0; i < this.pagesCount; ++i) {
                    this.pages.push(i + 1)
                }
            } else if (currPage < 4) {
                console.log('if #2');
                this.pages = [1,2,3,4,5]
            } else if (currPage > 3 && currPage < (this.pagesCount - 2)) {
                console.log('if #3');
                this.pages = []
                for(let i = (currPage - 2); i < (currPage + 3); ++i) {
                    this.pages.push(i)
                }
            } else if (currPage > (this.pagesCount - 3)) {
                console.log('if #4');
                this.pages = []
                for(let i = this.pagesCount; i > this.pagesCount - 5; --i) {
                    this.pages.unshift(i)
                }
            }
        },
        getCountOfPages() {
            return Math.ceil(this.countOfBulletins / 10)
        },
        // начальное значение массива страниц
        getInitalValueListOfPages() {
            if (this.pagesCount <= 5) {
                for(let i = 0; i < this.pagesCount; ++i) {
                    this.pages.push(i + 1)
                }
            } else {
                this.pages = [1, 2, 3, 4, 5]
            }
        }

    },
    components: {
        Notation, Loader
    }
}
</script>

<style scoped>
.btn-group {
    text-align: center;
    margin: 10px;
}

.btn-page {
    margin: 10px 5px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    border-radius: 15px;
    background: #2F4F4F;
    transform: .3s;
    min-height: 25px;
    min-width: 25px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    /* padding: 10px 20px; */
}

.btn-page:hover {
    background:  #008B8B;
}
</style>