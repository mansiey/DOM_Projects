const btn = document.getElementById("toggleButton");

let changeText = "to Dark🌚";

function change() {
    return changeText === "to Dark🌚" ? "to Light💡" : "to Dark🌚";
}

btn.addEventListener('click', function(){
    document.body.classList.toggle("dark");
    changeText = change();
    toggleButton.innerText = "Toggle " + changeText;
})