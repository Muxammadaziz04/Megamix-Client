const parseTimestamp = (timestapm, locale = 'ru') => {
    if (Date.parse(timestapm) === NaN || !timestapm) return {
        hours: '',
        minutes: '',
        year: '',
        data: '',
        month: ''
    }

    let monthInArr = []
    const monthInRu = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    const monthInUz = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"]
    const monthInEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const monthInTr = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]

    switch (locale) {
        case 'ru': monthInArr = monthInRu; break;
        case 'uz': monthInArr = monthInUz; break;
        case 'en': monthInArr = monthInEn; break;
        case 'tj': monthInArr = monthInRu; break;
        case 'tr': monthInArr = monthInTr; break;
        default: break;
    }

    const date = new Date(timestapm)
    const hours = date?.getHours() < 10 ? `0${date?.getHours()}` : date?.getHours()
    const minutes = date?.getMinutes() < 10 ? `0${date?.getMinutes()}` : date?.getMinutes()
    const year = date?.getFullYear()
    const data = date?.getDate()
    const month = monthInArr[date?.getMonth()]
    return {
        hours,
        minutes,
        year,
        data,
        month
    }
}

export default parseTimestamp