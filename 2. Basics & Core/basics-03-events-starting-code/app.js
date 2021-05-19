const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput(){
      this.confirmedName = this.name;
    },
    submitForm(){
      alert('Submitted!');
    },
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName;
    },
    increment(){
      this.counter += 1;
    },
    decrement(){
      this.counter -= 1;
    },
    increase(num){
      this.counter += num;
    },
    decrease(num){
      this.counter -= num;
    }
  }
});

app.mount('#events');
