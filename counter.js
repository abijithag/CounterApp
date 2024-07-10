let count = 0
let counterCount = 0

let totalCount_text = document.getElementById('counter-h3')

let save_Count = document.getElementById("total-count")


function increment() {
    count++
    let getCount = count

    totalCount_text.innerHTML = getCount
    getCount >= 0 ? totalCount_text.style.color = 'green' : totalCount_text.style.color = 'red'
}


function decriment(){
    count--
    let getCount = count
   totalCount_text.innerHTML = getCount
    getCount >= 0 ? totalCount_text.style.color = 'green' : totalCount_text.style.color = 'red'

}


function save(){
 counterCount++
 getCount = counterCount
 let counterText =`COUNT ${getCount}:`
 save_Count.innerHTML+= counterText + totalCount_text.innerHTML + ""+"<br />";

}

function reset(){
    count = 0
    counterCount = 0
    totalCount_text.innerHTML = count
    save_Count.innerHTML = ""
    totalCount_text.style.color = 'black'
}

