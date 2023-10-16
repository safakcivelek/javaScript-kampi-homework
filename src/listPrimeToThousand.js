//Soru 4-  1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function findPrimeNumbers (number) {

    for (let i = 0; i < number; i++) {
         let sayac = 0

      if(i <= 1) // 1, 0 ve negatif sayılar kontrolü
         sayac++       

      for (let j = 2; j < i; j++) { // 2 ve üstündeki sayılar kontrolü
      
      if(i % j == 0)
         sayac++     
      }  

      if(sayac <= 0)
      console.log(i + " sayısı asaldır.")
   }    
}
 let number = 1000
 findPrimeNumbers(number) 