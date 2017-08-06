//counter code
var button=doccument.getElementById('counter');
var counter=0;
button.onclick=function(){
   counter=counter+1;
   var span=doccument.getElementById('count');
   span.innerHTML=counter.toString();
};