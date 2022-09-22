// fetch('https://swapi.dev/api/planets/')
// .then((res) => {
//     return(res.json());
// })
// .then((data) => {
//     console.log(data);
// })

const fetchMyNextPlanets = (url = 'https://swapi.dev/api/planets/') => axios.get(url);

const printMyPlanets = ({data}) => {    
    console.log(data);    
    for (myPlanetName of data.results)
        console.log(myPlanetName.name);    
    return Promise.resolve(data.next);
};


fetchMyNextPlanets()
.then(printMyPlanets)
.then(fetchMyNextPlanets)
.then(printMyPlanets)
.catch(error =>{console.log(error)});



// function PrintPlanets(data) {
//     for (let i = 0; i < data.results.length; i++) {
//         console.log(data.results[i].name);
//     }; 
// }

// const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') =>{
//     return axios.get(url);
// }

// fetchNextPlanets()
// .then(({data}) => {
//     PrintPlanets(data);
//     fetchNextPlanets(data.next)
// })
// .then(({data}) => {
//     PrintPlanets(data);
//     return fetchNextPlanets(data.next)
// })
// .then(({data}) => {
//     PrintPlanets(data);
//     return fetchNextPlanets(data.next)
// })

// .catch((error) =>{
//     console.log(error);
// });



