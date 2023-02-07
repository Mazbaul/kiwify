<template>
  <div class="card" :class="tableClass">
    <div class="card-header">
      <slot name="page_top"></slot>
    </div>
    <div class="card-body">
      <form @submit.prevent="search()">
        <div class="row mb-2">
          <div class="col-11">
            <div class="row">
              <div :class="defaultFilterWidth" v-if="defaultFilter">
                <input
                  type="text"
                  v-model="formFilter.keyword"
                  class="form-control"
                  placeholder="Name"
                />
              </div>
              <slot name="filter"></slot>
              <div class="col-md-1" v-if="defaultSearchButton">
                <button class="btn btn-outline-primary" type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-1">
            <select
              @change="getDataList()"
              class="form-control pointer"
              v-model="formFilter.perPage"
            >
              <template v-for="page in perPages">
                <option :value="page">PerPage {{ page }}</option>
              </template>
            </select>
          </div>
        </div>
      </form>
      <div class="live-preview">
        <div class="table-responsive">
          <table class="table data_table table-bordered align-middle table-nowrap mb-0">
            <thead class="data_table prevent-select" v-if="tableHeading.length > 0">
              <tr>
                <template v-for="(heading, index) in tableHeading">
                  <th scope="col">{{ heading }}</th>
                </template>
              </tr>
            </thead>
            <slot name="thead"></slot>
            <tbody>
              <slot name="data"></slot>
            </tbody>
          </table>
        </div>
      </div>
      <slot name="pagination"></slot>
      <div class="mt-3 text-right" v-if="defaultPagination">
        <pagination
          previousText="PREV"
          nextText="NEXT"
          :data="dataList"
          @paginateTo="getDataList"
        ></pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "../plugins/pagination/pagination";
export default {
  name: "dataTable",
  components: { Pagination },
  props: {
    tableHeading: {
      type: [Array, Object],
      default: [],
    },
    tableTitle: {
      type: [String],
      default: "Data List",
    },
    defaultAddButton: {
      type: [Boolean],
      default: true,
    },
    defaultFilter: {
      type: [Boolean],
      default: true,
    },
    defaultFilterWidth: {
      type: [String],
      default: "col-md-2",
    },
    tableClass: {
      type: [String],
      default: "data_table",
    },
    defaultSearchMethod: {
      type: [Boolean],
      default: true,
    },
    defaultPagination: {
      type: [Boolean],
      default: true,
    },
    defaultSearchButton: {
      type: [Boolean],
      default: true,
    },
    defaultObject: {
      type: [Array, Object],
      default() {
        return [];
      },
    },
  },
  methods: {
    search: function () {
      if (this.defaultSearchMethod) {
        this.getDataList();
      } else {
        this.$emit("search");
      }
    },

    assignDefaultFIlter: function () {
      const _this = this;

      $.each(_this.defaultObject, function (index, value) {
        _this.$set(_this.formFilter, index, value);
      });
    },
  },
  mounted() {
    this.assignDefaultFIlter();
  },
};
</script>

<style scoped>
.table_header .btn {
  margin-right: 3px !important;
}
.prevent-select {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
