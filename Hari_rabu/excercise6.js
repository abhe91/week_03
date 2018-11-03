function angkaPalindrome(angka){
    for(var i = 0; i<angka; i++){
        angka++
        //  console.log(angka++)

    var angkaString = String(angka)
    var balikAngka = ''
    for(var j=angkaString.length -1;  j>=0; j--){
        balikAngka = balikAngka += angkaString[j];
        // console.log(balikAngka)
    }
    if (angkaString === balikAngka){
        return angka;
            }
        }
    }

console.log(angkaPalindrome(8)); //9
console.log(angkaPalindrome(10)); //11
console.log(angkaPalindrome(117));//121
console.log(angkaPalindrome(175));//181
console.log(angkaPalindrome(1000));//1001