<template>
  <TableDate :config="tableConfig" :checkbox="checkbox" />
</template>

<script setup>
import TableDate from "@/packages/tableData/index.vue"
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
  checkbox: false,
  index:false
})
const checkbox = ref(true)
</script>
<style lang="scss"></style>