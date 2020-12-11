<template>
    <div class="container">
        <div class="row justify-content-center">
            <ul class="list-group">
                <li class="list-group-item" v-for="task in tasks" :key="task.id"><a href="#">{{ task.name}}</a></li>
             
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tasks:{}
        }
    },

    created(){
        axios.get('http://localhost:8000/taskList')
        .then(response => this.tasks = response.data)
        .catch(error => console.log(error));
    },

    mounted() {
        console.log('Component mounted.')
    }
}
</script>
