<template>
  <TableDate :data="tableData" :config="tableConfig" />
</template>

<script setup>
import TableDate from "@/packages/tableData/index.vue"
import { nextTick, onMounted, ref } from "vue";
// 表格配置
const tableConfig = ref({
  thead: [
    {
      label: "Abbr",
      props: "source"
    },
    {
      label: "Notes",
      props: "picUrl"
    },
    {
      label: "Type",
      props: "ctime"
    },
    {
      label: "操作"
    },
  ],
})
const tableData = ([])
onMounted(() => {

})

</script>
<style lang="scss"></style>