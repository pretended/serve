import { defineStore } from 'pinia'

export const useFiltersStore = defineStore({
    id: 'filter-store',
    state: () => {
        return {
            header: 'Serve',
        }
    },
    actions: {},
    getters: {
        filtersList: state => state.filtersList,
    },

})