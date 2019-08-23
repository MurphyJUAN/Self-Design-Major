<template>
  <header id="header">
    <div id="logo">
      <h1 style="font-size: 700">LOGO</h1>
    </div>
    <nav id="nav">
      <!-- <router-link to='/' @click='switchPage(0)'>案例研究</router-link>
        <router-link to='/' @click='switchPage(1)'>關於我們</router-link>
      <router-link to='/' @click='switchPage(2)'>學生成果</router-link>-->
      <a @click="switchPage(0)">Case Studies</a>
      <a @click="switchPage(1)">About Us</a>
      <a @click="switchPage(2)">Students Life</a>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      currentPage: 0,
      currentOffset: 0,
    };
  },
  methods: {
    switchPage(num) {
      this.horizontalSwitch(num);
    },
    horizontalSwitch(num) {
      if (num === 2) {
        document.getElementById('header').style.color = 'white';
      } else {
        document.getElementById('header').style.color = '#FF424D';
      }
      if (num !== this.currentPage) {
        const screen = document.getElementById('membrane');
        // eslint-disable-next-line no-mixed-operators
        let offset = this.currentOffset + (this.currentPage - num) * 50;
        if (num === 2 || this.currentPage === 2) {
          if (this.currentPage - num < 0) {
            offset -= 50;
          } else {
            offset += 50;
          }
        }
        this.currentOffset = offset;
        if (screen) {
          screen.style.left = `${offset}vw`;
        }
        this.currentPage = num;
      }
    },
  },
};
</script>
<style scoped>
header {
  position: absolute;
  top: 4.6875vw;
  left: 6.25vw;
  right: 6.25vw;
  z-index: 999;
  color: #ff424d;
}
#nav {
  transition: all 0.5s ease-in-out;
}
nav {
  position: absolute;
  left: 50vw;
  bottom: 0;
  font-size: 1.2rem;
  transition-property: color, opacity, transform;
  transition-duration: 600ms;
  transition-timing-function: ease-in-out;
}
nav a {
  margin-right: 1.5em;
  cursor: pointer;
  color: #ff424d;
}
</style>

