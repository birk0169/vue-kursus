<template>
<div>
    <active-user  :username="user.name" :age="user.age"></active-user>
    <user-data @submit-data="saveData"></user-data>
</div>
</template>

<script>
    export default{
        data(){
            return {
                user: {
                    name: 'Test Test',
                    age: 45
                }
            };
        },
        methods: {
            saveData(name, age){
                console.log('reached');

                this.user = {
                    name: name,
                    age: +age
                }

            }
        }
    }
</script>