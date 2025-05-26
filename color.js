const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e.target);
        console.log(e);
        if(e.target.id === 'red'){
            body.style.backgroundColor = 'red';
        }
        else if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue';
        }
        else if(e.target.id === 'purple'){
            body.style.backgroundColor = 'purple';
        }
        else if(e.target.id === 'grey'){
            body.style.backgroundColor = 'grey';
        }else{
            body.style.backgroundColor = 'white';
        }
    })
})