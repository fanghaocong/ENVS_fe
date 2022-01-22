<template>
  <div class="register-container">
    <el-card class="register-card">
      <div slot="header" class="register-header">
        <span>启动后台记录</span>
      </div>
      <el-form>
        <el-form-item label="IP地址">
          <el-input v-model="ip"></el-input>
        </el-form-item>
        <el-form-item label="路径">
          <el-input v-model="path"></el-input>
        </el-form-item>
        <el-form-item>
           <el-button type="primary" round v-on:click="startRecord">注册</el-button>
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
    startRecord() {
      RecordAPI.postStartRecord(this.ip, this.ip, this.path);
    }
  }
}
</script>

<style>
  .register-container {
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }
  .register-card {
    width: 350px;
  }
</style>