import axios from 'axios'
export default {
    getData: () =>
    axios({
        'method':'GET',
        'url':'https://jsonplaceholder.typicode.com/photos?_limit=10',
        // 'headers': {
        //     'content-type':'application/octet-stream',
        //     'x-rapidapi-host':'example.com',
        //     'x-rapidapi-key': process.env.RAPIDAPI_KEY
        // },
        // 'params': {
        //     _limit: 10
        // },
    })
}