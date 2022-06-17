const { createApp } = Vue;

createApp({
  data() {
    return {
      counter: 0,
      pictureTrans: "assets/bigCat.jpg",
      bigCat: false,
      showKitten: false,
    };
  },

  methods: {
    increment() {
      this.counter += 1;
    },

    mouseover() {
      this.pictureTrans = "assets/kitten.png";
    },
    mouseleave() {
      this.pictureTrans = "assets/bigCat.jpg";
    },
  },
}).mount("#app");
