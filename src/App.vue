<template>
  <FilterConditions :config="inputConfig" />
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
  url: '/tableInfo'
})

const tableConfig1 = ref({
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
  url: '/getStudentInfo'
})

// 筛选条件配置
// const inputConfig = ref({

// })

</script>
<style lang="scss"></style>