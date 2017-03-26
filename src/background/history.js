
var setting = [
    /google/i,
    /habrahabr/i,
    /kinogo/i
];

var setting_lenght = setting.length - 1;

chrome.history.onVisited.addListener(function(results){
   
    var URR = results.url;
    
    for (var i = 0; i <= setting_lenght; i++) {
        if(setting[i].test(URR)){
            console.log("sendMesage.js ➤ TRUE ➤ " + URR);
            chrome.history.deleteUrl({url: URR}, function(){
                console.info("sendMesage.js ➤ DELETE TRUE ➤ ", URR);
            });
        }else{
            console.log("sendMesage.js ➤ FALSE ➤ onMessage ➤" + URR);
        }
    }
})