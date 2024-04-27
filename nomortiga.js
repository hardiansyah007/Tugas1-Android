const app = Vue.createApp({
    data() {
        return {
            numbers: Array.from({ length: 50 }, (_, index) => index + 1)
        }
    }
});

app.mount('#app');
