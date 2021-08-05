'use strict';
////////////////////////////////////////////////////////////////////////////////////////////////  lesson02

let number=266219;
let result = 1;
    while (number) {
        result *= number % 10;
        number = Math.floor(number / 10);
    }
    console.log(result);


let newResult=1
    for(let i=1;i<=3;i++){
        newResult*=result;
    }
    console.log(newResult);


  let x= newResult.toString();
   newResult=x.split('');
   result=newResult[0]+newResult[1];
   result=+result
;

    console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////  lesson03


    let language_1=function(lang){

    if (lang=='ru'){
        return('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье')
    }
    else if (lang=='en'){
        return('monday, tuestay, wednesday, thursday, friday, saturday, sunday')
    }
};
console.log(language_1('ru'));

//
let language_2=function(lang){
    switch(lang){
    case 'ru':
        return('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
    case 'en':
        return('monday, tuestay, wednesday, thursday, friday, saturday, sunday');
    }

};
console.log(language_2('ru'));

//
let language_3=function(lang){

let arr= {
    ru: ['понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'],
    en: ['monday, tuesday, wednesday, thursday, friday, saturday, sunday']
}
return arr[lang]
};
console.log(language_3('en'));

//

let post=function(namePerson){
    (namePerson=='Артем') ? console.log('Директор') : console.log('Студент');
    (namePerson=='Максим') ? console.log('Преподаватель') : console.log('Студент')

};
post('Максим');


////////////////////////////////////////////////////////////////////////////////////////////////  lesson04

let lesson04=function(word)
{
    if (typeof(word)!='string'){
        console.log('это не строка');
    }
    else{
        word=word.trim();
    
    }

if(word.length >30){
    word=word.substr(0,30)+'...';
    console.log(word)
}}
lesson04(' Из нее льет — я Посейдон, Она сразу дает, ну спасибо Хочет отношений, Упаси Бог Но, когда я в ней — я Pussy Boy Из нее льет — я Посейдон, Она сразу дает, ну спасибо Хочет отношений, Упаси Бог Но, когда я в ней — я Pussy Boy ')


////////////////////////////////////////////////////////////////////////////////////////////////  lesson05




let start2or4 = function(arr){
    arr.forEach((arr)=>{
        if (arr.startsWith('2') || arr.startsWith('4')) {
            console.log(arr);
    }})
}
start2or4(['234', '732', '5634537', '333', '444', '980842984', '243509045'])


let primeNumber = function(numbeer){
    let j;
    nextPrime: for(let i=2; i<=numbeer; i++){
        for( j=2; j<i; j++){
            if (i%j === 0){
                continue nextPrime;
            } 
        }
        
        console.log(i + ' Делители этого числа: '+ 1 +' и '+ j);
    }
}
primeNumber(100);

    
