<template>
  <FilterConditions :config="inputConfig" :buttonConfig="buttonConfig" />
  <TableDate :config="tableConfig" />
</template>

<script setup>
import TableDate from "@/packages/tableData/index.vue"
import FilterConditions from "@/packages/FilterConditions/index.vue"
import { ref } from "vue";
// 表格配置
const tableConfig = ref({
  thead: [
    {
      label: "Date",
      props: "date"
    },
    {
      label: "Name",
      props: "name"
    },
    {
      label: "Address",
      props: "address"
    },
    {
      label: "操作"
    },
  ],
  url: '/tableInfo',
  checkbox: true
})

// 筛选条件配置
const inputConfig = ref([
  {
    label: "日期",
    props: "date",
    type: "datetimerange"
  },
  {
    label: "姓名",
    props: "name",
    type: "text"
  },
  {
    label: "地址",
    props: "address",
    type: "selceted"
  },
  {
    label: "地址1",
    props: "address",
    type: "selceted"
  },
  {
    label: "地址2",
    props: "address",
    type: "selceted"
  },
  {
    label: "序列号",
    props: "number",
    type: "text"
  }
])

const buttonConfig = ref([
  {
    content: "查询",
  },
])

</script>
<style lang="scss"></style>