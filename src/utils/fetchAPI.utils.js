const FETCH_API = fetch("https://restcountries.eu/rest/v2/all")
  .then((response) => response.json())
  .then((countries) => countries)
  .catch((err) => console.log("Error:", err));

export default FETCH_API;
