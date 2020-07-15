const base_api = "https://www.superheroapi.com/api.php/";
const api_key = "2184578135021546";
var name_hero = document.getElementById("name");
var hero_id =document.getElementById("hero_id");
var gendr = document.getElementById("occu");
var rce = document.getElementById("race");

function run(){
    var Search_name = document.getElementById('search_box').value;
    const api_url = base_api + api_key +"/search/"+ Search_name;
    console.log(api_url); 
    
    //fetching the JSON
    fetch(api_url)
        .then(res => res.json())
        .then(res => {console.log(res); 

            var nme = res.results[0].name;
            var id =res.results[0].id;
            var race=res.results[0].appearance.race;
            var gender=res.results[0].appearance.gender;
            var image_url = res.results[0].image.url;
            //console.log(nme);                 Name of the hero

            //adding the values to HTML divs
            name_hero.innerHTML+= ":" + nme;
            hero_id.innerHTML+= ":" + id;
            gendr.innerHTML +=":" + gender;
            rce.innerHTML += ":" + race;

            //adding image to div
            var img = document.createElement("img");
            img.src = image_url;
            var src = document.getElementById("add_img");
            src.appendChild(img);
            

        })
}