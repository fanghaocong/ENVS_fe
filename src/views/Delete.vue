<template>
  <div class="delete-container">
    <el-card class="delete-card">
      <div slot="header" class="delete-header">
        <span>关闭后台记录</span>
      </div>
      <el-form>
        <el-form-item label="IP地址">
          <el-input v-model="ip"></el-input>
        </el-form-item>
        <el-form-item label="路径">
          <el-input v-model="path"></el-input>
        </el-form-item>
        <el-form-item>
           <el-button type="primary" round v-on:click="stopRecord">删除</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { RecordAPI } from "@/network/recordAPI";
export default {
  data() {
    return {
      ip: "",
      path: "",
    }
  },
  methods: {
    stopRecord() {
      RecordAPI.postStopRecord(this.ip, this.ip, this.path);
    }
  }
}
</script>

<style>
  .delete-container {
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }
  .delete-card {
    width: 350px;
  }
</style>