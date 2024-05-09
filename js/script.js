const bottone = document.querySelector('button');

console.log(bottone);

bottone.addEventListener('click', function(){
    let userKmEl = document.querySelector('#user-distance');
    let userAgeEl = document.querySelector('#user-age');
    let price = (userKmEl.value * 0.267113);

    console.log(userAgeEl.value, userKmEl.value, price);
    
    if (userAgeEl.value < 21){ 
        document.getElementById('output').innerHTML = ( (price) -  ((price /100) *24.552) ).toFixed(2);
    } else if (userAgeEl.value >= 63){
        document.getElementById('output').innerHTML = ( (price) -  ((price /100) *37.893) ).toFixed(2);
    } else {
        document.getElementById('output').innerHTML = price.toFixed(2)
    }
} )