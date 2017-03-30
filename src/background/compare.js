;var NECTARINE = (function (myModel) {
    console.log("NECTARINE ==> compare.js");
    
    "use strict";
    

    myModel.findSimilaritiesURL = function(URL, regx){
    
        regx = new RegExp(regx.join('|'), "i");
        
        if(regx.test(URL)){
            return [true, URL]
        }else{ 
            return [false, URL]
        }
    };
    
    myModel.findSimilaritiesHTML = function(HTML, regx){
        return true;
    };
    
    return myModel;
    
}(NECTARINE || {}));

//NECTARINE.findSimilaritiesURL("https://www.google.ru/", ["google", "habrahabr", "kinogo"])