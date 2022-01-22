<template>
  <div class="wrap">
    <el-card class="camera-card">
      <div slot="header" class="camera-header">
        <span>{{ cameraIP + cameraPath}}</span>
        <span v-if="cameraStatus < 2"> : not recording</span>
        <span v-else> : recording</span>
      </div>
      <div>
        <video-player 
        :camera_sn="cameraSN" 
        :camera_ip="cameraIP" 
        :camera_path="cameraPath"></video-player>
      </div>
    </el-card>
  </div>
</template>

<script>
import VideoPlayer from "./VideoPlayer.vue";
import { CameraAPI } from "@/network/cameraAPI";

export default {
  props: ['camera_sn', 'camera_ip', 'camera_path'],
  data() {
    return {
      cameraSN: this.camera_sn,
      cameraIP: this.camera_ip,
      cameraPath: this.camera_path,
      cameraStatus: -1,
    }
  },
  components: {
    VideoPlayer,
  },
  created() {
    let that = this;
    CameraAPI.getCameraStatus(that.cameraSN).then(res => {
      that.cameraStatus = res.data.status;
    });
  }
}
</script>

<style>
  .wrap {
    display: flex;
    justify-content: center;
  }
  .camera-card {
    width: 400px;
    height: 300px;
  }
  .videoplayer {
    width: 400px;
  }
</style>