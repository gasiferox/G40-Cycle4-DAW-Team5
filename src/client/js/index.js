//const API_URL = 'http://localhost:7500/api'

const HTMLResponse = document.querySelector('#app')
const tpl

fetch('&{API_URL}/users').then((res) => res.json()).then((users) => {
    const tpl = users.map((user) => '<li>${user.name} ${user.email}</li>')
    HTMLResponse.innerHTML = '<ul>${tpl}</ul>'
})

/* const xhr = new XMLHttpRequest()

function onRequestHandler() {
    if (this.readyState == 4 && this.status == 200) {
        // 0 = UNSET, no se ha llamado al metodo open
        // 1 = OPEND, se ha llamado al metodo open
        // 2 = HEADERS_RECEIVED, se esta llamando al método send()
        // 3 = LOADING, esta cargando, es decir, esta recibiendo la respuesta
        // 4 = DONE, se ha completado la operacion
        console.log(this.response)
    }
}

xhr.addEventListener('load', onRequestHandler)

xhr.open('GET', '${API_URL}/users')

xhr.send() */