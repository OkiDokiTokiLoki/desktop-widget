const deg = 6;
const ana_hour = document.querySelector('#ana_hr');
const ana_minute = document.querySelector('#ana_mm');
const ana_second = document.querySelector('#ana_ss');

const digihours = document.querySelector('#digi_hours');
const digiminutes = document.querySelector('#digi_minutes');
const digiseconds = document.querySelector('#digi_seconds');

setInterval (() => {
    let day = new Date();
    let ana_hours = day.getHours() * 30;
    let ana_minutes = day.getMinutes() * deg;
    let ana_seconds = day.getSeconds() * deg;

    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();

    ana_hour.style.transform = `rotateZ(${(ana_hours)+(ana_minutes/12)}deg)`;
    ana_minute.style.transform = `rotateZ(${ana_minutes}deg)`;
    ana_second.style.transform = `rotateZ(${ana_seconds}deg)`;

    h=(h<10)? '0' + h : h;
    m=(m<10)? '0' + m : m;
    s=(s<10)? '0' + s : s;

    digihours.textContent = h;
    digiminutes.textContent = m;
    digiseconds.textContent = s;
})