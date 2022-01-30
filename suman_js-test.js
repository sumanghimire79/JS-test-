// questio : 1

function oneToHundred() {
    for (let i = 1; i < 100; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`Jackpot!`);
        } else if (i % 3 === 0) {
            console.log(`divisible by 3: ${i}`);
        } else if (i % 5 === 0) {
            console.log(`divisible by 5: ${i}`);
        }

    }

}

oneToHundred()


// questio : 2


const bodyElement = document.querySelector('body');
const buttonElement = document.createElement('button');
buttonElement.innerHTML = 'Click Me'

bodyElement.appendChild(buttonElement)
    // const img1 = 'https://www.noanxiety.com/relaxing-links/relaxing-mountain-landscape.jpg'
    // const img2 = 'https://wallsdesk.com/wp-content/uploads/2018/03/Pictures-of-Elk.jpg'
    // const img3 = 'https://tse4.mm.bing.net/th/id/OIP.PYc18o6D8pBo6zMh5pzOjAHaE8?pid=ImgDet&w=825&h=550&rs=1'
const imgArray = ['img1', 'img2', 'img3']

buttonElement.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * imgArray.length)
    console.log(randomNumber);
    const imgElement = document.createElement('img')
    imgElement.src = imgArray[randomNumber]

})



// question : 3

const fetchApi = fetch('https://reqres.in/api/users')
fetchApi.then(data => {
    const jsonData = data.json()

    console.log(jsonData);
})