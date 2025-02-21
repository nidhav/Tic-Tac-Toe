let b1 = document.querySelectorAll(".box");
let r1 = document.querySelector(".re_st");
let t1 = document.querySelector(".h2");
let s1 = document.querySelector(".s_st");
let t2 = document.querySelector(".h1");
let r = document.querySelector(".game");
let n1 = document.querySelector(".n_st");

let p1 = true;

const winningpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

s1.addEventListener("click", () => {
    t2.classList.add("hide");
    s1.classList.add("hide");
    r.classList.remove("hide");
    r1.classList.remove("hide"); // Show the reset button
});

b1.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (p1) {
            box.innerText = "O";
            p1 = false;
        } else {
            box.innerText = "X";
            p1 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

function checkwinner() {
    for (let pattern of winningpatterns) {
        let var1 = b1[pattern[0]].innerText;
        let var2 = b1[pattern[1]].innerText;
        let var3 = b1[pattern[2]].innerText;
        if (var1 !== "" && var2 !== "" && var3 !== "") {
            if (var1 === var2 && var2 === var3) {
                console.log("winner");
                t1.innerText = `Winner is ${var1}`; // Show the winner
                t1.classList.remove("hide");
                n1.classList.remove("hide");
                for (let box of b1) {
                    box.disabled = true;
                }
            }
        }
    }
}

r1.addEventListener("click", () => {
    for (let box of b1) {
        box.innerText = "";
        box.disabled = false;
    }
    p1 = true;
    t1.classList.add("hide"); // Hide the winner message
    n1.classList.add("hide"); // Hide the new game button
});

n1.addEventListener("click", () => {
    for (let box of b1) {
        box.innerText = "";
        box.disabled = false;
    }
    p1 = true;
    t1.classList.add("hide"); // Hide the winner message
    n1.classList.add("hide"); // Hide the new game button
    t1.innerText = ""; // Clear the winner text
});
