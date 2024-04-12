const baseUrl = "https://dog.ceo/api/breeds";
const randomImg = document.querySelector('#random');
const rightSect = document.querySelector(`.right-section`);
const explore = document.querySelector(`#explore`);
const select = document.querySelector(`#breeds`);
const dogsDisplay = document.querySelector(`.dogs-display`);

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
        breeds.map((breed) => {
            const option = document.createElement("option");
            option.textContent = breed;
            option.value = breed;

            select.appendChild(option);
        });

        select.addEventListener('change', (event) => {
            const selectedValue = event.target.value;
            
            fetchDogBreed(selectedValue);
        });
    });
}
function fetchDogBreed(breed) {
    fetch (`https://dog.ceo/api/breed/${breed}/images`)
    .then(res => res.json())
    .then((data) => {
        const images = data.message.slice(0, 8);

        images.map((image) => {
            const dogCard = document.createElement('div');
            dogCard.className = 'dog-card';

            const dogImage = document.createElement('img');
            dogImage.src = image;
            dogImage.alt = 'dog image';
            dogCard.appendChild(dogImage);

            dogsDisplay.appendChild(dogCard);
            
        });
  });
}
init();