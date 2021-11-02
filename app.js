// var app = new Vue({
//     el: '#app',
//     data: {
//       message: 'Hello Vue!'
//     }
//   })

//   var app2 = new Vue({
//     el: '#app-2',
//     data: {
//       message: 'You loaded this page on ' + new Date().toLocaleString()
//     }
//   })

  const app = Vue.createApp({
        data(){
            return {
                title: "Catching the fly",
                author: "Spider Man",
                created_at: new Date().toLocaleString(),
                counter: 12
            }
        },
        methods: {
            changeTitle(title) {
                //console.log('you  clicked me')
                //this.title = "Changed title version"
                this.title = title
            }
        }
  })

  app.mount('#app')