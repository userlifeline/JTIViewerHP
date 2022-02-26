let latestVersion = document.getElementById("latestVersion");
let latestDate = document.getElementById("latestDate");
let latestSize = document.getElementById("latestSize");
let latestOS = document.getElementById("latestOS");
let latestOSVersion = document.getElementById("latestOSVersion");
let latestDownload = document.getElementById("latestDownload");

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

var latestInfo = jsonObj[jsonObj.length - 1];

console.log(latestInfo.version);
console.log(latestInfo.OS)

latestVersion.textContent = latestInfo.version;
latestDate.textContent = latestInfo.releaseDate;
latestSize.textContent = latestInfo.size;
latestOS.textContent = latestInfo.OS;
if (latestInfo.OS == "Windows7+")
{
  var winIconElement = document.createElement('i');
  winIconElement.className = "fab fa-windows";
  winIconElement.style.cssText = "color: #00AFF0; margin-right: .5em";
  latestOS.prepend(winIconElement);
}
latestOSVersion.textContent = latestInfo.OSVersion;
latestDownload.href = latestInfo.link;
latestDownload.target = "_blank";
latestDownload.rel = "noopener noreferrer";

var oldVersionList = jsonObj.splice(0, jsonObj.length - 1);

console.log(oldVersionList);

var image_style = "margin-right: .2em;";

oldVersionList.forEach(i => {

  var headerElements = document.createElement('tr');
    var header_version = document.createElement('th');
      header_version.className = "header";
      header_version.textContent = "バージョン";
      var header_version_i = document.createElement('i');
        header_version_i.className = "fas fa-layer-group";
        header_version_i.style.cssText = image_style;
        header_version.prepend(header_version_i);
    var header_release = document.createElement('th');
      header_release.className = "header";
      header_release.textContent = "リリース日";
      var header_release_i = document.createElement('i');
        header_release_i.className = "fas fa-calender-day";
        header_release_i.style.cssText = image_style;
        header_release.prepend(header_release_i);
    var header_size = document.createElement('th');
      header_size.className = "header";
      header_size.textContent = "容量";
      var header_size_i = document.createElement('i');
        header_size_i.className = "fas hdd";
        header_size_i.style.cssText = image_style;
        header_size.prepend(header_size_i);
    var header_OS = document.createElement('th');
      header_OS.className = "header";
      header_OS.textContent = "対応OS";
      var header_OS_i = document.createElement('i');
        header_OS_i.className = "fas fa-cogs";
        header_OS_i.style.cssText = image_style;
        header_OS.prepend(header_OS_i);
    var header_OSVersion = document.createElement('th');
      header_OSVersion.className = "header";
      header_OSVersion.textContent = "対応OSバージョン";
      var header_OSVersion_i = document.createElement('i');
        header_OSVersion_i.className = "fas fa-laptop";
        header_OSVersion_i.style.cssText = image_style;
        header_OSVersion.prepend(header_OSVersion_i);

    headerElements.appendChild(header_version);
    headerElements.appendChild(header_release);
    headerElements.appendChild(header_size);
    headerElements.appendChild(header_OS);
    headerElements.appendChild(header_OSVersion);

  var bodyElements = document.createElement('tr');
    bodyElements.className = "download-table-item";
    var body_version = document.createElement('td');
      body_version.className = "content";
      body_version.textContent = i.version;
    var body_release = document.createElement('td');
      body_release.className = "content";
      body_release.textContent = i.releaseDate;
    var body_size = document.createElement('td');
      body_size.className = "content";
      body_size.textContent = i.size;
    var body_OS = document.createElement('td');
      body_OS.className = "content";
      body_OS.textContent = i.OS;
      if (i.OS == "Windows7+")
      {
        var winIconElement = document.createElement('i');
        winIconElement.className = "fab fa-windows";
        winIconElement.style.cssText = "color: #00AFF0; margin-right: .5em";
        body_OS.prepend(winIconElement);
      }
    var body_OSVersion = document.createElement('td');
      body_OSVersion.className = "content";
      body_OSVersion.textContent = i.OSVersion;
    var body_install_Button = document.createElement('a');
      body_install_Button.className = "old-download-button old-download-button-border";
      body_install_Button.textContent = "Download";
      body_install_Button.href = i.link;
      body_install_Button.target = "_blank";
      body_install_Button.rel = "noopener noreferrer";
      var body_install_Button_i = document.createElement('i');
        body_install_Button_i.className = "link-color-none fas fa-download";
        body_install_Button_i.style.cssText = "margin-left: .5em;"
      body_install_Button.appendChild(body_install_Button_i);

    bodyElements.appendChild(body_version);
    bodyElements.appendChild(body_release);
    bodyElements.appendChild(body_size);
    bodyElements.appendChild(body_OS);
    bodyElements.appendChild(body_OSVersion);
    bodyElements.appendChild(body_install_Button);
  
  var base_table = document.getElementById('old-version-table');
  base_table.prepend(headerElements);
  headerElements.after(bodyElements);
});

console.log("All Process End");