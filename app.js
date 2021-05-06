alert('hello there') // to be friendly with users

/*
=======
>>>>>>> 958e7a9c16dd9366b9522538ec7d61eeb9f40959
var cityName ='Amman'
var district ='west'
var phoneNum =''
var temp=0.30
var x=25
var a=temp + x

alert('cityName'+'district')
console.log('phoneNum')
alert(a)

var seasonPrefer = prompt ("whats your favourite season")
if (seasonPrefer =="winter"){
document.write('<h1>perfect choice</h1>')
}
else if(seasonPrefer =="summer"){
document.write('<img src="https://png.pngtree.com/thumb_back/fh260/background/20190417/pngtree-summer-beach-bright-background-image_103306.jpg">')
}
else {
alert ('You prefer either autamn or spring')
}

<<<<<<< HEAD

*/
var city = prompt('Whats is your city?')

while(city!== 'amman' && city!=='aqaba' ){

city = prompt('we dont know your location');
}
var catType = prompt('please enter the type of cats ') 
  while (catType !== 'persian' && catType !== 'scottish') {
    catType = prompt('please choose persian or scottish') ;

  }
  var imgPhenomena =prompt ('how many times you want to see images')
  var img=''
  var season =prompt('what you prefer winter or summer?')
  for(var x=0;x<5;x++){
  if (season ==='winter'){
     img=img + '<img src="https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=783&q">'
  
 
  }
else if (season ==='summer'){
   img = img+ '<img src="006.jpg">'

}
}
document.write(img);
  
 

