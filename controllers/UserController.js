const axios = require('axios')

const baseURL = 'https://ipgeolocation.abstractapi.com/v1'

const getUserData = async(req, res) => {
    try{
        const response = await axios.get(`${baseURL}/?api_key=${process.env.LOCATION_KEY}`)
        // const resWithIp = await axios.get(`${baseURL}/?api_key=${process.env.LOCATION_KEY}?ip_address=${response.data.ip_address}`)
        // console.log(resWithIp)
        res.status(200).json({ 
            client_ip: response.data.ip_address,
            location: response.data.city,
            greeting: `Hello, ${req.query.visitor_name}!, the temperature is 11 degrees Celcius in ${response.data.city}` 
        })
    }catch(error){
        console.log(error)
        return res.status(400).json({ error: error })
    }

}

module.exports = {
    getUserData,
}
