<template>
  <TableDate :config="tableConfig" />
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
  url: '/tableInfo',
  checkbox: true
})


</script>
<style lang="scss"></style>