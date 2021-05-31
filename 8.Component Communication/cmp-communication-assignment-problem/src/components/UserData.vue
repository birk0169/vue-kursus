<template>
<section>
    <label>Name</label>
    <input v-model="enteredName" type="text" placeholder="Your Name"/>
    <label>Age</label>
    <input v-model="enteredAge" type="number" placeholder="Your Age"/>
    <button @click="submitData">Submit</button>
</section>
</template>

<script>
    export default{
        emits: ['submit-data'],
        data(){
            return {
                enteredName: "",
                enteredAge: "" 
            };
        },
        methods: {
            submitData(){
                // console.log(this.enteredName);
                // console.log(this.enteredAge);
                this.$emit('submit-data', this.enteredName, this.enteredAge);
            }
        }
    }
</script>