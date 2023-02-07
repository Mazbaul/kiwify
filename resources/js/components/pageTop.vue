<template>
    <div class="align-items-center d-flex">
        <h4 class="card-title mb-0 flex-grow-1">{{topPageTitle}}
            <a class="text-primary" v-if="httpRequest">
                <i class="fa fa-spin fa-spinner"></i>
            </a>
        </h4>
        <div class="flex-shrink-0">
            <div class="form-check form-switch form-switch-right form-switch-md table_header">
                <slot></slot>
                <button v-if="defaultAddButton" @click="openModal('formModal', pageModalTitle, false, false, defaultObject)" class="btn btn-primary">
                    <i class="fa fa-plus"></i> Add New
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pageTop",
        props: {
            topPageTitle: {
                type: [String],
                default: 'Data List'
            },
            defaultAddButton: {
                type: [Boolean],
                default: true
            },
            pageModalTitle: {
                type: [String],
                default: 'Add/edit modal'
            },
            defaultObject : {
                type: [Array, Object],
                default(){
                    return [];
                }
            },

        },
        mounted() {
            console.log(this.defaultObject);
        }
    }
</script>

<style scoped>

</style>
