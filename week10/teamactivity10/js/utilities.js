// let url = "https://earthquake.usgs.gov/fdsnws/ev ent/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02";
let url = "https://pokeapi.co/api/v2/pokemon/666"

async function getJSON() {
  //THIS WORKS
  await fetch(url)
  .then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    } 
    else {return response.json()}
  })
  .then(jsonData => {
    console.log(jsonData)
    return jsonData})
  .catch(err => console.log(err));
}


const getLocation = function(options) {
return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
});
};

export {getJSON, getLocation};








