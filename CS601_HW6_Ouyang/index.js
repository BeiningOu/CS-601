const { createApp } = Vue;

createApp({
  data() {
    return {
      msg: "Hello Vue!",
      pictureBigcat: "assets/bigcat.jpg",
    };
  },

  methods: {
    mouseover() {
      this.pictureBigcat = "assets/kitten.png";
    },
    mouseleave() {
      this.pictureBigcat = "assets/bigcat.jpg";
    },
  },
}).mount("#app");
