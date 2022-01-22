<template>
    <Push noOverlay disableEsc disableOutsideClick  isOpen
    width="230"
    :burgerIcon="false" :crossIcon="false"
    >
      <router-link to="/">
        <img src="../assets/camera.png" alt="" class="menu-icon">
        <span>监控设备</span>
      </router-link>
      <router-link to="/alert">
        <img src="@/assets/alert.png" alt="" class="menu-icon">
        <span>查看记录</span>
      </router-link>
      <router-link to="/register">
        <img src="@/assets/camera_add.png" alt="" class="menu-icon">
        <span>自动记录</span>
      </router-link>
      <router-link to="/delete">
        <img src="@/assets/camera_off.png" alt="" class="menu-icon">
        <span>关闭记录</span>
      </router-link>
    </Push>
</template>

<script lang="ts">
import { Push } from "vue-burger-menu";

export default {
  components: {
    Push,
  },
};
</script>

<style>
.menu-icon {
  width: 24px;
}
</style>