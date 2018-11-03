function pasanganTerbesar(num) {

    var konversi = num.toString();
    var simpan = [];
    for (var i=0; i<konversi.length; i++){
      simpan[i] = konversi[i] + konversi[i+1];
    }
    //console.log(simpan);
    //Sorting for array looping
    var tampung =0;
      for (var j=0; j<simpan.length; j++){
        for (var k=0; k<simpan.length-j-1; k++){
          if (parseInt(simpan[k]) > parseInt(simpan[k+1])){
          tampung = simpan[k];
          simpan[k] = simpan [k+1];
          simpan[k+1] = tampung;
        }
        /*if (parseInt(simpan[j]) > parseInt(simpan[j+1])){
          tampung = simpan[j+1];
          simpan[j+1] = simpan [j];
          simpan[j] = tampung;
          j=-1;
        }*/
        }
      }
    //console.log(simpan);  
    return simpan[simpan.length-1];  
  }
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  