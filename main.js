const baseUrl = "https://dog.ceo/api/breeds";
const randomImg = document.querySelector('#random');
const rightSect = document.querySelector(`.right-section`);
const explore = document.querySelector(`#explore`);



console.log(randomImg);

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