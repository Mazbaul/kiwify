<template>
    <div class="modal fade" :id="modalId" :class="modalSize" :data-bs-backdrop="backDrop">
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalFullscreenSmLabel">
                            <slot name="title"></slot>
                        {{modalTitle}}
                        </h5>
                        <button type="button" class="btn-close" @click="closeModal(modalId)"></button>
                    </div>
                    <div class="modal-body">
                        <slot name="body"></slot>
                    </div>
                    <div class="modal-footer">
                        <a @click="closeModal(modalId)" class="btn btn btn-outline-secondary fw-medium">
                            <i class="fa fa-close"></i> Close
                        </a>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "generalModal",
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
