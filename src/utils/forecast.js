const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/3940daa9256854f5dbbfe2ed40559986/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si'
    request({url, json:true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to forecast service', undefined)
        }else if(body.error){
            callback('Unable to find location')
        }else{
            const temp = body.currently.temperature
            const rainChance = body.currently.precipProbability
            callback(undefined, body.daily.data[0].summary + " It is currently " + temp + " degrees out with a " + rainChance + "%" +" chance of rain.")
        }
    })


}

module.exports = forecast