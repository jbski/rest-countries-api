
// Add code to load daily data when page is loaded
if (window.addEventListener) {
    window.addEventListener("load", getCountries, false);
 } else if (window.attachEvent) {
    window.attachEvent("onload", getCountries);
 } else {
    window.onload = getCountries; //will override previously attached event listeners.
 }


// Populate the regions select box
regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
regions.forEach(function(region){
    const option = document.createElement('option');
    option.className = 'region-name';
    option.id = `${region}`;
    option.appendChild(document.createTextNode(region));
    document.getElementById('region').appendChild(option);
})


// Fetch API call to get region data
document.getElementById('region').addEventListener('change', getRegionData);

function getRegionData() {   
    // Check the mode (light mode / dark mode) 
    curMode = document.querySelector('.mode-header-container h3').textContent;
    select = document.getElementById('region'); 
    //Get the value selected in the select box and assign it to region_value   
    region_value = select.options[select.selectedIndex].value;
    //Define the base path of the API    
    region_api_base_path = 'https://restcountries.com/v2/region/'
    //Remove countries from the prior region selection from the page
    const articles = document.querySelectorAll('article');
    articles.forEach(function(article){
        article.remove();
    })
    //Get countries from the selected region
    fetch(`${region_api_base_path}${region_value}`)
        .then(function(res){
            return res.json();
        })
        .then(function(region_data){                
            region_data.forEach(function(data){
                let country = `${data.name}`;
                let population = data.population;
                let region = data.region;
                let capital = data.capital;
                let flag_url = data.flags.png
                // Create main article tag for country
                const article = document.createElement('article');
                article.className = 'country-card';
                document.querySelector('div.articles-container').appendChild(article);

                // Load flag image
                const div_flag = document.createElement('div');
                div_flag.className = 'card';        
                article.appendChild(div_flag);
                div_flag.style.backgroundImage="url(" + flag_url + ")";

                // Load country name
                const div_name = document.createElement('div');
                div_name.className = 'country-name'; 
                div_name.appendChild(document.createTextNode(`${country}`));       
                article.appendChild(div_name);

                // Load country population
                const div_population = document.createElement('div');
                div_population.className = 'country-population'; 
                //Add "," in thousands place
                div_population.appendChild(document.createTextNode(`${population.toLocaleString('en-US')}`));       
                article.appendChild(div_population);

                // Load country region
                const div_region = document.createElement('div');
                div_region.className = 'country-region'; 
                div_region.appendChild(document.createTextNode(`${region}`));       
                article.appendChild(div_region);

                // Load country capital
                const div_capital = document.createElement('div');
                div_capital.className = 'country-capital'; 
                div_capital.appendChild(document.createTextNode(`${capital}`));       
                article.appendChild(div_capital);  
                
                changeModeStyling(curMode)
            }) 
        })        
        .catch(function(err){
            console.log(err);
        });
}



// Fetch API call to search for country by name
document.getElementById('country').addEventListener('input', getCountry);

function getCountry(e) {    
    // Check the mode (light mode / dark mode) 
    curMode = document.querySelector('.mode-header-container h3').textContent;
    select = document.getElementById('country'); 
    //Get the value selected in the select box and assign it to region_value   
    country_value = e.target.value;
    console.log(country_value);
    //Define the base path of the API    
    country_api_base_path = 'https://restcountries.com/v2/name/'
    //Remove countries from the prior region selection from the page
    const articles = document.querySelectorAll('article');
    articles.forEach(function(article){
        article.remove();
    })
    //Get countries from the selected region
    fetch(`${country_api_base_path}${country_value}`)
        .then(function(res){
            return res.json();
        })
        .then(function(country_data){                
            country_data.forEach(function(data){
                let country = `${data.name}`;
                let population = data.population;
                let region = data.region;
                let capital = data.capital;
                let flag_url = data.flags.png
                // Create main article tag for country
                const article = document.createElement('article');
                article.className = 'country-card';
                document.querySelector('div.articles-container').appendChild(article);

                // Load flag image
                const div_flag = document.createElement('div');
                div_flag.className = 'card';        
                article.appendChild(div_flag);
                div_flag.style.backgroundImage="url(" + flag_url + ")";

                // Load country name
                const div_name = document.createElement('div');
                div_name.className = 'country-name'; 
                div_name.appendChild(document.createTextNode(`${country}`));       
                article.appendChild(div_name);

                // Load country population
                const div_population = document.createElement('div');
                div_population.className = 'country-population'; 
                //Add "," in thousands place
                div_population.appendChild(document.createTextNode(`${population.toLocaleString('en-US')}`));       
                article.appendChild(div_population);

                // Load country region
                const div_region = document.createElement('div');
                div_region.className = 'country-region'; 
                div_region.appendChild(document.createTextNode(`${region}`));       
                article.appendChild(div_region);

                // Load country capital
                const div_capital = document.createElement('div');
                div_capital.className = 'country-capital'; 
                div_capital.appendChild(document.createTextNode(`${capital}`));       
                article.appendChild(div_capital);    

                changeModeStyling(curMode)
            }) 
        })        
        .catch(function(err){
            console.log(err);
        });
}



