
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
                console.log(data);

                const country_name =  data.name
                const native_name = data.nativeName
                const population = data.population
                const region = data.region
                const subregion = data.subregion
                const capital = data.capital
                const top_level_domain = data.topLevelDomain
                const flag_link = data.flags.png
                const currencies = data.currencies
                const languages = data.languages
                const border_countries = data.borders
                

                // Create main article tag for country
                const article = document.createElement('article');
                article.id = 'country-info-container';
                document.querySelector('section#country-container').appendChild(article);

                // Load flag image
                const div_flag = document.createElement('div');
                div_flag.id = 'detail-flag';       
                article.appendChild(div_flag);
                div_flag.style.backgroundImage="url(" + flag_link + ")";

                // Load country name
                const div_name = document.createElement('div');
                div_name.id = 'country-name'; 
                div_name.appendChild(document.createTextNode(`${country_name}`)); 
                article.appendChild(div_name); 

                // Create country group 1 info
                const g1 = document.createElement('div');
                g1.id = 'country-group1-info';
                article.appendChild(g1);

                // Load population
                const div_pop = document.createElement('div');
                div_pop.id = 'population'; 
                div_pop.appendChild(document.createTextNode(`${population.toLocaleString('en-US')}`)); 
                g1.appendChild(div_pop); 

                // Load region
                const div_reg = document.createElement('div');
                div_reg.id = 'region'; 
                div_reg.appendChild(document.createTextNode(`${region}`)); 
                g1.appendChild(div_reg); 

                // Load sub-region
                const div_subreg = document.createElement('div');
                div_subreg.id = 'sub-region'; 
                div_subreg.appendChild(document.createTextNode(`${subregion}`)); 
                g1.appendChild(div_subreg);

                // Load capital
                const div_cap = document.createElement('div');
                div_cap.id = 'capital'; 
                div_cap.appendChild(document.createTextNode(`${capital}`)); 
                g1.appendChild(div_cap);

                // Create country group 2 info
                const g2 = document.createElement('div');
                g2.id = 'country-group2-info';
                article.appendChild(g2);

                // Load top level domain
                const div_top = document.createElement('div');
                div_top.id = 'top-level-domain'; 
                div_top.appendChild(document.createTextNode(`${top_level_domain}`)); 
                g2.appendChild(div_top);

                // Load currencies
                const ul_cur = document.createElement('ul');
                ul_cur.id = 'currencies'; 
                g2.appendChild(ul_cur)
                currencies.forEach(function(currency){
                    const li_cur = document.createElement('li');
                    ul_cur.appendChild(li_cur);
                    li_cur.appendChild(document.createTextNode(`${currency.name}`));
                })

                // Load languages
                const ul_lan = document.createElement('ul');
                ul_lan.id = 'languages'; 
                g2.appendChild(ul_lan)
                languages.forEach(function(language){
                    const li_lan = document.createElement('li');
                    ul_lan.appendChild(li_lan);
                    li_lan.appendChild(document.createTextNode(`${language.name}`));
                })

                // Create border-countries-container
                const bc_container = document.createElement('div');
                bc_container.className = 'border-countries-container';
                article.appendChild(bc_container);

                // Create border-countries
                const bc = document.createElement('div');
                bc.id = 'border-countries';
                bc_container.appendChild(bc);

                // Load border countries
                const ul_bc = document.createElement('ul');
                ul_bc.className = 'btn-border-countries'; 
                bc.appendChild(ul_bc)
                border_countries.forEach(function(border_country) {                    
                    base_border_url = 'https://restcountries.com/v3.1/alpha/'
                    fetch('https://restcountries.com/v3.1/alpha/' + border_country)
                        .then(function(res) {
                            return(res.json());
                        })
                        .then(function(border_data) {
                            const li_bc = document.createElement('li');
                            ul_bc.appendChild(li_bc);
                            li_bc.appendChild(document.createTextNode(`${border_data[0].name.common}`));
                        })                  
                })


                

            })
        })
    
 }