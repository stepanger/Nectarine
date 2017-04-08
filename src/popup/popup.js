;(function($){
    
    $(document).ready(function(){
        
        $(".gala27").click(function() {
            
            var valueFilter = $(".gala12").val();
            
            if(valueFilter == ""){
                $(".gala12").css("border-color", "#be3a3a")
                            .attr("placeholder", "Введите значение");
                return
            }
            
            
        });
        
    });
    
    /*
     chrome.storage.local.set({"asd":[
         "asd",
         "sss"
     ]}, function(err) {
     });
    
    chrome.storage.local.get(function(page) {
        console.log(page)
    });
    */

}(jQuery))