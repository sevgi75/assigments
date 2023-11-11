
// birinci cözüm



//Kullanıcıdan yılı alın
// const year = parseInt(prompt("Bir yıl girin:"));

// //Yılın artık yıl olup olmadığını kontrol edin
// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//     console.log(year + " bir artık yıldır.");
// } else {
//     console.log(year + " bir artık yıl değildir.");
// }




// ikinci cözüm

// let numb = prompt("Lutfen bir yil giriniz");
// if (numb % 4 == 0) {
//   if (numb % 100 != 0) {
//     alert(`${numb} artik bir yildir.`);
//   } else if (numb % 400 == 0) {
//     alert(`${numb} artik bir yildir.`);
//   } else {
//     alert(`${numb} artik bir yil değildir.`);
//   }
// } else {
//   alert(`${numb} artik bir yil değildir.`);
// }




// ücüncü cözüm


//!  ARTIK YIL BULMA
// function artikYilMi(yil) {
//     //Yıl 4'e tam bölünmeli
//     //Ancak yıl 100'e tam bölünüyorsa, 400'e de tam bölünmelidir
//     if ((yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0) {
//         return true; // Artık yıl
//     } else {
//         return false; // Artık yıl değil
//     }
// }

// const yil = 2023; // Kontrol etmek istediğiniz yılı buraya girin
// if (artikYilMi(yil)) {
//     console.log(yil + " bir artık yıldır.");
// } else {
//     console.log(yil + " bir artık yıl değildir.");
// }

// console.log("ÖDEV");
// let sayi = prompt("Lutfen bir yil giriniz");
// if (sayi % 4 == 0 && sayi % 100 == 0 && sayi % 400 == 0) {
//     alert(`${sayi} artik bir yildir.`);
// } else if (sayi % 4 !== 0) {
//     alert(`${sayi} artik bir yil değildir.`);
// } else if (sayi % 4 == 0 && sayi % 100 !== 0) {
//     alert(`${sayi} artik bir yildir.`);
// } else {
//     alert(`${sayi} artik bir yil değildir.`);
// }