// Fetch API call all countryies
function getCountries() {    
    select = document.getElementById('country'); 
    //Get the value selected in the select box and assign it to region_value
    //Define the base path of the API    
    country_api_base_path = 'https://restcountries.com/v2/all'
    //Remove countries from the prior region selection from the page
    const articles = document.querySelectorAll('article');
    articles.forEach(function(article){
        article.remove();
    })
    //Get countries from the selected region
    fetch(`${country_api_base_path}`)
        .then(function(res){
            return res.json();
        })
        .then(function(country_data){                
            country_data.forEach(function(data){
                let country = `${data.name}`;
                let population = data.population;
                let region = data.region;
                let capital = data.capital;
                let flag_url = data.flags.png
                // Create main article tag for country
                const article = document.createElement('article');
                article.className = 'country-card';
                document.querySelector('div.articles-container').appendChild(article);

                // Load flag image
                const div_flag = document.createElement('div');
                div_flag.className = 'card';       
                article.appendChild(div_flag);
                div_flag.style.backgroundImage="url(" + flag_url + ")";

                // Load country name
                const div_name = document.createElement('div');
                // const a = document.createElement('a');
                // a.className = 'country-name';
                // a.id = country;
                // a.href = 'detail.html';
                div_name.className = 'country-name'; 
                div_name.appendChild(document.createTextNode(`${country}`)); 
                // a.appendChild(document.createTextNode(`${country}`)); 
                article.appendChild(div_name); 
                // article.appendChild(a); 
             
                // Load country population
                const div_population = document.createElement('div');
                div_population.className = 'country-population'; 
                //Add "," in thousands place
                div_population.appendChild(document.createTextNode(`${population.toLocaleString('en-US')}`));       
                article.appendChild(div_population);

                // Load country region
                const div_region = document.createElement('div');
                div_region.className = 'country-region'; 
                div_region.appendChild(document.createTextNode(`${region}`));       
                article.appendChild(div_region);

                // Load country capital
                const div_capital = document.createElement('div');
                div_capital.className = 'country-capital'; 
                div_capital.appendChild(document.createTextNode(`${capital}`));       
                article.appendChild(div_capital);    
            })         
        })        
        .catch(function(err){
            console.log(err);
        });
}


// Change mode
document.querySelector('.mode-header-container').addEventListener('click', changeMode);

function changeMode(e){
    curMode = document.querySelector('.mode-header-container h3').textContent;
    let newMode = '';
    if (curMode == 'Light Mode') {
        newMode = 'Dark Mode';       
    } else {
        newMode = 'Light Mode';      
    } 
    const newLightMode = document.createElement('h3');
    newLightMode.className = 'mode';
    newLightMode.appendChild(document.createTextNode(newMode));

    const oldLightMode = document.querySelector('.mode');

    const updateMode = document.querySelector('.mode-header-container')
    updateMode.replaceChild(newLightMode, oldLightMode);
    curMode = document.querySelector('.mode-header-container h3').textContent;  

    changeModeStyling(newMode);
}



function changeModeStyling(mode){
    // console.log(`STYLE: ${mode}`);
    const dark_header = 'hsl(209, 23%, 22%)';
    const dark_body = 'hsl(207, 26%, 17%)';
    const dark_text = 'hsl(0, 0%, 100%)'

    const light_header = 'hsl(0, 0%, 100%)';
    const light_body = 'hsl(0, 0%, 98%)';
    const light_text = 'hsl(200, 15%, 8%)'; 
    const light_input = 'hsl(0, 0%, 52%)';

    header_main = document.querySelector('.main-header-container');
    header_sub = document.querySelector('.header-container');
    body = document.body;
    articles = document.querySelectorAll('.country-card');
    country_filter = document.getElementById('country');
    region_filter = document.getElementById('region');
    country_names = document.querySelectorAll('.country-name');

    if (mode === 'Dark Mode') {
        body.style.backgroundColor=dark_body;        
        header_main.style.backgroundColor=dark_header;
        header_sub.style.backgroundColor=dark_header;
        header_sub.style.color=dark_text;
        articles.forEach(function(article){
            article.style.backgroundColor=dark_header;
            article.style.color=dark_text;
        });

        country_names.forEach(function(country_name){
            country_name.style.color=dark_text;
        });

        country_filter.style.backgroundColor=dark_header;
        country_filter.style.color=dark_text;
        region_filter.style.backgroundColor=dark_header;
        region_filter.style.color=dark_text;
    } else {
        body.style.backgroundColor=light_body;
        header_main.style.backgroundColor=light_header;
        header_sub.style.backgroundColor=light_header;
        header_sub.style.color=light_text;
        articles.forEach(function(article){
            article.style.backgroundColor=light_header;
            article.style.color=light_text;
        });

        country_names.forEach(function(country_name){
            country_name.style.color=light_text;
        });

        country_filter.style.backgroundColor=light_header;
        country_filter.style.color=light_text;
        region_filter.style.backgroundColor=light_header;
        region_filter.style.color=light_input;
    }
}


//Refresh page

document.querySelector('h1').addEventListener('click', refreshPage);

function refreshPage(){
    curMode = document.querySelector('.mode').textContent;
    // console.log(`curMode: ${curMode}`);
    let localMode;
    localStorage.setItem('curmode', curMode);
    // console.log(`Local Mode: ${localMode}`);

    
    localMode = localStorage.curmode;
    // console.log(`GetLocalMode: ${localMode}`);
    document.location.reload();      
};


document.addEventListener('click', getData);

function getData(e){
    let countries = document.querySelectorAll('.country-name');
    countries.forEach(function(country){ 
        let target_country = e.target.textContent;  
        if (country.textContent === target_country){
            // Add country to session storage
            sessionStorage.setItem('country_name', target_country);
            // Open new tab with country
            window.location.href = 'detail.html';


            document.createElement('h2');
        }            
    })
}




























