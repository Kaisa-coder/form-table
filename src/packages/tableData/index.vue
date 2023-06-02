<script setup>
import { onMounted, ref, watch } from 'vue';

// 表格配置
const tableConfig = ref({
  thead: [],
  checkbox: false,
  index: false,
})

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
    required: true
  },
  config: {
    type: Object,
    default: () => ({})
  },
})

/**
 * init config
 */
const initConfig = () => {
  for (let key in props.config) {
    if (Object.keys(tableConfig.value).includes(key)) {
      tableConfig.value[key] = props.config[key];
    }
  }
  
}


watch(props.config,
  () => {
    initConfig()
  },
  {
    immediate: true,
  }
)


</script>

<template>
  <div>
    <el-table :data="props.data" stripe>
      <el-table-column type="index" v-if="tableConfig.index"></el-table-column>
      <el-table-column type="selection" v-if="tableConfig.checkbox"></el-table-column>
      <el-table-column v-for="(item, index) in tableConfig.thead" :key="item.props" :prop="item.props"
        :label="item.label" />
    </el-table>
  </div>
</template>

<style lang="scss" scoped></style>