// console.log("Vue OK", Vue);

const app = Vue.createApp({
  data() {
    return {
      element: [
        {
          name: "Home",
          url: "",
        },
        {
          name: "Services",
          url: "",
        },
        {
          name: "About",
          url: "",
        },
        {
          name: "Videos",
          url: "",
        },
        {
          name: "Blog",
          url: "",
        },
        {
          name: "Store",
          url: "",
        },
      ],
    };
  },
});

app.mount("#root");
