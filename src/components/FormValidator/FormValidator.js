

const name = (value) => {
    let patt = /^[A-Z]{1}[A-Za-z]{2,25}$/;

    if(!patt.test(value.replace(/\s/g,''))){
        return false;
    }else {
        return true;
    }
}

const zip = (value) => {
    
    let patt = /^([0-9]{5})$/;

    if(!patt.test(value.trim())){
        return false;
    } else {
        return true;
    }
    
}

const email = (value) => {
    let patt = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9.]+)\.([a-zA-Z]{2,6})$/;

    if(!patt.test(value.trim())){
        return false;
    } else {
        return true;
    }
}

const phone = (value) => {
    let patt =  /\d{9,25}$/;

    if(!patt.test(value.replace(/\s/g,''))){
        return false;
    } else {
        return true;
    }
}
const city = (value) => {
    let patt = /^[A-Z]{1}[A-Za-z]{1,25}$/;

    if(!patt.test(value.replace(/\s/g,''))){
        return false;
    }else {
        return true;
    }
}

export default { name, zip, email, phone, city };


