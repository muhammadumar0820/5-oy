import { validate, getData, createCard } from "./function,js";

const button = document.getElementById('button');
const name = document.getElementById('name');
const price = document.getElementById('price');
const year = document.getElementById('year');
const color = document.getElementById('color');
const type = document.getElementById('type');
const desc = document.getElementById('desc');
const img = document.getElementById('img');
const form = document.getElementById('form');
const dataWrapper = document.getElementById('data-wrapper');

button && button.addEventListener('click', function(e){
    e.preventDefault();
    if(validate({name, price, color, year, type, desc, img})){
        let car = {
            name: name.value,
            price: price.value,
            year: year.value,
            img: img.value,
            color: color.value,
            desc: desc.value,
            type: type.value,
            status: 'actuve',
            id: Date.now()
        }

        let data = getData();
        data.push(car);
        localStorage.setItem('cars', JSON.stringify(data));

        let card = createCard(car);
        dataWrapper.innerHTML += card;

        form.reset();

    }else{
        console.log("Validatsiyadan o'tmadi");
    }
});

document.addEventListener('DOMContentLoaded', function(){
    let cars = getData();
        cars.length && cars.forEach(car => {
            let card = createCard(car);
            dataWrapper.innerHTML += card;
        });

        let moreButtons = document.querySelectorAll('button.more');
        moreButtons.length &&moreButtons.forEach(more => {
            more && more.addEventListener('click', function(){
                let id = this.getAttribute('data-id').substring(5)
                if(id){
                    let domain = window.location.href.substring(0,window.location.href.search('index'))
                    window.location.assign(`${domain}pages/about.html?id=${id}`)
                }
            })
        })

})