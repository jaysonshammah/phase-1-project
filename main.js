const baseUrl = "https://dog.ceo/api/breeds";
const randomImg = document.querySelector('#random');
const rightSect = document.querySelector(`.right-section`);
const explore = document.querySelector(`#explore`);
const select = document.querySelector(`#breeds`);


function init() {
    fetchRandomDog();
    fetchAllDogBreeds(); 
}

function fetchRandomDog() {
    fetch(`${baseUrl}/image/random`)
        .then((res) => res.json())
        .then((data) => {
            rightSect.innerHTML=`<img 
                        src= ${data.message}
                        alt="doggo" 
                        id = "random"
           />`;
      });
}

explore.addEventListener('click', fetchRandomDog);
    
fetchRandomDog();
fetchAllDogBreeds(); 

function fetchAllDogBreeds() {
    fetch(`${baseUrl}/list/all`)
    .then(res =>res.json())
    .then((data) => {
        const breeds = Object.keys(data.message);

        console.log(breeds);
    })
}

init();