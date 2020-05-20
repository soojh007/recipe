let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
  let userInput = document.querySelector("#input").value
  let APP_ID = "d3cf97aa"
  let API_KEY = "5e8dd78a0a5c6181dce5182d60bdcb20"
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${userInput}`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
  document.querySelector("#content").innerHTML = ` 
<div id="wrapper">
<div class="card" style="width: 18rem;">
  <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.hits[0].recipe.label}</h5>
    <p class="card-text">Ingredients: ${data.hits[0].recipe.ingredientLines}</p>
    <p class="card-text">Prep Time: ${data.hits[0].recipe.totalTime} min</p>
    <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Full Recipe</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="${data.hits[1].recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.hits[1].recipe.label}</h5>
    <p class="card-text">Ingredients: ${data.hits[1].recipe.ingredientLines}</p>
    <p class="card-text">Prep Time: ${data.hits[1].recipe.totalTime} min</p>
    <a href="${data.hits[1].recipe.url}" class="btn btn-primary">Full Recipe</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="${data.hits[2].recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.hits[2].recipe.label}</h5>
    <p class="card-text">Ingredients: ${data.hits[2].recipe.ingredientLines}</p>
    <p class="card-text">Prep Time: ${data.hits[2].recipe.totalTime} min</p>
    <a href="${data.hits[2].recipe.url}" class="btn btn-primary">Full Recipe</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="${data.hits[3].recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.hits[3].recipe.label}</h5>
    <p class="card-text">Ingredients: ${data.hits[3].recipe.ingredientLines}</p>
    <p class="card-text">Prep Time: ${data.hits[3].recipe.totalTime} min</p>
    <a href="${data.hits[3].recipe.url}" class="btn btn-primary">Full Recipe</a>
  </div>
</div>
</div>
`

}

