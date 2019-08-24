<template>
  <header id="header">
    <div id="logo"></div>
    <nav id="nav">
      <a
        v-for="(nav, idx) in tabs"
        :key="nav.title+idx"
        @click="switchPage(idx)"
        :class="{'active': nav.active}"
      >{{nav.title}}</a>
    </nav>
  </header>
</template>
<script>
import logoBlack from '@/assets/LOGoBlack.png';

export default {
  name: 'HelloWorld',
  data() {
    return {
      currentPage: 0,
      currentOffset: 0,
      logo: logoBlack,
      tabs: [
        { title: '案例研究', active: true },
        { title: '關於我們', active: false },
        { title: '我們的學生', active: false },
      ],
    };
  },
  methods: {
    switchPage(num) {
      this.horizontalSwitch(num);
    },
    horizontalSwitch(num) {
      this.tabs[this.currentPage].active = false;
      this.tabs[num].active = true;
      if (num === 2) {
        document.getElementById('header').style.color = 'white';
      } else if (num === 1) {
        document.getElementById('header').style.color = 'black';
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
  font-weight: 400;
}
nav a {
  margin-right: 1.5em;
  cursor: pointer;
  color: #ff424d;
}

.active {
  border-bottom: solid 1px;
}
</style>

