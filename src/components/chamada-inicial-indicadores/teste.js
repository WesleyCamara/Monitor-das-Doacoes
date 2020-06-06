let arrayCity = [];

arrayCity.map(item => {
    if(arrayCity.indexOf(item.cidade) === -1) {
        arrayCity.push(item.cidade);
    }
})

console.log(arrayCity)

let arrayComplete = [];

arrayCity.map(city => {
    const total = array.reduce((total,data) => data.cidade === city ? total +data.doadores :parseInt(total), 0);
    arrayComplete.push({ estado: city, doadores: total})


})
console.log (arrayComplete)