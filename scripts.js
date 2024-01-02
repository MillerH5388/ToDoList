const ToDoList = {
    data()
    {
        return{
            tasks: [],
            newtask: {
                checked: false
            }
        }
    },
    methods:
    {
        addTask: function()
        {
            if(this.newtask.description)
            {
                this.tasks.push(this.newtask)
                this.newtask = {
                    checked: false
                };
            }
            else
            {
                alert('A descrição da tarefa é obrigatória')
            }
        }
    },
    created(){
        this.tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : this.tasks
    },
    updated()
    {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
}

Vue.createApp(ToDoList).mount('#app');