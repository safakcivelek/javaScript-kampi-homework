// Soru 3-  1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

// Kendisi hariç pozitif tam bölenlerinin toplamı kendisine eşit olan sayıya Mükemmel sayı denir.

function perfectNumbers (number) {
    
    for (let i = 1; i < number; i++) {
        
        let bolenSayi = 0
        for (let j = 1; j < i; j++) {
            
            if (i % j == 0) 
                bolenSayi += j         
        }
        if (bolenSayi == i)
            console.log(i + " Mükemmel sayıdır. ")               
    }
}
let number = 1000
perfectNumbers(number)
