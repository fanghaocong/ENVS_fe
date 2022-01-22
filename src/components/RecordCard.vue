<template>
  <div class="wrap">
    <el-card class="record-card">
      <span>IP地址：{{ recordIP }}，</span>
      <span>时间： {{ recordDate }}</span>
    </el-card>
  </div>
</template>

<script>

export default {
  props: ['record_ip', 'record_date', 'record_path'],
  data() {
    return {
      recordIP: this.record_ip,
      recordDate: this.record_date,
      recordPath: this.record_path,
    }
  },
}
</script>

<style>
  .wrap {
    display: flex;
    justify-content: center;
  }
  .record-card {
    width: 700px;
    height: 60px;
  }
</style>