const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');

btn.forEach( (btn) => {
  btn.addEventListener('mouseover', function(events){
    if(events.target.id === 'grey'){
      body.style.backgroundColor = events.target.id
    }
    if(events.target.id === 'white'){
      body.style.backgroundColor = events.target.id
    }
    if(events.target.id === 'blue'){
      body.style.backgroundColor = events.target.id
    }
    if(events.target.id === 'yellow'){
      body.style.backgroundColor = events.target.id
    }
    if(events.target.id === 'purple'){
      body.style.backgroundColor = events.target.id
    }
  })
})