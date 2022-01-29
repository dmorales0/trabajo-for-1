let n = 25
for (let i = 1; i <= n; i++) {
    
    if (i % 5 ==0 && i % 3 ==0){
        console.log("tzstriker")
    
    }else if (i % 5 ==0){
        console.log("striker")
    }else if (i % 3 ==0){
        console.log("tz")
    }else {
        console.log(i)
    }

}