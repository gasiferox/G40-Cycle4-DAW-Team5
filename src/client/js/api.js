const API_URL = 'http://localhost:7500/api'

$.get(API_URL, function(res) {
    console.log(res)
}, 'json')