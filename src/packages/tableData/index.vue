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
      paginationConfig_total.value = res.data.total
      const start = (paginationConfig_currentPage.value - 1) * paginationConfig_pageSize.value
      tableData.value = res.data.list.slice(start, start + paginationConfig_pageSize.value)
      console.log(tableData.value)
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

const paginationConfig_total = ref(0)
const paginationConfig_pageSize = ref(10)
const paginationConfig_currentPage = ref(1)
const handleCurrentChange = (val) => {
  console.log('handleCurrentChange', val)
  paginationConfig_currentPage.value = val
  getTableList(paginationConfig_currentPage.value)
}
const handleSizeChange = (val) => {
  console.log('handleSizeChange', val)
  paginationConfig_pageSize.value = val
  // getTableList()
}
</script>

<template>
  <el-table :data="tableData" stripe>
    <el-table-column type="index" v-if="tableConfig.index"></el-table-column>
    <el-table-column type="selection" v-if="tableConfig.checkbox"></el-table-column>
    <el-table-column v-for="(item, index) in tableConfig.thead" :key="item.props" :prop="item.props"
      :label="item.label" />
  </el-table>
  <el-pagination :current-page="paginationConfig_currentPage" :page-size="paginationConfig_pageSize" background
    :page-sizes="[10, 15, 20, 25]" layout="total, sizes, prev, pager, next, jumper" :total="paginationConfig_total"
    @current-change="handleCurrentChange" @size-change="handleSizeChange" />
</template>

<style lang="scss" scoped>
// .el-pagination {
//   display: flex;
//   justify-content: end;
//   --el-pagination-button-height: 26px !important;
//   margin-top: 16px;
// }
</style>