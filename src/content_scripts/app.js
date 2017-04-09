;(function($){
    
    $(document).ready(function(){
        htmlParse();
    });
    
    
    function htmlParse(){
        var htmlText = $(document).text();
        
        CHROMESTO.getStorage("history", function(page){
            if(!page){
                return
            }
            
            if(!NECTARINE.findSimilaritiesHTML(htmlText, page)){
                return
            }
            
            console.log(location.href);
            
            chrome.runtime.sendMessage(chrome.runtime.id, {
                openUrlHtml: location.href
             })

            
        });
        
    }
    
              
//chrome.runtime.reload()

}(jQuery))