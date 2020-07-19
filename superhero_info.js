//getting the name from local storage
var HeroId = localStorage.getItem('about');

// console.log(HeroId);
const base_api = "https://www.superheroapi.com/api.php/";
const api_key = "2184578135021546";

onload();

function onload(){

    const hero_url = base_api + api_key +"/"+ HeroId;
    console.log(hero_url);  

    //fetching the data from url
    fetch(hero_url)
        .then(res => res.json())
        .then(res => {
            console.log(res);


    //adding image to hero page div
    var elem = document.createElement("img");
    elem.setAttribute("src", res.image.url);
    console.log(res.image.url);
    document.getElementById("imagebox").appendChild(elem);
    
    //For power stats
    for (var key of Object.keys(res.powerstats)) {
        var div =document.createElement("div");
        var stat = document.createTextNode(key + "    :    " + res.powerstats[key])
        div.appendChild(stat);
        document.getElementById("power").appendChild(div);
    }
    //biography
    for (var key of Object.keys(res.biography)) {
        var div =document.createElement("div");
        var stat = document.createTextNode(key + "    :    " + res.biography[key])
        div.appendChild(stat);
        document.getElementById("biography").appendChild(div);

    }
    //appearance
    for (var key of Object.keys(res.appearance)) {
        var div =document.createElement("div");
        var stat = document.createTextNode(key + "    :    " + res.appearance[key])
        div.appendChild(stat);
        document.getElementById("appearance").appendChild(div);

    }
    //work
    for (var key of Object.keys(res.work)) {
        var div =document.createElement("div");
        var stat = document.createTextNode(key + "    :    " + res.work[key])
        div.appendChild(stat);
        document.getElementById("work").appendChild(div);

    }
    //connections
    for (var key of Object.keys(res.connections)) {
        var div =document.createElement("div");
        var stat = document.createTextNode(key + "    :    " + res.connections[key])
        div.appendChild(stat);
        document.getElementById("connections").appendChild(div);

    }

        })
}