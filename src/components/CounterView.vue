<template>
  <h2>{{ customTitle }}</h2>
  <p>
    {{ counter }} <sup>2={{ squareCounter }}</sup>
  </p>
  <p data-testid="counter">{{ counter }}</p>
  <!-- <p>
    {{ counter }} <sup>2={{ squareCounter }}</sup>
  </p> -->
  <div class="button button-color-blue">
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
export default {
  name: "counter-view",
  props: {
    title: {
      type: String,
    },
    start: {
      type: Number,
      default: 10,
      validator(value) {
        return value > 0 && value < 21;
      },
    },
  },
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    getSquare() {
      return this.counter * this.counter;
    },
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
  computed: {
    squareCounter() {
      console.log("square counter");
      return this.counter * this.counter;
    },
    customTitle() {
      return this.title || "Counter";
    },
  },
};
</script>

<style>
button {
  margin: 0 5px;
  background-color: #64bb87;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}
button:hover {
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}
</style>
