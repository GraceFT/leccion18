function stringMultiplicar(n) {
    var n;
    var salida=" ";
    for (var i=1; i<=10; i++){    
        if(i<=10){
            salida += n+"x"+i+"="+n*i;  
            if (i<10){
            salida+="/";
            }
        }        
    }
    return salida;
}
