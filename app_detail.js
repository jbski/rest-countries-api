
// Add code to get selected country name when page is loaded
if (window.addEventListener) {
    window.addEventListener("load", getCountryDetail, false);
 } else if (window.attachEvent) {
    window.attachEvent("onload", getCountryDetail);
 } else {
    window.onload = getCountryDetail; //will override previously attached event listeners.
 }



 function getCountryName (){
    selected_country = sessionStorage.getItem('country_name');
    return selected_country;
 }


 function getCountryDetail () {
    api_base_path = 'https://restcountries.com/v2/name/'
    // call function to get the selected country and construct full api path
    c_name = getCountryName();
    api_path = api_base_path + c_name
    console.log(api_path);

    // use fetch api to get country data in JSON format
    fetch(api_path)
        .then(function (res){
            return res.json();
        })
        .then(function(country_data){
            country_data.forEach(function(data){
                console.log(data.name);
            })
        })
    
 }