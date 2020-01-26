var requestURL = '../json/nanoha_song.json'
var request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send()

function song_button(){
    let id="",use="",ok=""
    var result = request.response
    id =document.getElementById("device").selectedIndex
    var result = request.response
    var nor = Object.keys(result).length
    for (let i = 0; i < nor; i++) {
        const j = result[i].use // use 取り出し
        let k = j.match(/.{1}/g) // 1桁区切り
        if (k[id] == 1) {
            ok += result[i].song_name
        }
        document.getElementById("songs").innerHTML = ok
    }
}