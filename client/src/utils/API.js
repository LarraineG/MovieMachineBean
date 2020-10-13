const APIKey = "5a3f3373b8ebcad2db18450af15ec4fd";
    const searchCall=function(search){var queryURL = "https://api.themoviedb.org/3/search/movie?api_key=5a3f3373b8ebcad2db18450af15ec4fd&language=en-US&query="+search+"&page=1&include_adult=false";
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response){
                console.log(response);
                var moviesarray=response.results.map(arrfunc);
                function arrfunc(mov){
                    var movobj={
                        title:mov.title,
                        date:mov.release_date,
                        summary:mov.overview,
                        id:mov.id,
                        poster:"https://image.tmdb.org/t/p/w200"+mov.poster_path
                    }
                        return(movobj);
                }
                console.log(moviesarray);
            });}
        
    const idCall=function(id){
        var queryURL="https://api.themoviedb.org/3/movie/"+id+"?api_key=5a3f3373b8ebcad2db18450af15ec4fd&language=en-US&append_to_response=credits,external_ids"
        $.ajax({
            url:queryURL,
            method:"GET"
        }).then(function(response){
            console.log(response);
            var dirObj=response.credits.crew.filter(x=> x.department=="Directing");
            var cast="";
            for(i=0;i<3&&i<response.credits.cast.length;i++){
                if (cast.length>1){
                    cast+=(", ")
                }
                cast+=(response.credits.cast[i].name);
            }
            console.log(cast)
            
            var movObj={
                title:response.title,
                year:response.release_date.substring(0,4),
                director:dirObj[0].name,
                cast:cast,
                runtime:response.runtime,
                summary:response.overview,
                posterUrl:"https://image.tmdb.org/t/p/w600_and_h900_bestv2"+response.poster_path,
                id:id
            }
            return(movObj);
        });
    }
    const utellyCall=function(id){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?country=us&source_id="+id+"&source=tmdb",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
                "x-rapidapi-key": "9b41398bccmsh054a4c1235dff30p1c1836jsn95542e375cf5"
            }
        }
        
        $.ajax(settings).done(function (response) {
            console.log(response);
            var utellyobj=response.collection.locations;
            return(utellyobj);
        });

    }
    module.exports={
        idCall:idCall,
        utellyCall:utellyCall
        ,searchCall:searchCall
    };