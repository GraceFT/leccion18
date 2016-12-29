function total(n) {
    var i;  var total = 1; var n;
    if (n<=0){
        return null;
    }else{
    for (i=1;i<=n;i++){
        total*=i;
    }
    return total;
    }
}
