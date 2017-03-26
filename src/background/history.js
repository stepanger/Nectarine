
//var setting = [
//    /google/i,
//    /habrahabr/i,
//    /kinogo/i
//];
//
//var setting_lenght = setting.length - 1;

chrome.history.onVisited.addListener(function(results){
   
    console.log(results);
})