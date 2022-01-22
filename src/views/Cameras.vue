<template>
  <div class="camera-container">
    <div class="camera-card">
      <CameraCard v-for="camera in cameras" 
      v-bind:key="camera.sn"
      :camera_sn="camera.sn"
      :camera_ip="camera.camera_ip"
      :camera_path="camera.path"></CameraCard>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import CameraCard from "@/components/CameraCard.vue";
import { CameraAPI } from "@/network/cameraAPI";
export class Cameras extends Vue {}
export default {
  name: 'Cameras',
  data() {
    return {
      cameras: {},
    }
  },
  components: {
    CameraCard,
  },
  created() {
    let that = this;
    CameraAPI.getCameras().then(res => {
      that.cameras = res.data.cameras;
    })
  }
}
</script>

<style>
  .camera-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-template-rows: repeat(auto-fill, 120px);
    row-gap: 40px;
    column-gap: 40px;
    justify-content: center;
  }
</style>