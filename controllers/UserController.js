const axios = require('axios')

const locationRL = 'https://ipgeolocation.abstractapi.com/v1'
const weatherAPIKey = "fc8df2ac1063bf50b0de268a5564e492";

const getUserData = async(req, res) => {
    try{
        const response = await axios.get(`${locationRL}/?api_key=${process.env.LOCATION_KEY}`)
       
        const getWeather = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${response.data.city}&appid=${weatherAPIKey}&units=metric`
          );

        const temp = Math.round(getWeather.data.main.temp)
        res.status(200).json({ 
            client_ip: response.data.ip_address,
            location: response.data.city,
            greeting: `Hello, ${req.query.visitor_name}!, the temperature is ${temp} degrees Celcius in ${response.data.city}` 
        })

    }catch(error){
        console.log(error)
        return res.status(400).json({ error: error })
    }

}

module.exports = {
    getUserData,
}
