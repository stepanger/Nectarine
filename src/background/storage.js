;var CHROMESTO = (function (myModel) {
    
    console.log("CHROME ==> storage.js");
    
    "use strict";
    
    /*
    
    ***Пример***
    
    {
        "history": [
            "habr",
            "google"
        ]
    }
    
    */
    
    var chromeLocal = chrome.storage.local;
    
    
    /**
     * setStorage
     *
     * CHROMESTO.setStorage({"history": ["habr", "google"]}, function(){});
     *
     * Заносит значения в chrome.storage.local
     * @param {obj}  object (ключ: значение) записи
     * @return [callback]
    */
    myModel.setStorage = function(obj, callback){
        chromeLocal.set(obj, function(err) {
            if(err){
                console.info(err);
                return
            }
            callback();
        });
    };
    
    /**
     * getStorage
     *
     * CHROMESTO.getStorage("hictory and null", function(page){console.log(page)});
     *
     * получает значения из chrome.storage.local
     * @param {string}  string and null
     * @param {callback}  function(page)
     * @return [callback]
    */    
    myModel.getStorage = function(string, callback){
        chromeLocal.get(function(page) {
                
            if(string == null){
                callback(page);   
            }else{
                callback(page[string]);
            }
            
        });
    };
    
    /**
     * clearStorage
     *
     * CHROMESTO.clearStorage(function(){});
     *
     * Удаляет все значения из chrome.storage.local
     * @param {callback}  function(){}
     * @return [callback]
    */
    myModel.clearStorage = function(callback){
        chromeLocal.clear(callback);
    };
    
    /**
     * removeStorage
     *
     * CHROMESTO.removeStorage("history", function(){})
     *
     * Удаляет значениt по ключу из chrome.storage.local
     * @param {string}  ключ в записи
     * @param {callback}  function(){}
     * @return [callback]
    */
    myModel.removeStorage = function(key, callback){
        chromeLocal.remove(key, callback);
    };
    
    /**
     * memoryStorage
     *
     * CHROMESTO.memoryStorage(function(bytesInUse){console.log(bytesInUse)});
     *
     * Получает объем (в байтах), используемый в chrome.storage.local
     * @param {callback}  function(bytesInUse){}
     * @return [callback]
    */
    myModel.memoryStorage = function(callback){
        chromeLocal.getBytesInUse(function(bytesInUse){
            callback(bytesInUse);
        })
    };
    
    /**
     * onChangeStorage
     *
     * CHROMESTO.onChangeStorage(function(){})
     *
     * Выполняется при изменении в chrome.storage.local
     * @param {callback}  function(){}
     * @return [callback]
    */
    myModel.onChangeStorage = function(callback){
        chrome.storage.onChanged.addListener(function(){
            callback();
        })
    }
    
    return myModel
    
}(CHROMESTO || {}));