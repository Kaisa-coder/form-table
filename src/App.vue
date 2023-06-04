<template>
  <FilterConditions :config="inputConfig" />
</template>

<script setup>
import FilterConditions from "@/packages/FilterConditions/index.vue"
import { ref } from "vue";

// 筛选条件配置
const inputConfig = ref({
  filters: [
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
  ],
  buttonConfig: [
    {
      content: "查询",
      type: "primary",
      text: false
    },
    {
      content: "导入",
      type: "success"
    },
    {
      content: "新增",
      type: "warning"
    },
  ]
})



</script>
<style lang="scss"></style>