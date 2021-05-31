<template>
<section>
    <h2>{{username}}</h2>
    <h3>{{age}} years old</h3>
</section>
</template>

<script>
    export default{
        props: {
            username: {
                type: String,
                required: true,
            }, 
            age: {
                type: Number,
                required: true,
            }
        }
    }
</script>

<style>
html{
    font-family: sans-serif;
}

section{
    margin: 2rem auto;
    max-width: 40rem;
    border-radius: 12px;
    border: 1px solid #ccc;
    padding: 1rem;
}
</style>