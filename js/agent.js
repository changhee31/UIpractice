let smartPhones=['iphone','ipod','ipad','opera mini','opera mobi','nokia','android','webos','windows ce','blackberry','iemobile','sonyericssion'];
//스마트폰 이름들


/*alert(navigator.userAgent); //기계정보*/
for(let i in smartPhones){  
    if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhones[i]))){      //toLowerCase : 다 소문자로 바꿔줌
        document.location='http://changhee31.dothome.co.kr/mindex.html'
    }
}
