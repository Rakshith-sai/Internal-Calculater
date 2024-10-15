function calculate()
   {
       var m1,m2,a1,a2,result = 0;
       m1 = document.getElementById('m1').value;
       m2 = document.getElementById('m2').value;
       a1 = document.getElementById('a1').value;
       a2 = document.getElementById('a2').value;
       var textRes = document.getElementById('texttRes');
       textRes = "";
       m1 = parseInt(m1);
       m2 = parseInt(m2);
       a1 = parseInt(a1);
       a2 = parseInt(a2);
       var maxMark = 0; var minMark = 0;
       console.log(m1);
       console.log(m2);
       console.log(a1);
       console.log(a2);
       if( m1 < 0 || m2 < 0 || a1 < 0 || a2 < 0 || m1 > 30 || m2 >30  || a1 > 5 || a2 > 5 )
       {
           result = "Check once and re-enter the marks.";
       }
       else
       {
         if(m1>m2){
            maxMark = m1;
            minMark = m2;
          }else {
           maxMark = m2;
           minMark = m1;
         }
           result = parseInt(maxMark*0.8)+parseInt(minMark*0.2)+a1+a2;
       }
      document.getElementById("texttRes").textContent = result ;
   }
