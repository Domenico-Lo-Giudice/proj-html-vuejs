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

      footer: [
        {
          name: "The best protein shake",
          url: "",
        },
        {
          name: "Ultimate cardio workout",
          url: "",
        },
        {
          name: "New juices available now",
          url: "",
        },
        {
          name: "Tips to find training partners",
          url: "",
        },
        {
          name: "20 best healthy recipes",
          url: "",
        },
      ],
    };
  },
});

app.mount("#root");
