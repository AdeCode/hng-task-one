const axios = require('axios')

const locationRL = 'https://ipgeolocation.abstractapi.com/v1'
const weatherAPIKey = "fc8df2ac1063bf50b0de268a5564e492";

const showData = async(req, res) => {
    // const response = await axios.get(`https://ipapi.co/json/`)
    // console.log('from show socket:',req.connection.remoteAddress)
    const clientIp = 
        req.headers['cf-connecting-ip'] ||
        req.headers['x-real-ip'] || 
        req.headers['x-forwarded-for'] ||
        req.socket.remoteAddress || '';
    console.log('real ip: ', clientIp)
    const response = await axios.get(`https://ipapi.co/${clientIp}/json`)
    // console.log('two: ', responseTwo)
    res.status(200).json({
        loc_key:process.env.LOCATION_KEY,
        ip:response.data.ip,
        location:response.data.city,
        clientIp
    })
}

const getUserData = async(req, res) => {
    try{
        const clientIp = 
        req.headers['cf-connecting-ip'] ||
        req.headers['x-real-ip'] || 
        req.headers['x-forwarded-for'] ||
        req.socket.remoteAddress || '';
        // const response = await axios.get(`https://ipapi.co/json/`)
        const response = await axios.get(`https://ipapi.co/${clientIp}/json`)

        // console.log('new: ', response)
        // const response = await axios.get(`${locationRL}/?api_key=${process.env.LOCATION_KEY}`)

        // const getWeather = await axios.get(
        //     `https://api.openweathermap.org/data/2.5/weather?q=${response.data.city}&appid=${weatherAPIKey}&units=metric`
        //   );

        // const temp = Math.round(getWeather.data.main.temp)
        const temp = 26
        res.status(200).json({ 
            client_ip: response.data.ip,
            location: response.data.city,
            // greeting: `Hello, ${req.query.visitor_name}!, the temperature is ${temp} degrees Celcius in ${response.data.city}` 
            greeting: `Hello, ${req.query.visitor_name}!, the temperature is ${temp} degrees Celcius in ${response.data.city}` 
        })

    }catch(error){
        console.log(error)
        return res.status(400).json({ error: error })
    }

}

module.exports = {
    getUserData,
    showData
}
