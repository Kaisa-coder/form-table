<template>
  <TableDate :config="tableConfig" />
  <TableDate :config="tableConfig1" />
</template>

<script setup>
import TableDate from "@/packages/tableData/index.vue"
import { onMounted, ref } from "vue";
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

</script>
<style lang="scss"></style>