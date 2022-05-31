

Vue.component('search', {
    data() {
        return {
            userSearch: '',
        }
    },

    template: `
    <form action="#" class="search-form" @submit.prevent="filter">
        <input type="text" class="search-field" v-model="userSearch">
            <button @click="$root.$refs.products.filter(userSearch)"" class="btn-search" type="submit">
                <i class="fas fa-search"></i>
            </button>
    </form>
    `
});