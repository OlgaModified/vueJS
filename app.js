const app = Vue.createApp({
        data(){
            return {
                url: 'http://www.thenetninja.co.uk',
                showActions: true,
                
                actions: [
                    {title: 'Catching the fly', hero:'Spider Man', img:'assets/heroes/spiderman.jpg', isDone: true},
                    {title: 'Hanging out', hero:'Bat Man', img:'assets/heroes/batman.jpg', isDone: false},
                    {title: 'Drying the mask', hero:'Iron Man', img:'assets/heroes/ironman.jpg', isDone: true}
                ]
            }
        },
        methods: {
            
            toggleShowActions(){
                this.showActions = !this.showActions
            },
            markDone(action){
                action.isDone = !action.isDone
            }
            
        },
        computed: {
            filteredActions(){
                return this.actions.filter((action)=>
                    action.isDone
                )
            }
        }
})

app.mount('#app')