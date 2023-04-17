const digimonData = document.querySelector ("#digimonData");
const buscarDigimon = document.getElementById ("busqueda")
const cardContainer = document.getElementById("card-container");
const searchButton = document.getElementById("search-button");

async function getData2(){
    try{
        var promise = await fetch("https://digimon-api.vercel.app/api/digimon");
        var resultado = await promise.json();
        return resultado;
    }catch(error){
        console.log(error)
    }
    
}

getData2();

async function renderData () {
    const digimon = await getData2 ();
    let template = "" ;

  digimon.forEach((digimon) => {

    template += `
  
   <tr> 
   <td> <b> ${digimon.name} </b> </td>
   <td> <img src= "${digimon.img}" alt = "" class= "img-card"> </td>
   <td> <b> ${digimon.level} </b></td>
   </tr>
    
    ` ;
    
  });
digimonData.innerHTML = template;
}
renderData ();
    
async function getDigimonByName () {
    const buscarDigimon = document.getElementById ("busqueda").value
    try{
      var promise = await fetch("https://digimon-api.vercel.app/api/digimon/name/" +buscarDigimon);
      var resultado = await promise.json();
     console.log (resultado)
  }catch(error){
      console.log(error)
  }
}



searchButton.addEventListener("click", async () => {
  const searchInput = document.getElementById("search-input").value;

  try {
    const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${searchInput}`);
    const digimon = await response.json();

var myCard= `
      <div class="card" style="width: 18rem;">
      <img src="${digimon[0].img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${digimon[0].name}</h5> 
      <div class="card-body">
        <h5 class="card-title">${digimon[0].level}</h5>
      
        
      </div>`


    cardContainer.innerHTML=myCard;

    document.querySelector("main").innerHTML=""


} catch (error) {
console.log(error);
}
});

