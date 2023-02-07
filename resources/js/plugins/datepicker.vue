<script>
    // import './jquery_ui/jquery-ui.css';

    export default {
        name: "datepicker",
        props: {
            name: String,
            value: {
                type: [String, Date],
                default: ' ',
            },
            icon: String,
            input_class: {
                type: [String],
                default: ' ',
            },
            view_mode: {
                type: [String],
                default: 'years',
            },
            id: {
                type: [String, Boolean, Number],
                default: false,
            },
            readonly: {
                type: [String, Boolean, Number],
                default: false,
            },
            editable: {
                type: [Boolean],
                default: false,
            },
            placeholder: {
                type: [String],
                default: 'Select Date',
            },
            format: {
                type: [String],
                default: 'yy-mm-dd',
            },
            validate: {
                type: [Boolean, String, Object],
                default: '',
            },
            validation_name: [String],
            vTooltipRight: {
                type: Function,
            },
            dataVvAs: {
                type: [String],
            },
            disabled: {
                type: [Boolean],
                default: false,
            },
        },
        data() {
            return {
                inputId: '',
            }
        },
        methods: {
            makeid: function (length = 5) {
                var result = '';
                var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for (var i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            },
            getId: function () {
                if (this.id) {
                    return this.id;
                } else {
                    return this.makeid();
                }
            },
            dateInputed: function (event){
                const _this = this;
                _this.$emit('input', $(event.target).val());
                _this.$emit('change');
                _this.$emit('update');
                _this.$emit('keyup');
                _this.$emit('keydown');
                _this.$emit('blur');
            }
        },
        mounted() {
            const _this = this;
            _this.inputId = _this.getId(10);
            // $.fn.modal.Constructor.prototype.enforceFocus = function () {
            //     $(document)
            //         .off('focusin.bs.modal') // guard against infinite focus loop
            //         .on('focusin.bs.modal', $.proxy(function (e) {
            //             if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
            //                 this.$element.focus()
            //             }
            //         }, this))
            // };
            $(function () {
                $("#" + _this.inputId).datepicker({
                    autoclose: true,
                    // format: _this.format,
                    todayHighlight: true,
                    changeMonth: true,
                    changeYear: true,
                    dateFormat: _this.format,
                    yearRange: "-100:+0",
                    showOtherMonths: true,
                    selectOtherMonths: true,
                    beforeShow: function (input, inst) {
                        $(document).off('focusin.bs.modal');
                    },
                    onClose: function () {
                        $(document).on('focusin.bs.modal');
                    },
                    onSelect: function (dateText) {
                        _this.$emit('input', dateText);
                        _this.$emit('change');
                        _this.$emit('update');
                        _this.$emit('keyup');
                        _this.$emit('keydown');
                        _this.$emit('blur');
                    }
                });
            });
        },
    }
</script>
<template>
    <input type="text" autocomplete="off" @change="dateInputed($event)" :readonly="readonly" :id="inputId" :name="name"
           :data-vv-as="validation_name" :placeholder="placeholder" v-validate="validate" :value="value"
           :disabled="disabled" :class="input_class">
</template>

<style scoped>

</style>
