 var a = 1; var b= 1;
 function state() {
    var x = document.getElementById("counselling");
    var state=document.getElementById("state").value;
    x.style.display="none";
      if(state=="All India"){
        x.style.display="inline";
        document.getElementById("one").innerHTML="Jossa";
        document.getElementById("two").innerHTML="CSAB";      
    }
    else if(state=="Delhi"){
        x.style.display="inline";
        document.getElementById("one").innerHTML="JAC-Delhi";
        document.getElementById("two").innerHTML="I.P.U";  
     }
    }
   // On Button Click
    function myFunction() {
        var state=document.getElementById("state").value;
        var counselling = document.getElementById("counselling").value;
        var dynamic = document.getElementById("dynamic");
         if(state=="Himachal Pradesh"){
            dynamic.innerHTML = "<a href=\"https://www.himtu.ac.in/admission/\" target=\"blank\">" + "himtu.ac.in/admission/" + "</a>";      
         }
         else if(state=="Haryana"){
            dynamic.innerHTML = "<a href=\"http://hstes.org.in/\" target=\"blank\">" + "hstes.org.in" + "</a>";  
         }
         else if(state=="Gujrat"){
            dynamic.innerHTML = "<a href=\"https://gujacpc.nic.in/RegSys/Page/Page?PageId=1&LangId=P\" target=\"blank\">" + "gujacpc.nic.in" + "</a>";  
         }
         else if(state=="Uttar Pradesh"){
            dynamic.innerHTML = "<a href=\"https://jeecup.nic.in/WebInfo/Page/Page?PageId=1&LangId=P\" target=\"blank\">" + "jeecup.nic.in" + "</a>";  

         }
         else if(state=="West Bengal"){
            dynamic.innerHTML = "<a href=\"https://wbjeeb.nic.in/WBJEEBBoardCMS/Page/Page?PageId=1&LangId=P\" target=\"blank\">" + "wbjeeb.nic.in" + "</a>"; 
         }
         else if(state=="Rajasthan"){
         dynamic.innerHTML = "<a href=\"https://reap2021.com/\" target=\"blank\">" + "reap2021.com" + "</a>";
         }
         else if(state=="Punjab"){
            dynamic.innerHTML = "<a href=\"https://ptu.ac.in/admissions\" target=\"blank\">" + "ptu.ac.in/admissions" + "</a>";  
         }
         else if(state=="Chandigarh")
         {
           dynamic.innerHTML = "<a href=\"https://chdenggadmissions.nic.in/WebInfo/Page/Page?PageId=1&LangId=P\" target=\"blank\">" + "chdenggadmissions.nic.in" + "</a>";
         }
         else if((state=="Delhi")&&(counselling=="JAC-Delhi")){
            dynamic.innerHTML = "<a href=\"https://jacdelhi.nic.in/WebInfo/Page/Page?PageId=1&LangId=P\" target=\"blank\">" + "jacdelhi.nic.in" + "</a>";
         }
         else if((state=="Delhi")&&(counselling=="I.P.U")){
         dynamic.innerHTML = "<a href=\"https://ipu.admissions.nic.in/IpuAdmiss/page/Page?PageId=1&LangId=P\" target=\"blank\">" + "ipu.admissions.nic.in" + "</a>";  
        }
        else if((state=="All India")&&(counselling=="Jossa")){
            dynamic.innerHTML = "<a href=\"https://josaa.nic.in/WebInfo/Page/Page?PageId=1&LangId=P\" target=\"blank\">" + "josaa.nic.in" + "</a>";
        }
        else if((state="All India")&&(counselling="CSAB"))
        {
            dynamic.innerHTML = "<a href=\"https://csab.nic.in/webinfo/Page/Page?PageId=1&LangId=P\" target=\"blank\">" + "csab.nic.in" + "</a>";
        }

    }