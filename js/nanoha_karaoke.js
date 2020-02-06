var requestURL = '../json/nanoha_song.json'
var request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send()

function JOYID(i){
    result=request.response[i]
    joyno = `${result.song_name}の選曲Noリストです。\n`
    if (result.JOYpersonal) {
        joyno += `本人映像\n`
        joyno += `${result.JOYpersonal}\n`
    }
    if (result.JOYstandard){
        joyno += `スタンダード\n`
        joyno += `${result.JOYstandard}\n`
    }
    if (result.JOYguiter){
        joyno += `ギタナビ\n`
        joyno += `${result.JOYguiter}\n`
    }
    if (result.JOYhome) {
        joyno += `家庭用カラオケ\n`
        joyno += `${result.JOYhome}\n`
    }
    joyno += `\n${result.song_name}の詳細ページに移動しますか?`
    joyurl=`https://www.joysound.com/web/search/song/${result.JOYURL}`
    if (window.confirm(joyno)) {
        window.open(joyurl)
  }
}

function DAMID(i){
    result=request.response[i]
    damno = `${result.song_name}のリクエストNoです。\n`
    damno += `${result.DAMrequest}\n`
    damno += `\n${result.song_name}の詳細ページに移動しますか?`
    damurl=`https://www.clubdam.com/app/leaf/songKaraokeLeaf.html?contentsId=${result.DAMURL}`
    if (window.confirm(damno)) {
        window.open(damurl);
  }
}

function song_button(){
    let id="",use="",ok="",l=0
    var result = request.response
    id =document.getElementById("device").selectedIndex
    var nor = Object.keys(result).length
    for (let i = 0; i < nor; i++) {
        const j = result[i].use // use 取り出し
        let k = j.match(/.{1}/g) // 1桁区切り
        if (k[id] == 1) {
            if (j=="1111111111111111111111111111") {
                ok += "<h3>"
                ok += result[i].song_name
                ok += "</h3>"
            } else {
                ok += "<div class='mb1'>"
                ok += result[i].song_name
                ok += "<br>"
                ok += result[i].artist_name
                
                if(result[i].JOYURL || result[i].DAMURL){
                    ok+= "<br>"
                }
                
                if (result[i].JOYURL) {
                    ok += `<button onclick="JOYID(${i})">JOYSOUND</button>`
                }
                if(result[i].JOYURL && result[i].DAMURL){
                    ok+= "　"
                }
                if(result[i].DAMURL) {
                    ok += `<button onclick="DAMID(${i})">DAM</button>`
                }
                ok+= "</div>"
            }
        }
        document.getElementById("songs").innerHTML = ok
    }
}

window.onload=function(){
    URL="https://nanoha-karaoke-search.netlify.com/"
    TITLE="機種別なのは楽曲リスト表示システム"
    twitter="https://twitter.com/intent/tweet"+
    `?text=${TITLE}%0A`+
    `&url=${URL}`+
    "&original_referer=https://twitter.com/share"+
    `?text=${TITLE}%0A`+
    `&url=${URL}`
    FB="https://www.facebook.com/share.php"+
    `?u=${URL}`
    hatena="https://b.hatena.ne.jp/entry/panel/?mode="+
    `confirm&title${TITLE}%0A&url=${URL}`
    URL+="?openExternalBrowser=1"
    LINE="https://social-plugins.line.me/lineit/share"+
    `?text=${TITLE}%0A&url=${URL}`

    share="<a href='"+
    `${twitter}'>Twitter</a>　<a href='`+
    `${FB}'>FaceBook</a>　<a href='`+
    `${hatena}'>hatena</a>　<a href='`+
    `${LINE}'>LINE</a>`
    document.getElementById("top-share").innerHTML=share
    document.getElementById("buttom-share").innerHTML=share
}