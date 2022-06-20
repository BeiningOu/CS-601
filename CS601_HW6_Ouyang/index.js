const { createApp } = Vue;

createApp({
  data() {
    return {
      counter: 0,
      pictureTrans: "assets/bigCat.jpg",
      bigCatImg: "",
      kittenImg: "",
      bigCatInfo: "",
      kittenInfo: "",
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

    //using fetch to get a json file which store big cat picture url and info
    showBigCat() {
      this.bigCat = !this.bigCat;
      if (this.bigCat == true) {
        fetch("catPhoto.json")
          .then((response) => {
            console.log("response.headers: " + response.headers);
            console.log("response.status: " + response.status); // print out status code
            console.log("response.statusText: " + response.statusText);
            return response.json();
          })
          .then((data) => {
            console.log(data);
            this.bigCatImg = data[1].url;
            this.bigCatInfo = data[1].name + ": " + data[1].info;
          })
          .catch((e) => console.log("Oops, error"));
      } else {
        this.bigCatInfo = "";
      }
    },


    //using fetch to get a json file which store kitten picture url and info
    showKit() {
      this.showKitten = !this.showKitten;
      if (this.showKitten == true) {
        fetch("catPhoto.json")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            this.kittenImg = data[0].url;
            this.kittenInfo = data[0].name + ": " + data[0].info;
          })
          .catch((e) => console.log("Oops, error"));
      } else {
        this.kittenInfo = "";
      }
    },
  },
}).mount("#app");
