const randomColor = function(){
    let hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
      color += hex[Math.ceil(Math.random() * 16)];
    }
    return color;
  }
  
  let intervalID;
  
  const  startChangingColor  = function(){
    function changeBGC(){
      document.body.style.backgroundColor = randomColor();
    }
    intervalID = setInterval(changeBGC, 1000);
  }
  
  const  stopChangingColor = function(){
    clearInterval(intervalID);
    intervalID = null;
  }
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);