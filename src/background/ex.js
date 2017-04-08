;(function(){
    
    HISTORY.visitPage(function(results){
        
        CHROMESTO.getStorage("history", function(page){
            
            console.log(page);
            
            if(!NECTARINE.findSimilaritiesURL(results, page)){
                return
            }
            
            HISTORY.deleteUrl(results, function(){
                console.log("Delet "+results)
            })
        });
        
        console.log(results)
    })
    
}())