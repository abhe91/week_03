function  hitungJumlahKata (kalimat) {
  
    kalimat += ' ';
    var jumlahKata = ' '; 
    for (var i= 0; i<kalimat.length; i++){
      if (kalimat[i] === ' ') {
        jumlahKata++;
    //   }
    }
    return jumlahKata;
  }
  
 
 // TEST CASES 
 console.log(hitungJumlahKata ('I have a dream' )); // 4 
 console.log(hitungJumlahKata ('Jangan pernah makan gandum atau kue parut' )); // 7
 console.log(hitungJumlahKata ('A song to sing' )); // 4 
 console.log(hitungJumlahKata ('I you'));// 1 
 console.log(hitungJumlahKata ('Saya yakin saya bisa mengkode' )); // 5