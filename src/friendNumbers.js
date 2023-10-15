// Soru 2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
/*
 * Arkadaş Sayılar : İki sayının kendileri hariç pozitif bölenleri toplamı birbirlerine eşitse bu sayılar arkadaş sayı olarak adlandırılır. 
 * Örneğin 220 ve 284 sayıları bir çift arkadaş sayıdır.
 * 220 kendisi hariç pozitif bölenler toplamı => 1+2+4+5+10+11+20+22+44+55+110 = 284 'dür.
 * 284 kendisi hariç pozitif bölenler toplamı => 1+2+4+71+142 = 220 'dir.
*/ 
function friendNumbers(number1,number2) {

    let number2BolenToplam = 0;
    let number1BolenToplam = 0;

    for (let i = 1; i < number1; i++){
        
        if ( number1 % i == 0 )   
            number1BolenToplam += i                      
    }  
    for (let j = 1; j < number2; j++){

        if ( number2 % j == 0 )  
            number2BolenToplam += j             
    }  

    if ( (number1BolenToplam == number2) && (number2BolenToplam == number1) )
        console.log(number1 +" ve "+ number2 + " arkadaş sayılardır. ")
    else
        console.log(number1 +" ve "+ number2 + " arkadaş sayılar değildir. ")
}
let number1 = 220
let number2 = 284
friendNumbers(number1,number2)
friendNumbers(340,485)