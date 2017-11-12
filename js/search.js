$(document).ready(function(){
    
    var getWines = document.getElementById("viinituloste");
    
    for (var i=0; i < viinit.length; i++) {
    
    showInfo(i);
    
        
}  
    
    //hakee luodun idn mukaisen nimen ja näyttää sen näytöllä
    for(var i=0; i < viinit.length; i++) {
        $("#"+i).text(viinit[i].nimi);
        
    }
    
    //luo uuden li elementin jokaiselle viinille ja antaa niille indexin mukaisen id:n
    function showInfo(index) {
    var element = document.createElement("li");
    element.setAttribute("id",index);
    getWines.appendChild(element); 
    $("li").hide();
        
};
     //piilottaa luodut elementit
     

    
});

function searchWine() {
    
    var getWines = document.getElementById("viinituloste");
    
    var input = document.getElementById("etsiviini");
    var filterterm = getWines.getElementsByTagName("li");
    
    //isoilla kirjaimilla ei merkitystä
    var filter = input.value.toUpperCase();
    
        
        for (var i=0; i < viinit.length; i++) {
        
            var item = viinit[i].nimi.toUpperCase();
        
           if (item.indexOf(filter) > -1){
               
               $("#"+i).show();
               
               if (filter == "") {
                   $("#"+i).hide();
               }
                 
            
            }
            else {
                $("#"+i).hide();
            }
        
        
        }
};