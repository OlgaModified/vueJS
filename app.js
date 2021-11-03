const app = Vue.createApp({
        data(){
            return {
                showBooks: true,
                actions: [
                    {title: 'Catching the fly', hero:'Spider Man'},
                    {title: 'Hanging out', hero:'Bat Man'},
                    {title: 'Drying the mask', hero:'Iron Man'}
                ],
                title: "Catching the fly",
                author: "Spider Man",
                created_at: new Date().toLocaleString(),
                counter: 12,
                x:0,
                y:0
            }
        },
        methods: {
            changeTitle(title) {
                //console.log('you  clicked me')
                //this.title = "Changed title version"
                this.title = title
            },
            toggleShowBooks(){
                this.showBooks = !this.showBooks
            },
            handleEvent(e, data){
                console.log(e, e.type)
                if(data){
                    console.log(data)
                }
            },
            handleMouseMove(e){
                this.x = e.offsetX
                this.y = e.offsetY

            }
        }
})

app.mount('#app')