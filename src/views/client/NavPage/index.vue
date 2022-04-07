<template>
  <div class="navPage-container">
    <section class="bg" />
  </div>
</template>

<script>
export default {
  name: "Index",
  mounted() {
    this.blurringLoading()
  },
  methods: {
    blurringLoading() {
      const bg = document.querySelector(".bg");

      let load = 0;

      let int = setInterval(blurring, 30);

      function blurring() {
        load++;

        if (load > 99) {
          clearInterval(int);
        }
        bg.style.filter = `blur(${((100 - load) * 30) / 100}px)`;
      }
    },
  },
};
</script>

<style scoped>
.navPage-container {
  font-family: Georgia, serif;
  /* 设置body为flex容器，所有子标签成为flex项目 */
  display: flex;
  /* 设置侧轴对齐方式 */
  align-items: center;
  /* 设置主轴排布方式 */
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}
.bg {
  background: url("https://w.wallhaven.cc/full/96/wallhaven-9636x8.jpg")
    no-repeat top center/cover;
  position: absolute;
  top: -30px;
  left: -30px;
  width: calc(100vw + 60px);
  height: calc(100vh + 60px);
  z-index: -1;
  filter: blur(30px);
}
</style>
