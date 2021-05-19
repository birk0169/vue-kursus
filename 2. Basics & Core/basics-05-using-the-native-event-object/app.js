const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: ''
    };
  },
  watch: {
    counter(value){
      if(value > 50 || value < -50){
        const that = this;
        setTimeout(function() {
          that.counter = 0;
        }, 2000);
      }
    }
    // name(value){
    //   if(value == '')
    //     this.fullname = this.lastName;
    //   else
    //     this.fullname = value + ' ' + this.lastName;
    // },
    // lastName(value){
    //   if(value == '')
    //     this.fullname = this.name;
    //   else
    //     this.fullname = this.name + ' ' + value;
    // }
  },
  computed: {
    fullname(){
      console.log('running again...');
      if(this.name == '' || this.lastName == '')
        return '';
      else
        return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    outputFullname(){
      console.log('running again...');
      if(this.name == '')
        return '';
      else
        return this.name + ' ' + 'Stevenson';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = '';
    }
  }
});

app.mount('#events');
