

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
                let country = `${data.name.common}`;
                const article = document.createElement('article');
                article.className = 'country-card';
                article.id = country;
                // article.setAttribute('text', `${country}`);
                article.appendChild(document.createTextNode(`${country}`));
                document.querySelector('div.articles-container').appendChild(article);
                console.log(article);                          
            })            
        })        
        .catch(function(err){
            console.log(err);
        });
}









    
    
    
    

   
  