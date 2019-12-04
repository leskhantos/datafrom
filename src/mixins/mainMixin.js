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
        getCurrentTime() {
            let today = new Date()

            let h = today.getHours()
            let m = today.getMinutes()
            let s = today.getSeconds()

            if (h < 10) {
                h = `0${h}`
            }

            if (m < 10) {
                m = `0${m}`
            }

            if (s < 10) {
                s = `0${s}`
            }

            let time = `${h}:${m}:${s}`

            return time
        },
        getTonight() {
            return this.getCurrentDate() + ' 23:59:59'
        },
        parseTime(datetime) {
            let date = new Date(datetime)

            return `${date.getHours()}:${date.getMinutes()}`
        },
        ruMealType(val) {
            const types = {
                'breakfast': 'Завтрак',
                'lunch': 'Обед',
                'snack': 'Перекус',
                'dinner': 'Ужин',
            }

            return types[val]
        },
    }
}