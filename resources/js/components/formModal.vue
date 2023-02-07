<template>
    <div class="modal fade" :id="modalId" :class="modalSize" :data-bs-backdrop="backDrop">
        <div class="modal-dialog modal-fullscreen-sm-down">
            <form @submit.prevent="submit()">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalFullscreenSmLabel">{{modalTitle}}</h5>
                        <button type="button" class="btn-close" @click="closeModal(modalId)"></button>
                    </div>
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                    <div class="modal-footer">
                        <a v-if="isEnablePrint" @click="closeModal(modalId)" class="btn btn btn-outline-secondary fw-medium">
                            <i class="fa fa-close"></i> Close
                        </a>
                        <button v-if="isEnablePrint" type="submit" class="btn btn-primary">
                            <i class="fa fa-save"></i> Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "formModal",
        props: {
            modalId: {
                type: [String],
                default: 'formModal'
            },
            modalSize: {
                type: [String],
                default: 'modal-xl'
            },
            isEnableFooter: {
                type: [Boolean],
                default: true
            },
            isEnablePrint: {
                type: [Boolean],
                default: true
            },
            backDrop : {
                type: [String],
                default: 'static'
            }
        },
        methods : {
            submit : function () {
                this.$emit('submit');
            }
        }
    }
</script>

<style scoped>

</style>
