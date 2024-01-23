function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
}

function validate(data){
    if(!data.name.value) {
        alert('Nomi kamida 4 ta belgidan tashkil topishi kerak');
        data.name.focus();
        return false;
    }

    if(data.name.value.trim().length < 3){
        alert('Nomini kiritish shart');
        data.name.focus();
        return false;
    }

    if(!data.price.value) {
        alert('Narxi kiritish shart');
        data.price.focus();
        return false;
    }

    if(!data.price.value < 100) {
        alert('Narxi kam kiritildi');
        data.price.focus();
        return false;
    }

    if(!Number(data.price.value) < 100) {
        alert('Narxi raqamda kiritilishi kerak');
        data.price.focus();
        return false;
    }

    if(!data.color.value) {
        alert('Rangni tanlanishi shart');
        data.color.focus();
        return false;
    }

    if(!data.img.value) {
        alert('Rasmini kiritish shart');
        data.img.focus();
        return false;
    }

    if(!isValidUrl(data.img.value)) {
        alert('Rasm notogri kiritildi');
        data.img.focus();
        return false;
    }

    if(!data.type.value) {
        alert('Turini tanlanishi shart');
        data.type.focus();
        return false;
    }

    return true;
}

function getData(){
    let data = [];
    if(localStorage.getItem('cars')){
        data = JSON.parse(localStorage.getItem('cars'))
    }

    return data;
}

function createCard(car) {
    return `
        <div class="border row p-2 mb-2">
            <div class="col-2">
                <img width = "200" height = "200"src="${car.img}" alt="">
            </div> 
            <div class="col-10">
                <div class="wrapper d-flex justify-content-between">
                    <h3 class="fs-4">${car.name}</h3>
                    <button data-id='data_${car.id}' class="btn btn-info text-white" more>batafsil</button>
                </div>
                <h4 class="fs-5">${car.price}</h4>
                <h4 class="fs-5">${car.color}</h4>
                <h4 class="fs-5">${car.year}</h4>
                <h4 class="fs-5">${car.type}</h4>
                <p>${car.desc}</p>
            </div>         
        </div>
    `;
}

export{validate, getData, createCard};