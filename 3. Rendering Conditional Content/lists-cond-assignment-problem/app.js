const app = Vue.createApp({
    data(){
        return {
            tasks: ['test', 'test'],
            showList: true,
            inputTask: ''
        };
    },
    methods: {
        setTask(event){
            this.inputTask = event.target.value;
            console.log(event.target.value);
        },
        addTask(){
            this.tasks.unshift(this.inputTask);
        },
        toggleList(){
            this.showList = !this.showList;
        }
    }
});

app.mount('#assignment');