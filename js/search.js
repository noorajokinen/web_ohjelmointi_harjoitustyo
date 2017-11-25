$(document).ready(function(){
    
    var getWines = document.getElementById("viinituloste");
    $("#haku").hide();
    
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
    element.className = 'wines';
    element.setAttribute("id",index);
    getWines.appendChild(element); 
        
};
    

    
})
// luo sivulle listan kaikista viineistä ja niiden tiedoista    
function showAllWines(data){
     $.each(viinit, function(index, viini){
        
         var div = $("<div>").addClass("wineContainer");
         var header = $("<h3>").text(viini.nimi);
         var kuva = $("<img>").attr("class", "wineImage").attr("src", viini.kuva);
         var maa =$("<p>").text(viini.maa);
         var kuvaus = $("<p>").text(viini.kuvaus).addClass("kuvaus");
         div.append(header, kuva, maa, kuvaus);
         $("#viinit").append(div);
         
         
     });
            
        }
    //clikki-funktio li-elementille 
    $(".wines").click(function() {

        var element2 = document.createElement("ul"); //luodaan uusi ul-elementti
        var element22 = document.createElement("li"); //luodaan uusi li-elementti
        var infobox = $(this).closest("li").attr("id");//haetaan lähin li-elementti
        $(element22).text(viinit[infobox].maa);//asettaa tekstin 
        element2.appendChild(element22);
        this.appendChild(element2);//appendaa element2
        $("#viinit").hide(); //EI TOIMI

    });
    
    //vaihtaa etusivulta haku sivulle...
    $("#button1").click(function(){
        $("section").show();
        $("#haku").hide();
        $("#map").show();
        $("#viinit").hide();
    });
    //...ja hakusivulta etusivulle
      $("#button2").click(function(){
        $("section").hide();
        $("#haku").show();
        $("#map").hide();
       $(showAllWines);
        $("#viinit").show();
          
        
    });

$(".wineContainer").click(function(){
    console.log(jee)
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
    
};





