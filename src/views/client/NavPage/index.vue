<template>
  <div class="navPage-container">
    <div class="video-wrap">
      <video
        autoplay
        muted
        loop
      >
        <source src="../../../assets/video/video1-bg.mp4">
      </video>
    </div>
    <div class="navBox">
      <div id="header">
        <h1>刘家豪的个人网站</h1>
        <p>Liu Jiahao's Personal Website</p>
      </div>
      <div id="content">
        <p><a href="#">网络日志</a></p>
        <p><a href="#"> 文集：白色荒原 </a></p>
        <p><a href="#">文集：大海深蓝</a></p>
      </div>
      <div id="footer">
        <p>
          <a href="#">Contact</a>
          | liujiahao.com
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  mounted() {},
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
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
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
.video-wrap video {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: -100;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
}
.navBox {
  position: absolute;
  height: 40vh;
  width: 40vw;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fefefe;
  padding: 10px;
}

.navBox a {
  color: #fefefe;
}

#header h1,
#header p {
  text-align: center;
}

#header h1 {
  font-size: 24px;
  margin-top: 20px;
}

#header {
  border-bottom: 1px solid #d3d3d3;
}

.navBox div {
  width: 100%;
}

#header p {
  line-height: 2.2;
}

#content {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px 10px;
  border-bottom: 1px solid #d3d3d3;
}

#content p {
  margin-top: 16px;
  line-height: 1.8;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.5em;
  padding: 0.25em;
}

#content p::before {
  content: "» ";
  text-align: center;
}

#content p:hover {
  background-color: #fefefe;
  color: #111111;
  text-shadow: 0 1px 1px #333;
}

#content p:hover a {
  color: #111111;
  text-decoration: underline;
}

#footer p {
  line-height: 3;
  float: right;
  padding-right: 10px;
}

#footer p a:hover {
  background-color: #fefefe;
  padding: 4px 2px;
  border-radius: 0.5em;
  color: #111;
  text-decoration: underline;
  text-shadow: 0 1px 1px #333;
}
</style>
