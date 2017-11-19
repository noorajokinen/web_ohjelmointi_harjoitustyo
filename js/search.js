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
    //piilottaa luodut li elementit
    $("li").hide();
        
};
         
});

function searchWineByName() {
    
    var getWines = document.getElementById("viinituloste");
    
    var input = document.getElementById("etsiviini");
    var filterterm = getWines.getElementsByTagName("li");
    
    
    //toUppercase=isoilla kirjaimilla ei merkitystä
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


function searchWineByTaste() {
    
    var kuiva = document.getElementById("kuiva").checked;
    var puolikuiva = document.getElementById("puolikuiva").checked;
    var puolimakea = document.getElementById("puolimakea").checked;
    var makea = document.getElementById("makea").checked;

    
    for(var i=0; i < viinit.length; i++){
        
        if(kuiva == true && viinit[i].makeus == 1) {
             $("#"+i).show();
            }
        
        else if(viinit[i].makeus == 2 && puolikuiva == true) {
             $("#"+i).show();
            }
        else if(viinit[i].makeus == 3 && puolimakea == true) {
             $("#"+i).show();
            }
        
       else if(viinit[i].makeus == 4 && makea == true) {
             $("#"+i).show();
            }
       else if(makea == false || kuiva == false || puolikuiva == false || puolimakea == false) {
            $("#"+i).hide();
        }
    } 
    
}





