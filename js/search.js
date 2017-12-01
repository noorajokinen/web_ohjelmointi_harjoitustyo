//sivun latautuessa kutsuu WineList() -funktiota, piilottaa haku-divun ja arpoo 4 viiniä etusivulle
$(document).ready(function(){
    
    $("#haku").hide();
    WinesList();
    randomWine();
    showAllWines();
    $("#viinituloste").hide();
    
});

//luo viinit etusivulle
function WinesList(data){
    
     $.each(viinit, function(index, viini){
         var div = $("<div>").attr("class", "wineList").attr("id", index);
         var imgdiv =$("<div>").attr("class", "imgDiv");
         var infodiv =$("<div>").attr("class", "infoDiv");
         var header = $("<h3>").text(viini.nimi).attr("class", "wineHeader");
         var maa =$("<p>").text("Maa: "+viini.maa).attr("class", "maa");
         var hinta =$("<p>").text("Hinta: "+viini.hinta +" €").attr("class", "winePrice");
         var kuvaus = $("<p>").text("Kuvaus: "+viini.kuvaus).addClass("kuvaus");
         var arvio = $("<p>").text("Oma arvio: "+viini.arvio).attr("class", "arvio");
         var kuva = $("<img>").attr("class", "wineImage").attr("src", viini.kuva);
         infodiv.append(header, maa, kuvaus, hinta, arvio);
        imgdiv.append(kuva);
         $(div).append(infodiv,imgdiv);
         $("#randomviini").append(div);  
     });       
};

//arpoo randomin viinin (4krt) ja piilottaa muut kuin arvotut
function randomWine() {
    
    var a = Math.floor((Math.random() * 26));
    var a2 = Math.floor((Math.random() * 26));
    var a3 = Math.floor((Math.random() * 26));
    var a4 = Math.floor((Math.random() * 26));

        for(var i=0; i < viinit.length; i++) {
            $("#"+i).hide();

            if (a == i) {
                
                $("#"+a).show();
            }
            if (a2 == i) {
                
                $("#"+a2).show();
            }
            if (a3 == i) {
                
                $("#"+a3).show();
            }
            if (a4 == i) {
                
                $("#"+a4).show();
            }
      
        };
    
};

// luo viinit Etsi viini -sivulle

function showAllWines(data){
     $.each(viinit, function(index, viini){
         var div = $("<div>").attr("class", "wineContainer").attr("id", index);
         var imgdiv =$("<div>").attr("class", "imgDiv");
         var infodiv =$("<div>").attr("class", "infoDiv");
         var header = $("<h3>").text(viini.nimi).attr("class", "wineHeader");
         var maa =$("<p>").text("Maa: "+viini.maa).attr("class", "maa");
         var hinta =$("<p>").text("Hinta: "+viini.hinta +" €").attr("class", "winePrice");
         var kuvaus = $("<p>").text("Kuvaus: "+viini.kuvaus).addClass("kuvaus");
         var arvio = $("<p>").text("Oma arvio: "+viini.arvio).attr("class", "arvio");
         var kuva = $("<img>").attr("class", "wineImage").attr("src", viini.kuva);
         infodiv.append(header, maa, kuvaus, hinta, arvio);
        imgdiv.append(kuva);
         $(div).append(infodiv,imgdiv);
         $("#viinituloste").append(div);
             
     });    
};


    //vaihtaa etusivulta haku sivulle...
$("#button1").click(function(){
    $("section").show();
    $("#haku").hide();
    $("#kartta").show();
    $("#viinituloste").hide();
    randomWine();
    $(".h2").show();
    emptySearch();
    
     $("#button1").css({
            'text-decoration': 'underline'
        });
        $("#button2").css({
            'text-decoration': 'none'
        });
        $("#button3").css({
            'text-decoration': 'none'
        });
    
});

//...ja hakusivulta etusivulle
$("#button2").click(function(){
    $("section").hide();
    $("#haku").show();
    $("#kartta").hide();
    $("#viinituloste").show();
    $(".h2").hide();
    $("#button1").css({
            'text-decoration': 'none'
        });
        $("#button2").css({
            'text-decoration': 'underline'
        });
        $("#button3").css({
            'text-decoration': 'none'
        });
          
});
      
// hakee viinin nimellä
function searchWineByName() {
    
    var getWines = document.getElementById("viinituloste");
    
    var input = document.getElementById("etsiviini");
    var filterterm = getWines.getElementsByTagName("h3");
    
    
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
        };
    
};
// haku kuivuusasteella
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
        
    };
    
};

//tyhjentää checkboxit
function emptySearch() {
    
    
   $('input[type=checkbox]').each(function() { 
       
       this.checked = false; 
       
}); 
    $(".wineContainer").show();
    $('#etsiviini').val('');
    $("#slider").val('30');
    $("#price").val('30');
};

//haku hinnalla
function searchWineByPrice(){
    
    var winePrice = document.getElementById("price").value;
    
    for(var i=0; i< viinit.length; i++){
    
    if(winePrice >= viinit[i].hinta){
        $("#"+i).show();
    }
    else {
        $("#"+i).hide();
    }
};
    
};


/*

$(function(){
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 30,
        values: [5,25],
        slide: function(event, ui){
        $("#maara").val("$" + ui.values[0] + " - $" + ui.values[1]);
    }    
    });
    $("#maara").val("$" + $("#silder-range").slider("values", 0)+ " -$" + $("#silder-range").slider("values", 1));
});

*/










   /* for (var i=0; i < viinit.length; i++) {
    
    showInfo(i);
        
}  */
    
    //hakee luodun idn mukaisen nimen ja näyttää sen näytöllä
  /*  for(var i=0; i < viinit.length; i++) {
        $("#"+i).text(viinit[i].nimi);
        $('#'+i).text(viinit[i].maa);
        
    }*/
    
    //luo uuden li elementin jokaiselle viinille ja antaa niille indexin mukaisen id:n
  /*  function showInfo(index) {
    var element = document.createElement("h3");
   // var kuva = document.createElement("img");
    var maa = document.createElement("p");
    maa.className = 'maat';
    maa.setAttribute("id",index);
    element.className = 'wines';
    element.setAttribute("id",index);
    getWines.appendChild(element); 
    getWines.appendChild(maa); 
    
        
};
    
        $(".wines").click(function() {

     /*   var element2 = document.createElement("ul"); //luodaan uusi ul-elementti
        var element22 = document.createElement("li"); //luodaan uusi li-elementti
        var infobox = $(this).closest("li").attr("id");//haetaan lähin li-elementti
        $(element22).text(viinit[infobox].maa);//asettaa tekstin 
        element2.appendChild(element22);
        this.appendChild(element2);//appendaa element2
        $("#viinit").hide(); //EI TOIMI */
        
       /* $("#viinit").hide();
        

    }); */
    //var u = a.localeCompare(0);

            //var c = $('.wineFirstPageContainer').attr('id');