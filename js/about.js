import { getData } from "./function";

const name= document.getElementById('name');
const price= document.getElementById('price');
const year= document.getElementById('year');
const color= document.getElementById('color');
const desc= document.getElementById('desc');
const type= document.getElementById('type');
const img= document.getElementById('img');
const del= document.getElementById('del');

let elId;
document.addEventListener('DOMContentLoaded', function(){
    let urlIndex = window.location.href.search('id=');
    if(urlIndex>0){
        elId = window.location.href.substring(urlIndex+3);
        console.log(elId);
        if(elId){
            let data = getData();
            let car = data.find(el=>{
                return el.id == elId
            })

            name.innerHTML = car.name;
            price.innerHTML = car.price;
            year.innerHTML = car.year;
            color.innerHTML = car.color;
            desc.innerHTML = car.desc;
            type.innerHTML = car.type;
            img.setAttribute('src', car.img);

        }else{
            window.location.assign("http://127.0.0.1:5500/index.html")
        }
    }else{
        window.location.assign("http://127.0.0.1:5500/index.html")
    }
})

del && del.addEventListener('click', function(){
    let isdelete = confirm('Rostdan ham ochirmoqchimisiz');

    if(isdelete){
        let data = getData(0);
        data = data.filter(car =>{
            return car.id != elId
        })

        localStorage.setItem('cars', JSON.stringify(data));
        window.location.assign("http://127.0.0.1:5500/index.html")  
    }
})