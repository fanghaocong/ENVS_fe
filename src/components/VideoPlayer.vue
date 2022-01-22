<template>
  <div class="video_comtainer">
    <img id="flow_image" v-bind:src="videoSrc">
    <!-- <el-button type="primary" round v-on:click="leave">关闭</el-button> -->
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: ["camera_ip", "camera_sn", "camera_path"],
  data() {
    return {
      videoSrc: "",
      cameraIP: this.camera_ip,
      cameraSN: this.camera_sn,
      cameraPath: this.camera_path,
    }
  },
  sockets: {
    connect() {
      console.log("socket connect successfully");
    },
    image(msg) {
      this.videoSrc = "data:image/jpeg;base64," + msg;
    }
  },
  created() {
    console.log(this.cameraSN, this.cameraIP, this.cameraPath)
    this.$socket.emit("live", {
        "sn" : this.cameraSN,
        "camera_ip" : this.cameraIP,
        "camera_port" : "",
        "username" : "",
        "password" : "",
        "path" : this.cameraPath,
        "resolution" : "1280x720",
        "fps" : 30,
        "algorithm_id" : 1,
        "si" : 1,
      })
  },
  destroyed() {
    console.log("destroy");
    this.$socket.emit('leave_live', {
        'sn': this.camera_sn,
        'algorithm_id': 1,
      });
  },
}
</script>


<style scoped lang="css">
  .video_comtainer {
    width:100%;
    height:100%;
  }
  #flow_image {
    width:100%;
    height:100%;
  }
</style>