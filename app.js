

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
            }) 
        })        
        .catch(function(err){
            console.log(err);
        });
}



// Fetch API call to search for country by name
document.getElementById('country').addEventListener('input', getCountry);

function getCountry(e) {    
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
            }) 
        })        
        .catch(function(err){
            console.log(err);
        });
}













    
    
    
    

   
  