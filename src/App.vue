<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <counter-view title="entraron" :start="10"></counter-view>
  <counter-view title="salieron" :start="15"></counter-view> -->
  <decision-view></decision-view>
</template>

<script>
import DecisionView from "./components/DecisionView.vue";
// import CounterView from "./components/CounterView.vue";
export default {
  name: "App",
  components: {
    DecisionView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
