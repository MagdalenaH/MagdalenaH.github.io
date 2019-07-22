var app = new Vue({
    el: '#app',
    data: {
        title: 'Magdalena Houška',
        todos: [
          { id: 0, text: 'Learn JavaScript' },
          { id: 1, text: 'Learn Vue' },
          { id: 2, text: 'Build something awesome' }
        ],
        contactInfoShown: false
      },
      methods: {
        toggleContactInfo: function() {
          this.contactInfoShown = !this.contactInfoShown;
        }
      }
  },
  
  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
    })
  )
