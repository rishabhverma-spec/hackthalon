<<<<<<< HEAD
var a = 1; var b= 1;
 function state() {
    var x = document.getElementById("counselling");
    var state=document.getElementById("state").value;
    x.style.display="none";
      if(state=="Chandigarh"){
        x.style.display="inline";
        document.getElementById("one").innerHTML="Gmch";
        document.getElementById("two").innerHTML="Pgimer";      
    }
    else if(state=="Delhi"){
        x.style.display="inline";
        document.getElementById("one").innerHTML="Maulana Azad Medical College";
        document.getElementById("two").innerHTML="Fmsc";  
     }
    }
   // On Button Click
    function myFunction() {
        var state=document.getElementById("state").value;
        var counselling = document.getElementById("counselling").value;
        var dynamic = document.getElementById("dynamic");
         if(state=="Himachal Pradesh"){
            dynamic.innerHTML = "<a href=\"https://hp.gov.in/hpdmer/page/UGPG-Admission.aspx\" target=\"blank\">" + "hp.gov.in/hpdmer/page/UGPG-Admission.aspx" + "</a>";      
         }
         else if(state=="Haryana"){
            dynamic.innerHTML = "<a href=\"http://hp.online-counselling.co.in/admissions\" target=\"blank\">" + "hhp.online-counselling.co.in/admissions" + "</a>";  
         }
         else if(state=="Gujrat"){
            dynamic.innerHTML = "<a href=\"https://medadmgujarat.org\" target=\"blank\">" + "medadmgujarat.org" + "</a>";  
         }
         else if(state=="Uttar Pradesh"){
            dynamic.innerHTML = "<a href=\"https://upneet.gov.in/seatinfo/seat_stream.aspx\" target=\"blank\">" + "upneet.gov.in/seatinfo/seat_stream.aspx" + "</a>";  
         }
         else if(state=="West Bengal"){
            dynamic.innerHTML = "<a href=\"https://http://wbmcc.nic.in/ug/HomePage.aspx\" target=\"blank\">" + "http://wbmcc.nic.in/ug/HomePage.aspx" + "</a>"; 
         }
         else if(state=="Rajasthan"){
         dynamic.innerHTML = "<a href=\"https://education.rajasthan.gov.in\" target=\"blank\">" + "education.rajasthan.gov.in" + "</a>";
         }
         else if(state=="Punjab"){
            dynamic.innerHTML = "<a href=\"https://bfuhs.ac.in\" target=\"blank\">" + "bfuhs.ac.in" + "</a>";  
         }
         else if(state=="All India")
         {
           dynamic.innerHTML = "<a href=\"https://neet.nta.nic.in\" target=\"blank\">" + "neet.nta.nic.in" + "</a>";
         }
         else if((state=="Delhi")&&(counselling=="Maulana Azad Medical College")){
            dynamic.innerHTML = "<a href=\"https://http://mamc.ac.in/layoutpage-academic-branch\" target=\"blank\">" + "http://mamc.ac.in/layoutpage-academic-branch" + "</a>";
         }
         else if((state=="Delhi")&&(counselling=="Fmsc")){
         dynamic.innerHTML = "<a href=\"https://fmsc.ac.in /layoutpage-academic-branch\" target=\"blank\">" + "http://fmsc.ac.in/" + "</a>";  
        }
        else if((state=="Chandigarh")&&(counselling=="Gmch")){
            dynamic.innerHTML = "<a href=\"https://gmch.gov.in/admissions \" target=\"blank\">" + "gmch.gov.in/admissions " + "</a>";
        }
        else if((state=="Chandigarh")&&(counselling=="Pgimer"))
        {
            dynamic.innerHTML = "<a href=\"https://pgimer.edu.in\" target=\"blank\">" + "pgimer.edu.in" + "</a>";
        }

=======
var a = 1; var b= 1;
 function state() {
    var x = document.getElementById("counselling");
    var state=document.getElementById("state").value;
    x.style.display="none";
      if(state=="Chandigarh"){
        x.style.display="inline";
        document.getElementById("one").innerHTML="Gmch";
        document.getElementById("two").innerHTML="Pgimer";      
    }
    else if(state=="Delhi"){
        x.style.display="inline";
        document.getElementById("one").innerHTML="Maulana Azad Medical College";
        document.getElementById("two").innerHTML="Fmsc";  
     }
    }
   // On Button Click
    function myFunction() {
        var state=document.getElementById("state").value;
        var counselling = document.getElementById("counselling").value;
        var dynamic = document.getElementById("dynamic");
         if(state=="Himachal Pradesh"){
            dynamic.innerHTML = "<a href=\"https://hp.gov.in/hpdmer/page/UGPG-Admission.aspx\" target=\"blank\">" + "hp.gov.in/hpdmer/page/UGPG-Admission.aspx" + "</a>";      
         }
         else if(state=="Haryana"){
            dynamic.innerHTML = "<a href=\"http://hp.online-counselling.co.in/admissions\" target=\"blank\">" + "hhp.online-counselling.co.in/admissions" + "</a>";  
         }
         else if(state=="Gujrat"){
            dynamic.innerHTML = "<a href=\"http://medadmgujarat.org/\" target=\"blank\">" + "medadmgujarat.org" + "</a>";  
         }
         else if(state=="Uttar Pradesh"){
            dynamic.innerHTML = "<a href=\"https://upneet.gov.in/seatinfo/seat_stream.aspx\" target=\"blank\">" + "upneet.gov.in/seatinfo/seat_stream.aspx" + "</a>";  
         }
         else if(state=="West Bengal"){
            dynamic.innerHTML = "<a href=\"https://wbmcc.nic.in/ug/HomePage.aspx\" target=\"blank\">" + "http://wbmcc.nic.in/ug/HomePage.aspx" + "</a>"; 
         }
         else if(state=="Rajasthan"){
         dynamic.innerHTML = "<a href=\"https://education.rajasthan.gov.in\" target=\"blank\">" + "education.rajasthan.gov.in" + "</a>";
         }
         else if(state=="Punjab"){
            dynamic.innerHTML = "<a href=\"https://bfuhs.ac.in\" target=\"blank\">" + "bfuhs.ac.in" + "</a>";  
         }
         else if(state=="All India")
         {
           dynamic.innerHTML = "<a href=\"https://neet.nta.nic.in\" target=\"blank\">" + "neet.nta.nic.in" + "</a>";
         }
         else if((state=="Delhi")&&(counselling=="Maulana Azad Medical College")){
            dynamic.innerHTML = "<a href=\"https://mamc.ac.in/layoutpage-academic-branch\" target=\"blank\">" + "http://mamc.ac.in/layoutpage-academic-branch" + "</a>";
         }
         else if((state=="Delhi")&&(counselling=="Fmsc")){
         dynamic.innerHTML = "<a href=\"http://fmsc.ac.in/\" target=\"blank\">" + "http://fmsc.ac.in/" + "</a>";  
        }
        else if((state=="Chandigarh")&&(counselling=="Gmch")){
            dynamic.innerHTML = "<a href=\"http://gmch.gov.in/admissions\" target=\"blank\">" + "gmch.gov.in/admissions" + "</a>";
        }
        else if((state=="Chandigarh")&&(counselling=="Pgimer"))
        {
            dynamic.innerHTML = "<a href=\"https://pgimer.edu.in\" target=\"blank\">" + "pgimer.edu.in" + "</a>";
        }

>>>>>>> 06ac4c80887abd5e029962e4b23bd5bd92a4fd77
    }