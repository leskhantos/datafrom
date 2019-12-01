export default {
    methods: {
        roundUp(v) {
            return parseFloat(v).toFixed(0)
        },
        getCurrentDate() {
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd

            return today
        },
        getTonight() {
            return this.getCurrentDate() + ' 23:59:59'
        }
    }
}