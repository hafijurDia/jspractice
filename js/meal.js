//load meal
const loadMeal = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals));
}
// create dynamic element
const displayMeal = (meals) => {
    const mealWrap = document.getElementById('meal-wrap');
    mealWrap.innerHTML = '';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p>Category: ${meal.strCategory}</p>
                <button onclick="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealModal">View Details</button>
            </div>
        </div>
    `
        mealWrap.appendChild(mealDiv);
        console.log(meal)
    });
}
//serach function
const searchMeal = () => {
    const searchText = document.getElementById('serachInput').value;
    loadMeal(searchText);
}
// load meal details in modal
const loadMealDetails = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
}

//display details in modal
const displayMealDetails = (meal) => {
    document.getElementById('exampleModalLabel').innerText = meal.strMeal;
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <img class="img-fluid" src="${meal.strMealThumb}"/>
    `
    console.log(meal);
}


loadMeal('fish');