const app = Vue.createApp({
    data(){
        return {
            result: 0,
            resultMessage: 'Nothing there yet'
        }
    },
    watch: {
        result(value){
            if(value != 0){
                const that = this;
                setTimeout(function(){
                    that.result = 0;
                    that.resultMessage = 'Nothing there yet';
                }, 5000);
            }
        }
    },
    methods: {
        add(value){
            this.result += value;

            if(this.result < 37){
                this.resultMessage = "Not there yet."
            }
            else if(this.result > 37){
                this.resultMessage = "Too much!"
            }
            else{
                this.resultMessage = this.result;
            }
        }
    }
});

app.mount('#assignment');