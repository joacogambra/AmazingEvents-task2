console.log(data)
let events = data.events
let containerjs = document.getElementById('containerjs')
console.log(containerjs)

for (let evento of events) {
    if(evento.date < data.currentDate){
        let div = document.createElement('div')
        div.className = 'card'
        div.style = 'width:18rem;'
        div.innerHTML =` 
        <img src="${evento.image}" class="card-img-top image-size" alt="${evento.name}">
        <div class="card-body bg-light ">
            <h5 class="card-title">${evento.name}</h5>
            <p class="card-text">${evento.description}</p>
            <p>Past date: ${evento.date}</p>
            <p>Price: $ ${evento.price}</p>
            <div class="d-flex justify-content-center align-items-end" style="height: 100px;">
             <a href="../pages/details.html" class="btn btn-primary ver-mas">More info</a>
            </div>  
        </div>  
    `
    containerjs.appendChild(div)
}
}