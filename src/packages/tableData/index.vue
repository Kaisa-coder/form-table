<script setup>
import { ref, watch } from 'vue';
const tableConfig = ref({
  thead: [],
  checkbox: true,
  index: true,
})
const initConfig = () => {
  for (let key in props.config) {
    if (Object.keys(tableConfig.value).includes(key)) {
      tableConfig.value[key] = props.config[key];
    }
  }
}

const props = defineProps({
  config: {
    type: Object,
    default: () => ({})
  },
})
watch(props.config,
  () => {
    initConfig()
  },
  {
    immediate: true,
  }
)
const tableData = [
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<template>
  <div>
    <el-table :data="tableData" stripe>
      <el-table-column type="index" v-if="tableConfig.index"></el-table-column>
      <el-table-column type="selection" v-if="tableConfig.checkbox"></el-table-column>
      <el-table-column v-for="(item, index) in tableConfig.thead" :key="item.props" :prop="item.props"
        :label="item.label" />
    </el-table>
  </div>
</template>

<style lang="scss" scoped></style>