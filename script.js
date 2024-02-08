console.log("hello world");
function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth) - 85;
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight) - 48;
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}

document.getElementById('noButton').onclick = () => {
    moveButton();
}
document.getElementById('noButton').onmouseover = () => {
    moveButton();
}
document.getElementById('yesButton').onclick = () => {
    nextPage();
}

const envelope = document.querySelector('.envelope-wrapper');
        envelope.addEventListener('click', () => {
            envelope.classList.toggle('flap');
        });