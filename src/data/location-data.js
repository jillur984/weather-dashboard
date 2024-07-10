const data = [
    {
        location: "London",
        latitude: 51.5073219,
        longitude: -0.1276474,
    },
    {
        location: "Kolkata",
        latitude: 22.5726723,
        longitude: 88.3638815,
    },
    {
        location: "Dhaka",
        latitude: 23.777176,
        longitude: 90.399452,
    },
    {
        location: "Singapore",
        latitude: 1.2899175,
        longitude: 103.8519072,
    },
    {
        location: "New York",
        latitude: 40.7127281,
        longitude: -74.0060152,
    },
    {
        location: "Toronto",
        latitude: 43.6534817,
        longitude: -79.3839347,
    },
    {
        location: "Mymensingh",
        latitude: 24.743448,
        longitude: 90.398384, 
    }
];

function getLocation(){
    return data
}

function getLocationByName(location){
     if(!location) return null

     const filteredData=data.filter((item)=>item.location===location)

     if(filteredData.length>0){
        return filteredData[0]
     }
     else{
        const defaultLocation={
            location:"",
           latitude:0,
            longitude:0
        }

        return defaultLocation
     }
}
export {getLocationByName,getLocation}
