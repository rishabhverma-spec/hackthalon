var a = 1; var b= 1;
 function state() {
    var x = document.getElementById("counselling");
    var state=document.getElementById("state").value;
    x.style.display="none";
      if(state=="Chandigarh"){
        x.style.display="inline";
        document.getElementById("one").innerHTML="GMCH";
        document.getElementById("two").innerHTML="PGIMER";      
    }
    else if(state=="Delhi"){
        x.style.display="inline";
        document.getElementById("one").innerHTML="Maulana Azad Medical College";
        document.getElementById("two").innerHTML="FMSC";  
     }
    }
   // On Button Click
    function myFunction() {
        var state=document.getElementById("state").value;
        var counselling = document.getElementById("counselling").value;
        var dynamic = document.getElementById("dynamic");
         if(state=="Himachal Pradesh"){
            dynamic.innerHTML = "<a href=\"https://hp.gov.in/hpdmer/page/UGPG-Admission.aspx\" target=\"_blank\">" + "hp.gov.in/hpdmer/page/UGPG-Admission.aspx" + "</a>";      
         }
         else if(state=="Haryana"){
            dynamic.innerHTML = "<a href=\"https://hp.online-counselling.co.in/admissions/onboardingHomePage\" target=\"_blank\">" + "hhp.online-counselling.co.in/admissions" + "</a>";  
         }
         else if(state=="Gujarat"){
            dynamic.innerHTML = "<a href=\"http://medadmgujarat.org/\" target=\"_blank\">" + "medadmgujarat.org" + "</a>";  
         }
         else if(state=="Uttar Pradesh"){
            dynamic.innerHTML = "<a href=\"https://upneet.gov.in/seatinfo/seat_stream.aspx\" target=\"_blank\">" + "upneet.gov.in/seatinfo/seat_stream.aspx" + "</a>";  
         }
         else if(state=="West Bengal"){
            dynamic.innerHTML = "<a href=\"https://wbmcc.nic.in/ug/HomePage.aspx\" target=\"_blank\">" + "wbmcc.nic.in/ug/HomePage.aspx" + "</a>"; 
         }
         else if(state=="Rajasthan"){
         dynamic.innerHTML = "<a href=\"https://education.rajasthan.gov.in\" target=\"_blank\">" + "education.rajasthan.gov.in" + "</a>";
         }
         else if(state=="Punjab"){
            dynamic.innerHTML = "<a href=\"https://bfuhs.ac.in\" target=\"_blank\">" + "bfuhs.ac.in" + "</a>";  
         }
         else if(state=="All India")
         {
           dynamic.innerHTML = "<a href=\"https://neet.nta.nic.in\" target=\"_blank\">" + "neet.nta.nic.in" + "</a>";
         }
         else if((state=="Delhi")&&(counselling=="Maulana Azad Medical College")){
            dynamic.innerHTML = "<a href=\"https://mamc.ac.in/layoutpage-academic-branch\" target=\"_blank\">" + "mamc.ac.in/layoutpage-academic-branch" + "</a>";
         }
         else if((state=="Delhi")&&(counselling=="FMSC")){
         dynamic.innerHTML = "<a href=\"http://fmsc.ac.in/\" target=\"_blank\">" + "fmsc.ac.in/" + "</a>";  
        }
        else if((state=="Chandigarh")&&(counselling=="GMCH")){
            dynamic.innerHTML = "<a href=\"http://gmch.gov.in/admissions\" target=\"_blank\">" + "gmch.gov.in/admissions" + "</a>";
        }
        else if((state=="Chandigarh")&&(counselling=="PGMIER"))
        {
            dynamic.innerHTML = "<a href=\"https://pgimer.edu.in\" target=\"_blank\">" + "pgimer.edu.in" + "</a>";
        }

    }