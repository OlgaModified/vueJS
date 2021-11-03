const app = Vue.createApp({
        data(){
            return {
                url: 'http://www.thenetninja.co.uk',
                showActions: true,
                actions: [
                    {title: 'Catching the fly', hero:'Spider Man', img:'assets/heroes/spiderman.jpg'},
                    {title: 'Hanging out', hero:'Bat Man', img:'assets/heroes/batman.jpg'},
                    {title: 'Drying the mask', hero:'Iron Man', img:'assets/heroes/ironman.jpg'}
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