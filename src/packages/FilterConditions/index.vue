<script setup>
import { reactive, watch } from 'vue'

// do not use same name with ref
const form = reactive({

})

const props = defineProps({
  config: {
    type: Object,
    default: () => ({})
  },
  buttonConfig: {
    type: Object,
    default: () => ({})
  }
})


// watch(props.config,
//   () => {
//     initConfig()
//   },
//   {
//     immediate: true,
//   }
// )

const changeForm = () => {
  console.log(form)
}
const defaultTime2 = [new Date(2000, 1, 1, 0, 0, 0), new Date(2000, 2, 1, 23, 59, 59),] // '12:00:00', '08:00:00'

const btnClick = (content) => {
  if (content == '查询') {
    console.log(form)
  }
}
</script>

<template>
  <el-form inline :model="form" label-width="120px">
    <el-row>
      <el-col :span="20">
        <el-row :gutter="0">
          <template v-for="item in props.config" v-if="props.config.length > 3">
            <el-col :span="8">
              <el-form-item :label="item.label">
                <el-input v-if="item.type == 'text'" v-model="form[item.props]" @change="changeForm"></el-input>
                <el-select v-if="item.type == 'selceted'" v-model="form[item.props]" :placeholder="`请选择${item.label}`"
                  @change="changeForm">
                </el-select>
                <el-date-picker v-if="item.type == 'datetimerange'" v-model="form[item.props]" type="datetimerange"
                  start-placeholder="开始时间" end-placeholder="结束时间" :default-time="defaultTime2" @change="changeForm"
                  value-format="YYYY-MM-DD HH:mm:ss" format="YYYY-MM-DD HH:mm:ss" />
              </el-form-item>
            </el-col>
          </template>
        </el-row>
      </el-col>
      <el-col :span="4">
        <el-form-item v-for="item in props.buttonConfig">
          <el-button @click="btnClick(item.content)">{{ item.content }}</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<style scoped></style>