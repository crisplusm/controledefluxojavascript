//API  
var avengers = ['Tony Stark', 'Clint Barton', 'Steve Rogers', 'Natasha Romanoff', 'Bruce Banner' , 'Scot Lang']

function listarVingadores() {

    var ul = document.getElementById('avengers')
    ul.innerHTML = ''

    avengers.forEach(function (a) {

        var li = document.createElement('li')
        var text = document.createTextNode(a)
        li.appendChild(text)
        ul.appendChild(li)

    })

}







