const apiLink = 'https://coronavirus-19-api.herokuapp.com/countries/';
const searchBtn = document.getElementById("button");


const totalRecoverd = document.getElementById("recovered");
const totalEffected = document.getElementById("effected");
const totalDeath = document.getElementById("death");
const countryName = document.getElementById("countryName");


searchBtn.addEventListener("click",function(){
    const inputText = document.getElementById("inputData").value;
    fetch(`${apiLink}${inputText}`)
  .then(response => response.json())
  .then(data =>  {
        console.log(data)
        showData(data.country, data.cases, data.deaths, data.recovered)
    })
    fetch('http://demo.sylius.com/api/v1/countries/')
  .then(response => response.json())
  .then( datatable =>  {
        console.log(datatable);
    })
})
  

function showData(country, cases, death, recovered){
    countryName.innerHTML = country;
    totalEffected.innerHTML = cases;
    totalRecoverd.innerHTML = recovered;
    totalDeath.innerHTML = death;
    
} 