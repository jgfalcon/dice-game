document.querySelector(".button").addEventListener("click", myFunction)

function myFunction() {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1
    var randomNumber2 = Math.floor(Math.random() * 6) + 1
    var diceNumber1 = "images/dice" + randomNumber1 + ".png"
    var diceNumber2 = "images/dice" + randomNumber2 + ".png"
    
    document.querySelectorAll("img")

    if (randomNumber1 !== randomNumber2) {

        document.querySelectorAll("img")[0].setAttribute("src", diceNumber1)
        document.querySelectorAll("img")[1].setAttribute("src", diceNumber2)

        if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").innerHTML = "🏆 Player 1 Won!"
        } else {
            document.querySelector("h1").innerHTML = "🏆 Player 2 Won!"
        }


        // switch (randomNumber1) {
        //     case 1:
        //         document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png")
        //         break;
        //     case 2:
        //         document.querySelectorAll("img")[0].setAttribute("src", "images/dice2.png")
        //         break;
        //     case 3:
        //         document.querySelectorAll("img")[0].setAttribute("src", "images/dice3.png")
        //         break;
        //     case 4:
        //         document.querySelectorAll("img")[0].setAttribute("src", "images/dice4.png")
        //         break;
        //     case 5:
        //         document.querySelectorAll("img")[0].setAttribute("src", "images/dice5.png")
        //         break;
        //     case 6:
        //             document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png")
        //             break;
        //     default:
        //         break;

        // }

        // switch (randomNumber2) {
        //     case 1:
        //         document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png")
        //         break;
        //     case 2:
        //         document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png")
        //         break;
        //     case 3:
        //         document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png")
        //         break;
        //     case 4:
        //         document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png")
        //         break;
        //     case 5:
        //         document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png")
        //         break;
        //     case 6:
        //             document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png")
        //             break;
        //     default:
        //         break;
        // }

    } else {

        document.querySelector("h1").innerHTML = "🙈 Its a DRAW!"

        document.querySelectorAll("img")[0].setAttribute("src", diceNumber1)
        document.querySelectorAll("img")[1].setAttribute("src", diceNumber2)

    }

}




