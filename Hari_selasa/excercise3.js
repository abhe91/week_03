//Hasbunallah Wanimalwakil



function dataHeadling(str){
    var input = ''
    for(var i = 0; i<str.length; i++){
    input +=
            'Nomor id   : ' + str[i][0] + '\n' +
            'Nama       : ' + str[i][1] + '\n' +
            'Alamat     : ' + str[i][2] + '\n' +
            'Tgl lahir  : ' + str[i][3] + '\n' +
            'Hobi       : ' + str[i][4] + '\n' + '\n'

    }
return input
}



console.log(dataHeadling( [
    [ " 0001 " , "Roman Alamsyah " , "Bandar Lampung " , "21/05/1989 " , "Membaca " ],
    [" 0002 " , "Dika Sembiring " , "Medan " , "10/10/1992 " , "Bermain Gitar " ],
    [ " 0003 " , "Winona " , "Ambon " , "25/12/1965 " , "Memasak " ],
    [ " 0004 " , "Bintang Senjaya " , "Martapura " , "6/4/1970 " , "Berkebun " ]
]))