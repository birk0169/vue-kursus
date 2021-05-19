const app = Vue.createApp({
    data(){
        return {
            output1: '',
            output2: ''
        };
    },
    methods: {
        openAlert(){
            alert("Message");
        },
        saveInput1(event){
            this.output1 = event.target.value;
        },
        saveInput2(event){
            this.output2 = event.target.value;
        }
    }
})

app.mount('#assignment');