<template>
  <div id="app">
    <NavigationBar/>
    <Introduction/>
  </div>
</template>

<script>
import Introduction from './components/Introduction.vue';
import NavigationBar from './components/NavigationBar.vue';

export default {
  name: 'App',
  components: {
    Introduction,
    NavigationBar,
  },
};
</script>

<style>
body {
  padding: 0 10%;
  margin: 0;
  background: black;
  color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

}
</style>
