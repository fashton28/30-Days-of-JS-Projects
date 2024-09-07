const key = '1PXQx6HYtaeTNqyt0ATMW4TrUvBIsBsZ'

// create async function

const getCity = async (city) => {

    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`
    
    const response = await fetch(base+query)

    const data = await response.json();
    return(data[0].Key)

}

const getWeather = async (code) => {
    const base = `http://dataservice.accuweather.com/currentconditions/v1/${code}`;
    const query = `?apikey=${key}`
    const response = await fetch(base+query)
    const data = await response.json()
    return (data[0].Temperature.Metric.Value);
}


const form = document.querySelector("form");
const temp = document.getElementById("temp")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
        getCity(form.city.value.trim()).then(data =>{
            getWeather(data).then(result =>{
                temp.innerHTML = `${result}`
            })
        }).catch(err=>{
            console.log("Could not fetch")
        })

        form.reset()






    
        
    
    
})
