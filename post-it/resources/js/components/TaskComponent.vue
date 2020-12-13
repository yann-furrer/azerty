<template>
    <div class="container">
        <add-task @task-added="refresh"></add-task>
        <div class="row justify-content-center">
            <ul class="list-group">
                <li
                    class="list-group-item"
                    v-for="task in tasks.data"
                    :key="task.id"
                    
                >
                    <a href="#">{{ task.name }}</a>
                </li>
            </ul>
            <pagination
                :data="tasks"
                @pagination-change-page="getResults"
                class="mt-5"
            ></pagination>
        </div>
    </div>
</template>

<script>
import AddTaskComponent from './AddTaskComponent.vue';
export default {
  components: { AddTaskComponent },
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
    methods:{
            getResults(page = 1) {
			axios.get('http://localhost:8000/taskList?page=' + page)
				.then(response => {
					this.tasks = response.data;
                })
             
        },
        refresh(tasks){
            this.tasks = tasks.data
        }
	},

    

    mounted() {
        console.log('Component mounted.')
    }
}
</script>
