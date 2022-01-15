function declinate(number,str1,str2,str3)
{var digits=String(number).slice(-2);if(digits[0]=="1"&&digits.length==2)
{return str3;}
else
{var i=Number(digits[0]);if(digits.length==2)i=Number(digits[1]);if(i==0){return str3;}
else if(i==1){return str1;}
else if(i<5){return str2;}
else return str3;}}
function split_thousands(number)
{number=number.toString();if(number>999)
{while(/(\d+)(\d{3})/.test(number)){number=number.replace(/(\d+)(\d{3})/,'$1'+' '+'$2');}}
return number;}
$(window).load(function(){$('#loading').fadeOut();});