export const validatePhonenumber = number => {
    var regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    return regex.test(String(number));
}

export const date2dtstr = date => {
    let year = String(date.getFullYear()).padStart(4, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let _date = String(date.getDate()).padStart(2, '0');
    let hour = String(date.getHours()).padStart(2, '0');
    let min = String(date.getMinutes()).padStart(2, '0');
    let sec = String(date.getSeconds()).padStart(2, '0');
    return `${_date}/${month}/${year} ${hour}:${min}:${sec}`
}

export const date2daystr = date => {
    const timestamp = date.getTime();
    const delta = Date.now() - timestamp;
    let ts = Math.floor(delta / 1000);
    let day = Math.floor(ts / (24 * 3600));
    let hour = (Math.floor(ts / 3600)) % 24;
    let min = Math.floor(ts / 60) % 60;
    let sec = ts % 60;
    if (day) {
        return date2dtstr(date);
    } else if (hour) {
        return `${hour} giờ trước`;
    } else if (min) {
        return `${min} phút trước`;
    } else if (sec) {
        return `${sec} giây trước`;
    }
}

export const isIncludeChapter = (chapters, chapter) => {
    for(let i=0; i< chapters.length; i++){
        if(chapters[i].chapter_id === chapter.chapter_id){
            return true;
        }
    }
    return false;
}