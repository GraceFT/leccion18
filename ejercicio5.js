function casiPalindrome(palabra) {
    var palabra;
    var long = palabra.length;
    var contar=0;
    if (long%2==0){
        for (var i=1; i<=long/2;i++){
        if (palabra[i-1]!=palabra[long-i]){
            contar += 1;        
        } 
        }
    if (contar>2){
        return false;
     }else{
        return true;
     }
    }else{
    for (var i=1; i<=parseInt(long/2);i++){
        if (palabra[i-1]!=palabra[long-i]){
            contar += 1;            
        }
    }
        if (contar>2){
                return false;
            }else{
                return true;
            }
    }
}
