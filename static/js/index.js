Vue.component('todo-item', {
    props:['todo'],
    template: '<li> {{ todo.text }} </li>'
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!!!!!!!',
        seen: true,
        todos: [
            {text: '1'},
            {text: '2'},
            {text: '3'},
            {text: '4'},
        ],
        groceryList: [
            {id: 0, text:'Vegetables'},
            {id: 1, text:'Cheese'},
            {id: 2, text:'Whatever else humans are supposed to eat'},
        ]
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    },
});

app.message = 'I have changed the data!';
app.seen = false;
app.todos.push({text: 'New item'})