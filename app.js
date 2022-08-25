

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
    region_value = select.options[select.selectedIndex].value;
    console.log(region_value);    
    region_api_base_path = 'https://restcountries.com/v3.1/region/'
    //Remove countries from the prior region selection
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
                let country = `${data.name.official}`;
                let population = data.population;
                let region = data.region;
                let capital = data.capital[0];
                let flag_url = data.flags.png
                // Create main article for country
                const article = document.createElement('article');
                article.className = 'country-card';
                // article.id = country;
                // article.appendChild(document.createTextNode(`${country}`));
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
                div_population.appendChild(document.createTextNode(`${population}`));       
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













    
    
    
    

   
  