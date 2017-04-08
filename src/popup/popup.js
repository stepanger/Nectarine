;(function($){
    
    $(document).ready(function(){
        
        CHROMESTO.getStorage("history", function(page){
            addHTMLStorage(page);
        });
        
        
        $("ul").on("click", "li", function(){
            deletStorage($(this).text());
            $(this).remove();
        })
        
        $(".gala27").click(function() {
            
            var valueFilter = $(".gala12").val();
            
            if(valueFilter == ""){
                $(".gala12").css("border-color", "#be3a3a")
                            .attr("placeholder", "Введите значение");
                return
            }
            
            addParametrRegx(valueFilter);
            
        });
        
    });
    
    function addParametrRegx(valueFilter){
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
    };
    
    function addHTMLStorage(filterMass){
        $.each(filterMass, function() {
            $('<li/>', {
                text: DECODE.utf8ToB64(this)
            }).appendTo($(".border"));
        });
    };
    
    function deletStorage(his){
        
        his = DECODE.b64ToUtf8(his);
        
        console.log(his);
        
        CHROMESTO.getStorage("history", function(page){
            
            console.log(page);
            
            var positionNumber = page.indexOf(his);
            
            console.log(positionNumber);
            page.splice(positionNumber, 1);
            
            CHROMESTO.setStorage({"history": page}, function(){});
            
        });
    };

}(jQuery))