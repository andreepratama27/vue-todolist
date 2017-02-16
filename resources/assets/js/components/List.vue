<template>
    <ul class='list-data'>
        <li v-for="i in tasks">
            <div class='list-text'>
                {{ i.task }}
            </div>
            <div class='list-delete'>
                <div class='delete-btn' @click='delTask(i.id)'>
                    <i class='fa fa-trash'>
                    </i>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

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
                this.$store.dispatch('delTask', i)
            }
        }
    }
</script>