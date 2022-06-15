const { createApp } = Vue;

createApp({
  data() {
    return {
      msg: "",
      pictureTrans: "assets/bigcat.jpg",
      kitten: true,
    };
  },

  methods: {
    mouseover() {
      this.pictureTrans = "assets/kitten.png";
    },
    mouseleave() {
      this.pictureTrans = "assets/bigcat.jpg";
    },

    changePic() {
      this.kitten = !this.kitten;
      if (this.kitten == false) {
        this.msg = "show big cat";
      } else {
        this.msg = "hide big cat";
      }
    },
  },
}).mount("#app");
