const app = Vue.createApp({
        data(){
            return {
                showActions: true,
                actions: [
                    {title: 'Catching the fly', hero:'Spider Man'},
                    {title: 'Hanging out', hero:'Bat Man'},
                    {title: 'Drying the mask', hero:'Iron Man'}
                ]
            }
        },
        methods: {
            
            toggleShowActions(){
                this.showActions = !this.showActions
            },
            
        }
})

app.mount('#app')