const counter = document.querySelector('.timer');
const greet = document.querySelector('.greeting');


const timeCount = (timer) => {
    const promise = new Promise((res, rej) => {


        setTimeout(() => {
            if (timer === 0) {
                counter.innerHTML = '';
                greet.innerHTML = 'Happy New Year...!';
            } else if (timer > 0) {
                counter.innerHTML = timer;
                timer = timer - 1;
            }
            if (timer >= 0) {
                res(timer);
            } else {
                rej(new Error('Time over'))
            }


        }, 1000);
    })
    return promise;
}

timeCount(10)
    .then(msg => timeCount(msg))
    .then(time => timeCount(time))
    .then(time => timeCount(time))
    .then(time => timeCount(time))
    .then(time => timeCount(time))
    .then(time => timeCount(time))
    .then(time => timeCount(time))
    .then(time => timeCount(time))
    .then(time => timeCount(time))
    .then(time => timeCount(time))
    .catch(err => console.log(err));



// Countries population greater than 2 crores
const getCountries = () => {

    const contries = fetch('https://restcountries.eu/rest/v2/all')
        .then(data => data.json())
        .then(data => {
            console.log(data)
            const countryPopulation = data.filter(country => country.population > 20000000).map(data => data.name);
            console.log(countryPopulation)

        });

}

getCountries();