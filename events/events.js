
    // document.getElementById('image1').onclick = function(){
    //     alert(`This is image 1`);
    // }

    // document.getElementById('image2').addEventListener('click', function(){
    //     alert(`This is image 2`);
    // })

    // document.getElementById('image3').addEventListener('mouseover', function(e){
    //     alert(`This is image 3`);
    //     console.log(e);
    //     console.log(e.target);
    // })



    //type, timeStamp, defaultPrevented, target, toElement, srcElement
    //currentTarget, clientX, clientY, screenX, screenY
    //altkey, shiftkey, ctrlkey, keyCode

    // EVENT PROPAGATION 1: event bubbling (false is set default)

    // document.getElementById('image4').addEventListener('click', function(e){
    //     console.log('clicked on image4');
    // }, false) //1

    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log(`clicked on ul`);
    // }) //2

    // EVENT PROPAGATION 2: event CAPTURING (false is set default so change it to true)

    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log(`clicked on ul`);
    // }, true) //1

    // document.getElementById('image4').addEventListener('click', function(e){
    //     console.log(`clicked on image4`);
    // }, true) //2


    //STOP EVENT PROPAGATION

    // document.getElementById('image4').addEventListener('click', function(e){
    //     console.log('clicked on image4');
    //     e.stopPropagation(); // stop event bubbling
    // }, false) //1

    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log(`clicked on ul`);
    // }) 

    //  document.getElementById('images').addEventListener('click', function(e){
    //     console.log(`clicked on ul`);
    //     e.stopPropagation(); // stop event capturing
    // }, true) //1

    // document.getElementById('image4').addEventListener('click', function(e){
    //     console.log(`clicked on image4`);
    // }, true) //2

    // document.getElementById('google').addEventListener('click', function(e){
    //     console.log('google doodle clicked');
    //     e.preventDefault(); //to stop event listen
    // }, false);

    document.querySelector('#images').addEventListener
    ('click', function(e){
        // console.log(e.target.parentNode);
        console.log(e.target.target);
        if (e.target.tagName === 'IMG') {
            let removeIt = e.target.parentNode;
            removeIt.remove();  
            // removeIt.parentNode.removeChild(removeIt);
        }        
    }, false)
    
