Vue.createApp({
    data() {
    return {
        header: {},
    };
    },
    methods: {
    getHeaderData()
    {
        axios
        .get(
            "https://raw.githubusercontent.com/Zaydanaymar/store/main/contents/header.json",
        )
        .then((res) => {
            console.log(res.data);
            this.header = res.data;
        })
        .catch((error) => {
            console.log(error);
        });
    }
    },
    beforeMount() {
    this.getHeaderData()
    },
}).mount("#app");
