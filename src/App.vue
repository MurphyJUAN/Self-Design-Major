<template>
  <div id="app">
    <appHeader />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/ProgramPage/header';

export default {
  name: 'App',
  components: {
    appHeader: Header,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
</style>
