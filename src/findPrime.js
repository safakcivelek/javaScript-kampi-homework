// Soru 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

// Asal sayılar sadece iki pozitif tam sayı böleni olan, yani kendisine ve 1 sayısına kalansız bölünebilen, 1'den büyük sayılardır.

function findPrime (...numbers) { // rest

    for (let i = 0; i < numbers.length; i++) {
         let sayac = 0

      if(numbers[i] <= 1) // 1, 0 ve negatif sayılar kontrolü
         sayac++       

      for (let j = 2; j < numbers[i]; j++) { // 2 ve üstündeki sayılar kontrolü
      
      if(numbers[i] % j == 0)
         sayac++     
      }  

      if(sayac > 0)
         console.log(numbers[i] + " sayısı asal değildir.")

      else
         console.log(numbers[i] + " sayısı asaldır.")
   }    
}
 let numbers = [5,0,1,2,3,-5,-1,7,9,11,]
 findPrime(...numbers) 