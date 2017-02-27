<template>
    <ul class='list-data'>
        <li v-for="i, index in tasks">
            <div class='list-text'>
                {{ i.task }}
            </div>
            <div class='list-delete'>
                <div class='delete-btn' @click='delTask(index)'>
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
                'getTask'
            ]),

            delTask (i) {
								console.log(i)
            }
        }
    }
</script>