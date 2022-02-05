let latestVersion = document.getElementById("latestVersion");
let latestDate = document.getElementById("latestDate");
let latestSize = document.getElementById("latestSize");
let latestOS = document.getElementById("latestOS");
let latestOSVersion = document.getElementById("latestOSVersion");

var req = new XMLHttpRequest();		  // XMLHttpRequest オブジェクトを生成する
  req.onreadystatechange = function() {		  // XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
    if(req.readyState == 4 && req.status == 200){ // サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合
      jsonReport = req.responseText;		          // 取得した JSON ファイルの中身を表示
    }
  };
  req.open("GET", "https://raw.githubusercontent.com/userlifeline/JTIViewerHP/master/versionList.json", false); // HTTPメソッドとアクセスするサーバーの　URL　を指定
  req.send(null);					    // 実際にサーバーへリクエストを送信

const jsonObj = JSON.parse(jsonReport);

console.log(jsonObj);

console.log(jsonObj[0].version);

latestVersion.textContent = jsonObj[0].version;
latestDate.textContent = jsonObj[0].releaseDate;
latestSize.textContent = jsonObj[0].size;
latestOS.textContent = jsonObj[0].OS;
latestOSVersion.textContent = jsonObj[0].OSVersion;

console.log("All Process End");