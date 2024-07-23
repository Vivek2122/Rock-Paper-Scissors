const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const userscore = document.querySelector('#userscore')
const compscore = document.querySelector('#compscore')
const userturn = document.querySelector('.userturn')
const compturn = document.querySelector('.compturn')

let arr = ['rock', 'paper', 'scissors']

let userplay, compplay
console.log(compplay);

const play = function(arr){
    let num = Math.floor((Math.random() * 3))
    console.log(num);
    return arr[num]
}

const createfn = (userplay, compplay) => {
    let userchild = document.createTextNode(userplay)
    let compchild = document.createTextNode(compplay)

    let user1 = document.createElement('div')
    let comp1 = document.createElement('div')

    user1.classList.add('newelement')
    comp1.classList.add('newelement')

    user1.appendChild(userchild)
    comp1.appendChild(compchild)

    userturn.insertBefore(user1, userturn.firstChild)
    compturn.insertBefore(comp1, compturn.firstChild)

    Array.from(userturn.children).forEach(child => {
        child.style.backgroundColor = '';
    });

    if (userturn && userturn.firstChild) {
        userturn.firstChild.style.backgroundColor = 'red';
        userturn.firstChild.style.borderRadius = '.2em';
    }

    Array.from(compturn.children).forEach(child => {
        child.style.backgroundColor = '';
    });
    
    if (compturn && compturn.firstChild) {
        compturn.firstChild.style.backgroundColor = 'red';
        compturn.firstChild.style.borderRadius = '.2em';
    }
}

rock.addEventListener('click', (e) => {
    userplay = 'rock'
    compplay = play(arr)
    
    createfn(userplay, compplay)

    if(compplay == 'rock')
    {
        console.log(`same`);
    }
    else if(compplay == 'paper')
    {
        let val = parseInt(compscore.innerHTML);
        val++;
        compscore.innerHTML = val;
    }
    else{
        let val = parseInt(userscore.innerHTML);
        val++;
        userscore.innerHTML = val;
    }
})


paper.addEventListener('click', (e) => {
    userplay = 'paper'
    compplay = play(arr)

    createfn(userplay, compplay)

    if(compplay == 'rock')
    {
        let val = parseInt(userscore.innerHTML);
        val++;
        userscore.innerHTML = val;
    }
    else if(compplay == 'paper')
    {
        console.log(`same`);
    }
    else{
        let val = parseInt(compscore.innerHTML);
        val++;
        compscore.innerHTML = val;
    }
})


scissors.addEventListener('click', (e) => {
    userplay = 'scissors'
    compplay = play(arr)

    createfn(userplay, compplay)

    if(compplay == 'rock')
    {
        let val = parseInt(compscore.innerHTML);
        val++;
        compscore.innerHTML = val;
    }
    else if(compplay == 'paper')
    {
        let val = parseInt(userscore.innerHTML);
        val++;
        userscore.innerHTML = val;
    }
    else{
        console.log(`same`);
    }
})


