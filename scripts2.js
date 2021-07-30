number=266219;
     result = 1;
    while (number) {
        result *= number % 10;
        number = Math.floor(number / 10);
    }
    console.log(result);

    //

newResult=1
    for(i=1;i<=3;i++){
        newResult*=result
    }
    console.log(newResult);

    //

   x= newResult.toString()
   newResult=x.split('')
   result=newResult[0]+newResult[1]
   result=+result


    console.log(result)