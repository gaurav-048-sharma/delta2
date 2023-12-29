
let count = 0;
function func() {
    count++;
    let p = document.querySelector(".para");
    p.innerText = count;
    if (count % 2 == 0) {
        // Change the text color to red when the number is even
        p.style.color = "red";

    } else {
        // Change the text color back to black when the number is odd
        p.style.color = "blue";
    }

}
let btn = document.querySelector("button");
function func() {
    btn.addEventListener("click", () => {
        count++;
        let random = Math.floor(Math.random()*9)+1;
        let random1 = Math.floor(Math.random()*9)+1;
        let random2 = Math.floor(Math.random()*9)+1;
        let p = document.querySelector(".para");
        let p1 = document.querySelector(".param");
        let p2 = document.querySelector(".params");
        p.innerText = random;
        p1.innerText = random1;
        p2.innerText = random2;
    })
}
func();
