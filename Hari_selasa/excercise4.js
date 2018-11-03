
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */


    var input = ["0001 ", "Roman Alamsyah " , "Bandar Lampung ", "21/06/1989", "Membaca "]
   
    function dataHandling2(input){
        input.splice(1, 1, "Roman Alamsyah Elsharawy"); 
        input.splice(2, 1, "provinsi bandar lampung" ); 
        input.splice(4, 1, "pria", "SMA Internasional Metro"); 

        console.log(input)
        var tanggal = input[3].split('/')    
        var nama = input[1].slice(0, 14)
        switch(tanggal[1]){
            case '01': 
                console.log('januari');
            break;
            case '02':
                console.log('febuari');
            break;
            case '03':
                console.log('maret');
            break;
            case '04':
                console.log('april');
            break;
            case '05':
                console.log('mei');
            break;
            case '06':
                console.log('juni');
            break;
            case '07':
                console.log('juli');
            break;
            case '08':
                console.log('agustus');
            break;
            case '09':
                console.log('september');
            break;
            case '10':
                console.log('oktober');
            break;
            case '11':
                console.log('november');
            break;
            case '12':
                console.log('desember');
            break;
            default:
            console.log('bukan nama bulan')
        }
       
        tanggal.sort(function(value1, value2)
                { return value2 - value1  });
                console.log(tanggal); 
        console.log(tanggal.join('-'));
        console.log(nama)

       

}

dataHandling2(input)      
