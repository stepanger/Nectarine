;(function($){
    
    $(document).ready(function(){
        
        $(".gala27").click(function() {
            
            var valueFilter = $(".gala12").val();
            
            if(valueFilter == ""){
                $(".gala12").css("border-color", "#be3a3a")
                            .attr("placeholder", "Введите значение");
                return
            }
            
            CHROMESTO.getStorage("history", function(page){
                
                //console.log(page)
                
                if(!page){
                    CHROMESTO.setStorage({"history": [valueFilter]}, function(){});
                    return
                }
                
                page[page.length] = valueFilter;
                
                //console.log(page)
                
                CHROMESTO.setStorage({"history": page}, function(){});
                
            });
            
        });
        
    });

}(jQuery))

//page[page.length] = 'Компьютер'