let buttons = document.querySelectorAll("button");
let yourscore = document.getElementById("yourscore");
let computerscore = document.getElementById("Computerscore");
let yourchoice = document.getElementById("yourchoice");
let computerchoice = document.getElementById("computerchoice");
let wincall1 = document.getElementById("text1");
let mychoice = "";
let cpuchoice = "";


let click = document.getElementById("click2");
let bn5 = document.getElementById("btn5");
let btn = document.getElementById("btn1");
let body = document.getElementById("click1");




function computerchoices() {
    const items = ['✊', '🖐️', '✌️'];
    const random = Math.floor(Math.random() * 3);
    return items[random];
    console.log(random);

}

let val;

function show(x) {
    if (x == 0) {
        yourchoice.innerText = "✊";
        computerchoice.innerText = cpuchoice

    }
    if (x == 1) {
        yourchoice.innerText = "🖐️";
        computerchoice.innerText = cpuchoice
    }
    if (x == 2) {
        yourchoice.innerText = "✌️";
        computerchoice.innerText = cpuchoice
    }
}



buttons.forEach(function(button, keys) {
    button.addEventListener("click", function() {
        mychoice = button.innerHTML;
        cpuchoice = computerchoices();
        console.log("computerchoice" + cpuchoice);
        val = keys;
        show(val)
        let result = findwinner();



        click.classList.add("container2");
        body.classList.add("container1");









    });

});
btn.addEventListener("click", function() {
    click.classList.remove("container2");
    body.classList.remove("container1");
})




function findwinner() {
    let result = "";

    if (mychoice == cpuchoice) {
        result = "It is tie";
        yourscore.innerText = (parseInt(yourscore.innerText) + 1);
        computerscore.innerText = (parseInt(computerscore.innerText) + 1);
        wincall1.innerText = "The mathch is tie 😑"
    } else if (mychoice == "✊" && (cpuchoice == "🖐️" || cpuchoice == "✌️")) {
        result = "You win";
        yourscore.innerText = parseInt(yourscore.innerText) + 1;
        wincall1.innerText = "You won 😎"
    } else if (mychoice == "🖐️" && (cpuchoice == "✌️" || cpuchoice == "✊")) {
        result = "You lost";
        computerscore.innerText = (parseInt(computerscore.innerText) + 1);
        wincall1.innerText = "You lost 😓"
    }
    // else if(mychoice=="✌️"&&cpuchoice=="✊"){
    //     result="You lost";
    // }
    // else if(mychoice=="✌️"&& cpuchoice=="✌️"){
    //     result="You win";
    // }
    // else if(mychoice=="🖐️"&& cpuchoice=="✊"){
    //     result="You lost";
    // }


    return result;

}
console.log("result" + findwinner());