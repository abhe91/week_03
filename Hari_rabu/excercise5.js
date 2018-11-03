function palindrome (kata){

    var input = '';
    for(var i =kata.length-1; i>=0; i--){
        input = input + kata[i]  
        if(input === kata){
            return true
        }
    }
    return false
}

 console.log ( palindrome ( ' katak ' )); //
 console.log ( palindrome ( ' blanket ' )); //
 console.log ( palindrome ( ' civic ' )); //
 console.log ( palindrome ( ' kasur rusak ' )); //
 console.log ( palindrome ( ' mister ' )); // salah