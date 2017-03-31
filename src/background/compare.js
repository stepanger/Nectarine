;var NECTARINE = (function (myModel) {
    console.log("NECTARINE ==> compare.js");
    
    "use strict";
    
    /**
     * findSimilaritiesURL
     *
     * NECTARINE.findSimilaritiesURL("https://www.google.ru/", ["google", "kinogo"])
     *
     * Поиск значения в URL страници
     * @param {URL}  String Адрес страници
     * @param {regx} Arrya Массив для сравнения в адресе страници 
     * @return [bool, URL]
    */
    
    myModel.findSimilaritiesURL = function(URL, regx){
    
        regx = new RegExp(regx.join('|'), "i");
        
        if(regx.test(URL)){
            return [true, URL]
        }else{ 
            return [false, URL]
        }
    };
    
    /**
     * findSimilaritiesHTML
     *
     * NECTARINE.findSimilaritiesHTML("<h1>google</h1>", ["google", "kinogo"])
     * 
     * Поиск значения в HTML страници
     * @param {HTML} String Текст страници
     * @param {regx} Arrya Массив для сравнения текста страници 
     * @return bool
    */
    
    myModel.findSimilaritiesHTML = function(HTML, regx){
        
        HTML = HTML.replace(/\s{2,}/g, '');

        regx = new RegExp(regx.join('|'), "ig");
        
        if(regx.test(HTML)){
            return true;
        }
        
        return false;
    };
    
    return myModel;
    
}(NECTARINE || {}));