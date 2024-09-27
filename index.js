
      //  A B C D E F G F E D C B A
            //  A B C D E F   F E D C B A
            //  A B C D E       E D C B A
            //  A B C D           D C B A
            //  A B C               C B A
            //  A B                   B A
            //  A                       A

            let rows=10
            for(i=0;i<rows;i++){
                res="", alpha=65;
                for(j=1;j<=rows-i;j++){
                    res+=String.fromCharCode(alpha)+""
                    alpha+=1;
                }
               if(i==0){
                  console.log(res+res.slice(0,res.length-1).split("").reverse().join(""))
                
               }
               else{
                  console.log(res+" ".repeat(2*i-1)+res.split("").reverse().join(""))
               }
                
            }




      //         A 
      //       C B 
      //     F E D 
      //   J I H G 
      // O N M L K 


         rows= 5
         alpha=65
      for(i=1;i<=rows;i++){
      let res="";
          for(j=1;j<=i;j++){
              res=String.fromCharCode(alpha)+" "+res
              alpha++
          }
            for(k=1;k<=rows-i;k++){
            res="  "+res;
        }
          console.log(res)
      }
      

