const app = Vue.createApp({
    data(){
        return {
            userClass: 'test',
            visible: true,
            backgroundColorValue: ''
        };
    },
    computed: {
        classCollection(){
            return [this.userClass, {hidden: !this.visible}, {active: this.visible}];
        }
    },
    methods: {
        updateUserClass(event){
            this.userClass = event.target.value;
        },
        changeVisibility(){
            this.visible = !this.visible;
        },
        updateBackgroundColor(event){
            this.backgroundColorValue = event.target.value;
        }
    }
});

app.mount('#assignment')