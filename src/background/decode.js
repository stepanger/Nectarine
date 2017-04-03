;var NECTARINE = (function (myModel) {
    console.log("NECTARINE ==> decode.js");
    
    "use strict";
    
   /**
    * utf8ToB64
    *
    * NECTARINE.utf8ToB64("privet") // cHJpdmV0
    *
    * Кодирование строки в base-64
    * @param {str}  String Строка для кодирования
    * @return [String]
    */
    
    myModel.utf8ToB64 = function(str){
    
        return btoa(unescape(encodeURIComponent(str)));
        
    };
    
   /**
    * b64ToUtf8
    *
    * NECTARINE.b64ToUtf8("cHJpdmV0") // privet
    *
    * Декодирование строки в utf8
    * @param {str}  String Строка для Декодирования
    * @return [String]
    */
    myModel.b64ToUtf8 = function(str){
        
        return decodeURIComponent(escape(atob(str)));

    };
    
    return myModel;
    
}(NECTARINE || {}));