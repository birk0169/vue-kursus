const app = Vue.createApp({
    data(){
        return {
            name: 'Birk',
            age: 24,
            favoriteNum: this.getRandomNumber(1, 0),
            imageSrc: 'planet.jpg'
        }
    },
    methods: {
        getRandomNumber(max, min){
            return Math.round(Math.random() * (max - min)) + min;
        }
    }
});

app.mount('#assignment');