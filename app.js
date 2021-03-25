// DOM Events
const playerScore = document.querySelector(".sc__player-count p");
const cpuScore = document.querySelector(".sc__cpu-count p");
const buttonChoices = document.querySelectorAll(".play-options button");
const btnReset = document.getElementById("reset-game");
const messageDisplay = document.querySelector(".display-winner p");
const playerImg = document.querySelector("#player-hand");
const cpuImg = document.querySelector("#cpu-hand");

let playerScoreCounter = 0;
let cpuScoreCounter = 0;

initialize();

//Do not show the reset button when game loads
btnReset.style.display = "none";

function initialize() {


    buttonChoices.forEach(button => {
        button.addEventListener("click", function () {
            //Show reset button
            btnReset.style.display = "block";

            cpuImg.src = "/assets/rock.png";
            playerImg.src = "/assets/rock.png";

            const choices = ["rock", "paper", "scissors"];

            //pick a random sign for the CPU
            const choice = Math.floor(Math.random() * 3);
            const cpuHand = choices[choice];

            const playerHand = this.textContent;

            setTimeout(() => {

                //Grab and Update the images
                cpuImg.src = `/assets/${cpuHand}.png`;
                playerImg.src = `/assets/${playerHand}.png`;

                determineWinner(playerHand, cpuHand);

            }, 2300);

            cpuImg.style.animation = "shakeCpuHand 2.5s ease";
            playerImg.style.animation = "shakePlayerHand 2.5s ease";

            resetAnimation();
        });
    });

    const determineWinner = (playerHand, cpuHand) => {

        if (playerHand === cpuHand) {
            messageDisplay.textContent = "It's a tie";
            return;
        } else if (playerHand === "rock") {
            if (cpuHand === "paper") {
                announceWinner("CPU");
                return;
            } else {
                announceWinner("Player");
                return;
            }
        }

        else if (playerHand === "paper") {
            if (cpuHand === "scissors") {
                announceWinner("CPU");
                return;
            } else {
                announceWinner("Player");
                return;
            }
        }
        else if (playerHand === "scissors") {
            if (cpuHand === "rock") {
                announceWinner("CPU");
                return;
            } else {
                announceWinner("Player");
                return;
            }
        }
    };

    //Announce Winner and update score
    const announceWinner = (player) => {
        messageDisplay.textContent = `${player} Wins`;
        player === "CPU" ? cpuScore.textContent = ++cpuScoreCounter : playerScore.textContent = ++playerScoreCounter;
    }


    // Reset the animation
    const resetAnimation = () => {
        const images = document.querySelectorAll("img");
        images.forEach(image => {
            image.addEventListener("animationend", function () {
                cpuImg.style.animation = "";
                playerImg.style.animation = "";
            });
        })
    }



    btnReset.addEventListener("click", function () {
        reset();
        this.style.display = "none";
    })

    //reset everything
    function reset() {
        playerScoreCounter = 0;
        cpuScoreCounter = 0;
        cpuScore.textContent = cpuScoreCounter;
        playerScore.textContent = playerScoreCounter;
        cpuImg.src = "/assets/rock.png";
        playerImg.src = "/assets/rock.png";

    }

}
