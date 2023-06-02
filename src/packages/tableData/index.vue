<script setup>
import { ref, watch } from 'vue';
const tableConfig = ref({
  thead: [],
  checkbox: true
})
const initConfig = () => {
  for (let key in props.config) {
    if (Object.keys(tableConfig.value).includes(key)) {
      tableConfig.value = props.config[key];
    }
  }
  console.log(tableConfig)
}

const props = defineProps({
  config: {
    type: Object,
    default: () => ({})
  }
})
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
    <el-table stripe>
      <el-table-column type="selection" v-if="tableConfig.checkbox"></el-table-column>
      <el-table-column v-for="(item, index) in tableConfig" :key="item.props" :prop="item.props" :label="item.label" />
      <!-- <el-table-column prop="name" label="Name" />
        <el-table-column prop="address" label="Address" /> -->
    </el-table>
  </div>
</template>

<style lang="scss" scoped></style>