<template>
  <div class="alert-container">
    <RecordCardVue v-for="record in records" 
      v-bind:key="record.sn"
      :record_ip="record.sn"
      :record_date="record.record_date"
      :record_path="record.record_path"></RecordCardVue>
  </div>
</template>

<script>
import { CameraAPI } from "@/network/cameraAPI";
import RecordCardVue from "@/components/RecordCard.vue";
export default {
  name: 'Alert',
  data() {
    return {
      records: [],
    }
  },
  components: {
    RecordCardVue,
  },
  created() {
    let that = this;
    CameraAPI.getCameras().then(res => {
      let cameras = res.data.cameras;
      for (let i = 0; i < cameras.length; i++) {
        CameraAPI.getCameraRecords(cameras[i].sn).then(res => {
          let records = res.data.records;
          for (let j = 0; j < records.length; j++) {
            that.records.push(records[j]);
          }
        })
      }
      
    })
  }
}
</script>

<style>
  .alert-container {
    display: grid;
    grid-template-columns: 700px;
    grid-template-rows: repeat(auto-fill, 30px);
    row-gap: 40px;
    column-gap: 40px;
    justify-content: center;
  }
</style>