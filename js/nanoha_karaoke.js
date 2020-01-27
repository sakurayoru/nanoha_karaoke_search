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


window.onload=function(){
    URL="https://nanoha-karaoke-search.netlify.com/"
    TITLE="機種別なのは楽曲リスト表示システム"
    URL+="?openExternalBrowser=1"
    twitter="https://twitter.com/intent/tweet"+
    `?text=${TITLE}%0A`+
    `&url=${URL}`+
    "&original_referer=https://twitter.com/share"+
    `?text=${TITLE}%0A`+
    `&url=${URL}`
    FB="https://www.facebook.com/share.php"+
    `?u=${URL}`
    LINE="https://social-plugins.line.me/lineit/share"+
    `?text=${TITLE}%0A&url=${URL}`
    hatena="https://b.hatena.ne.jp/entry/panel/?mode="+
    `confirm&title${TITLE}%0A&url=${URL}`

    share="<a href='"+
    `${twitter}'>Twitter</a>　<a href='`+
    `${FB}'>FaceBook</a>　<a href='`+
    `${LINE}'>LINE</a>　<a href='`+
    `${hatena}'>hatena</a>`
    document.getElementById("top-share").innerHTML=share
    document.getElementById("buttom-share").innerHTML=share
}