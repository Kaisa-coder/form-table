<script setup>
import { ref, watch } from 'vue';

// tableConfig
const tableConfig = ref({
  thead: [],
  checkbox: false,
  index: false,
})
const tableData = ref([])

// baseURL
const baseURL = "http://127.0.0.1:80"

const props = defineProps({
  config: {
    type: Object,
    default: () => ({})
  },
})

// init config
const initConfig = () => {
  for (let key in props.config) {
    if (Object.keys(tableConfig.value).includes(key)) {
      tableConfig.value[key] = props.config[key];
    }
  }
  getTableList()
}

// get tablelist
const getTableList = () => {
  fetch(`${baseURL}${props.config.url}`).then(res => {
    const data = res.json()
    data.then(res => {
      console.log(res)
      paginationConfig.value.total = res.data.total
      tableData.value = res.data.list
    })
  })
}

watch(props.config,
  () => {
    initConfig()
  },
  {
    immediate: true,
  }
)

const paginationConfig = ref({
  currentPage: 1,
  pageSize: 1,
  total: 0
})
</script>

<template>
  <el-table :data="tableData" stripe>
    <el-table-column type="index" v-if="tableConfig.index"></el-table-column>
    <el-table-column type="selection" v-if="tableConfig.checkbox"></el-table-column>
    <el-table-column v-for="(item, index) in tableConfig.thead" :key="item.props" :prop="item.props"
      :label="item.label" />
  </el-table>
  <el-pagination background layout="prev, pager, next" :total="Number(paginationConfig.total)" />
</template>

<style lang="scss" scoped>
// .el-pagination {
//   display: flex;
//   justify-content: end;
//   --el-pagination-button-height: 26px !important;
//   margin-top: 16px;
// }
</style>