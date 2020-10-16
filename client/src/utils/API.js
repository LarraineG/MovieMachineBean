import axios from "axios";

const APIKey = "5a3f3373b8ebcad2db18450af15ec4fd";
    const searchCall=function(search){
    var queryURL = "https://api.themoviedb.org/3/search/movie?api_key=5a3f3373b8ebcad2db18450af15ec4fd&language=en-US&query="+search+"&page=1&include_adult=false";
            return(axios.get(queryURL));
    }  
    const idCall=function(id){
        var queryURL="https://api.themoviedb.org/3/movie/"+id+"?api_key=5a3f3373b8ebcad2db18450af15ec4fd&language=en-US&append_to_response=credits,external_ids"
        return(axios.get(queryURL));
    }

    const getFact= function(fact) {
        return axios.get("/api/fact");
        }
    
    const utellyCall=function(id){
        
        axios({
            "method":"GET",
            "url":"https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
            "x-rapidapi-key":"9b41398bccmsh054a4c1235dff30p1c1836jsn95542e375cf5",
            "useQueryString":true
            },"params":{
            "country":"us",
            "source_id":id,
            "source":"tmdb"
            }
            })
            .then((response)=>{
                console.log(response)
                var utellyobj=response.collection.locations;
            return(utellyobj);
            })
            .catch((error)=>{
                console.log(error)
            })
    
    }
    export default{
        idCall:idCall,
        utellyCall:utellyCall,
        searchCall:searchCall,
        getFact
    };