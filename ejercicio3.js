function total(n) {
    var total = 1; 
    var n;
    if (n<=0){
        return null;
    }else{
    for (var i=1;i<=n;i++){
        total*=i;
    }
    return total;
    }
}
