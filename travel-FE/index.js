

const request = require('request');

const BE_URL = 'http://localhost:3000/api';

const newClient = {
    "firstname": "N",
    "lastname": "L"
}

const saveData = (url, data) => {
    return new Promise((resolve, reject) => {
        request.post({
            url: url,
            form: data
        }, (err, response, body) => {
            if(err){
                reject(err)
            }
            resolve(body)
        })
    })
}
//POST
const CLIENT_API = `${BE_URL}/clients`;

saveData(CLIENT_API, newClient)
    .then((resp) => {
        console.log(resp)
    }).catch((err) => {
        console.log(err)
    })

const clientAdded = saveData(CLIENT_API, newClient)
clientAdded.then((resp) => {
    console.log(resp)
})
// request.post({
//     url: CLIENT_API, 
//     form: newClient
//     },(err, response, body) => {
//         console.log(body)
//         // console.log(err)
        
// })

//GET
const client2 = `${CLIENT_API}/2`

// request.get(client2, (err, response, body) => {
//     console.log(body)
// })