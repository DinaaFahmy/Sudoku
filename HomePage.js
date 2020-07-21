

   //save data
   document.getElementById("sub").addEventListener("click",function(){

        var val=document.getElementById("userN").value
        localStorage.setItem("myitime",val);
        clos();
    }); 
    function clos(){
        document.getElementById("bg-modal").style.display="none";
    }
     document.getElementById("close").addEventListener("click",function(){
      
        document.getElementById("bg-modal").style.display="none";});
      

          



          