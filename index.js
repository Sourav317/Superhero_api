const base_api = "https://www.superheroapi.com/api.php/";
const api_key = "2184578135021546";


function run()
{
    var Search_name = document.getElementById('search_box').value;
    const api_url = base_api + api_key +"/search/"+ Search_name;
    console.log(api_url); 
    
    //fetching the JSON
    fetch(api_url)
        .then(res => res.json())
        .then(res => {
            console.log(res); 

            var size = res.results.length;

            var clone_item = document.getElementById("temp");
            for(let i=0;i<size;i++)
            {
            //adding data to template from the response
            var card = clone_item.content.cloneNode(true);
            card.getElementById("name").innerHTML = 'Name : ' + res.results[i].name;
            card.getElementById("hero_id").innerHTML = 'Id : ' + res.results[i].id;
            card.getElementById("add_img").children[0].src = res.results[i].image.url;
            card.getElementById("race").innerHTML = 'Race : ' + res.results[i].appearance.race;
            card.getElementById("occu").innerHTML = 'Gender : ' + res.results[i].appearance.gender;
            
            //adding event listeners to all the data-fields
            card.getElementById("name").addEventListener('click',function(){
                localStorage.setItem('about',res.results[i].name);
                window.location.assign('./superhero_info.html');
            });
            card.getElementById("hero_id").addEventListener('click',function(){
                localStorage.setItem('about',res.results[i].name);
                window.location.assign('./superhero_info.html');
            });
            card.getElementById("add_img").children[0].addEventListener('click',function(){
                localStorage.setItem('about',res.results[i].name);
                window.location.assign('./superhero_info.html');
            });
            card.getElementById("race").addEventListener('click',function(){
                localStorage.setItem('about',res.results[i].name);
                window.location.assign('./superhero_info.html');
            });
            card.getElementById("occu").addEventListener('click',function(){
                localStorage.setItem('about',res.results[i].name);
                window.location.assign('./superhero_info.html');
            });

            //adding card to favourites
            // card.getElementById("fav").children[0].addEventListener('click',function(){
            //     var index = localStorage.length;
            //    var data = JSON.stringify(response.results[i]);
            //     localStorage.setItem(index,data);
            // });

            //appending everything
            document.getElementById("outer").appendChild(card);
            
            }


        })
}

