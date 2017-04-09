;(function(){
    
    HISTORY.visitPage(function(results){
        
        CHROMESTO.getStorage("history", function(page){
            
            console.log(page);
            
            if(!NECTARINE.findSimilaritiesURL(results, page)){
                return
            }
            
            deletUrlPage(results, "history");
        });
        
        console.log(results)
    });
    
    chrome.extension.onMessage.addListener(function(request){
        
        deletUrlPage(request.openUrlHtml, "onMassege");
    });
    
    function deletUrlPage(results, parametrOptions){
        HISTORY.deleteUrl(results, function(){
                console.log("Delet "+results+ " "+parametrOptions)
        })
    }
    
}())