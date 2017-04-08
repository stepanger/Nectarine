;var HISTORY = (function (myModel) {
    console.log("HISTORY ==> history.js");
    
    "use strict";
    

    /**
    * visitPage
    *
    * HISTORY.visitPage(function(results){console.log(results)}) //http://url.com
    *
    * Наблюдать за историей браузера
    * @param {callback}  function(results){}
    * @return [callback]
    */
    myModel.visitPage = function(callback){
        
        chrome.history.onVisited.addListener(function(results){
            callback(results.url);
        })

    };
    
    /**
    * deleteUrl
    *
    * HISTORY.deleteUrl("http://url.com", function(){})
    *
    * Удаляет url из истории
    * @param {urlPage}  String адрес страници
    * @param {callback}  function(){}
    * @return [callback]
    */
    myModel.deleteUrl = function(urlPage, callback){
        chrome.history.deleteUrl({url: urlPage}, function(){
            callback();
        });
    }
    
    return myModel;
    
}(HISTORY || {}));

HISTORY.deleteUrl("http://url.com", function(){})






/*
var setting = [
    /google/i,
    /habrahabr/i,
    /kinogo/i
];

var setting_lenght = setting.length - 1;

chrome.history.onVisited.addListener(function(results){
   
    var URR = results.url;
    
    for (var i = 0; i <= setting_lenght; i++) {
        if(/google|habrahabr|kinogo/i.test(URR)){
            console.log("sendMesage.js ➤ TRUE ➤ " + URR);
            chrome.history.deleteUrl({url: URR}, function(){
                console.info("sendMesage.js ➤ DELETE TRUE ➤ ", URR);
            });
        }else{ 
            console.log("sendMesage.js ➤ FALSE ➤ onMessage ➤" + URR);
        }
    }
})
*/