//not async
// let request = new XMLHttpRequest()
// request.open('GET','ajax.txt',false)
// request.send()
// if(request.status === 200)
// {
//     console.log(request)
//     document.write(request.responseText)
// }

//async true

// let request = new XMLHttpRequest()
// request.open('GET','ajax.txt')
// request.onreadystatechange = function()
// {
//     if(request.readyState === 4 && request.status === 200)
//     {
//         console.log(request)
//         let modify = document.getElementById('update')
//         modify.innerHTML = request.responseText
//     }else
//     {
//         console.log("error")
//     }
// }
// request.send()


//tagname 
// let request = new XMLHttpRequest()
// request.open('GET', 'data.xml')
// request.onreadystatechange = function () {
//     if (request.readyState === 4 && request.status === 200) {
//         console.log(request)
//         let modify = document.getElementsByTagName('ul')[1].getElementsByTagName('li')
//         for (let i = 0; i < modify.length; i++) {
//             modify[i].innerHTML = request.responseText
//             modify[i].innerHTML = request.responseText
//             modify[i].style.color = 'violet'
//             modify[i].style.backgroundColor = 'black'
//             modify[i].style.padding = '10px'
//             modify[i].style.borderRadius = '20px'
//             modify[i].style.textAlign = 'center'
//             modify[i].style.marginBottom = '10px'
//             let style2 = document.getElementsByTagName('ul')[1]
//             style2.style.listStyleType = 'dotted'
//         }
//     }
// }
// request.send()


//xml
// let request = new XMLHttpRequest()
// request.open('GET', 'data.xml')
// request.onreadystatechange = function () {
//     if (request.readyState === 4 && request.status === 200) {
//         let items = request.responseXML.getElementsByTagName('name')
//         let output = "<ul>"
//         for (let i = 0; i < items.length; i++) {
//             output += "<li>" + items[i].firstChild.nodeValue + "</li>"
//         }
//         output += "</ul>"
//         let result = document.getElementById('upgrade')
//         result.innerHTML = output, result.style.color = "darkorange", result.style.backgroundColor = "black",result.style.display = "inline-block",result.style.padding = "0 10px",result.style.borderRadius = "10px"
//     }
// }
// request.send()
// let showAjax = document.getElementById('load')
// showAjax.addEventListener('click',loadAjax)

// function loadAjax() {
//     let jsonRequest = new XMLHttpRequest()
//     jsonRequest.open('GET', 'data.json')
//     jsonRequest.onreadystatechange = function () {
//         if (jsonRequest.readyState === 4 && jsonRequest.status === 200) {
//             let items = JSON.parse(jsonRequest.responseText)
//             let output = "<ul>"
//             for (let key in items) {
//                 // console.log(items[key]);
//                 output += "<li>" + items[key].name + " | " + items[key].age + "</li>"
//             }
//             output += "</ul>"
//             document.getElementById('upgrade').innerHTML = output
//         }
//     }
//     jsonRequest.send()
// }
let showJson = document.getElementById('load')
showJson.addEventListener('click', loadAjax)
function loadAjax() {

    let request = new XMLHttpRequest()
    request.open('GET', 'data.json')
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request)
            let items = JSON.parse(request.responseText)
            let output = "<ul>"
            for (let key in items) {
                output += "<li>" + items[key].name + " | " + items[key].age + "</li>"
            }
            output += "</ul>"
            document.getElementById('upgrade').innerHTML = output
        }
        else {
            let erroMessage = document.getElementById('error')
            erroMessage.innerHTML = "error! we couldn't load the ajax!"
            erroMessage.style.color = "red", erroMessage.style.fontSize = "24px"
        }
    }
    request.send()
}
