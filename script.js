
const button = document.querySelector('button');
let resultdiv = document.createElement('div');
    resultdiv.id = 'result';
    //resultdiv.style.background
    document.getElementById('wrapper').appendChild(resultdiv);
    
//event listener - check whether event is happening or not
button.addEventListener('click',displayStats);
function displayStats(){
    const input = document.getElementById('input');
    const city = input.options[input.selectedIndex].value;
    let population = 0, literacyRate = 0, language = 0;
    
    switch(city){
        case 'Hatton':
            population = 22000;
            literacyRate = 95.20;
            language = 'Tamil';
            break
        case 'Maskeliya':
            population = 15000;
            literacyRate = 85.05;
            language = 'Tamil';
            break
        case 'Kotagala':
            population = 20000;
            literacyRate = 85;
            language = 'Tamil';
            break
        case 'Bogawantalawa':
            population = 15000;
            literacyRate = 80;
            language = 'Tamil';
            break
    }
    let text = `The Sri Lankan Town of ${city} has a population of ${population}. Language spoken is ${language} and the literacy rate is ${literacyRate}%`;
    document.getElementById('result').innerHTML = text;    

}