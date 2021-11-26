window.addEventListener('load', function (e) {

    const urll = 'https://jsonplaceholder.typicode.com/users'
  
    const photo = 'https://jsonplaceholder.typicode.com/photos'
    const todo = 'https://jsonplaceholder.typicode.com/todos'

    const btn = document.querySelector('.btn');

    const button1 = document.querySelector('.but1');

    const button2 = document.querySelector('.but2');

    btn.addEventListener('click', () => {

        const sendXHR = () => {

            return new Promise((resolve, reject) => {

                const xhr = new XMLHttpRequest() 
                
                xhr.open('GET', urll) 

                xhr.onload = function () {

                    if (xhr.status === 200) {

                        resolve(JSON.parse(xhr.response))

                    } else {

                        reject('there is an error')
                    }
                }
                xhr.send()
            })
        }

        sendXHR().then((data) => {
            data.map((user) => {
                let div = document.createElement('div');

                div.innerHTML = `<div">
                <p>
                   <span> Name :</span>${user.name} <br> 
                   <span> Username :</span>${user.username} <br> 
                   <span> Website :</span> http://www.${user.website} <br> 
                   <span> Company name :</span>${user.company.name} <br> 
                   <span> Email :</span>${user.email}<br> 
                   <span> City :</span> ${user.address.city} <br> 
                   <span> Street :</span> ${user.address.street}<br>  
                   <span> Phone :</span>${user.phone}

                </p> 
                </div>`
               
                document.querySelector('.div').appendChild(div)
            })
            console.log(data);
        }).catch((err) => {
            console.log(err);
        })
        btn.style.display = "none"
    })

    button1.addEventListener('click', () => {

        const sendXHR = () => {

            return new Promise((resolve, reject) => {

                const xhr = new XMLHttpRequest() 
                
                xhr.open('GET', photo) 

                xhr.onload = function () {

                    if (xhr.status === 200) {

                        resolve(JSON.parse(xhr.response))

                    } else {

                        reject('there is an error')
                    }
                }
                xhr.send()
            })
        }

        sendXHR().then((data) => {
            data.map((photos) => {
                let div = document.createElement('div');

                div.innerHTML = ` <p><span>SARLAVHA </span> ${photos.title}, <br> <img src="${photos.url}" alt=""> </p> `
               
                document.querySelector('.photo').appendChild(div)
            })
            console.log(data);
        }).catch((err) => {
            console.log(err);
        })
        button1.style.display = 'none'
    })
    button2.addEventListener('click', () => {

        const sendXHR = () => {

            return new Promise((resolve, reject) => {

                const xhr = new XMLHttpRequest() 
                
                xhr.open('GET', todo) 

                xhr.onload = function () {

                    if (xhr.status === 200) {

                        resolve(JSON.parse(xhr.response))

                    } else {

                        reject('there is an error')
                    }
                }
                xhr.send()
            })
        }

        sendXHR().then((data) => {
            data.map((todos) => {
                let div = document.createElement('div');

                div.innerHTML = `<div>

                 <p><span>Title :</span>${todos.title}</p> 

                <h3><span>Complited :</span> ${todos.completed}</h3>
                <h3><span>id :</span> ${todos.id}</h3>
               
                 </div>`
                
               
                document.querySelector('.todoo').appendChild(div)
            })
            console.log(data);
        }).catch((err) => {
            console.log(err);
        })
        button2.style.display = 'none'
    })



});
