<template>
    <ul class='list-data'>
        <li v-for="i, index in tasks">
            <div class='list-text'>
                {{ i.task }}
            </div>
            <div class='list-delete'>
                <div class='delete-btn' @click='deleteTask(index, i.id)'>
                    <i class='fa fa-trash'>
                    </i>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
		import axios from 'axios'

    export default {
        mounted () {
            this.getTask()
        },

        computed: {
            ...mapGetters([
                'tasks'
            ])
        },

        methods: {
            ...mapActions([
								'getTask',
								'delTask'
            ]),

            deleteTask (index, id) {
								console.log(index, id)
								axios.delete('http://589c33e2e85b861200daac18.mockapi.io/api/v1/tasks/' + id)
									.then(res => {
											this.delTask(index)
									})

									.catch(err => {
											throw err
									})
            }
        }
    }
</script>