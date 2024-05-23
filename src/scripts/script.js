const bill = document.getElementById("bill");
const people = document.getElementById("number_of_people");

const lockInputs = (e) => {
    if (!/^[0-9,]$|^Backspace$|^ArrowLeft$|^ArrowRight$/.test(e.key)) {
        e.preventDefault();
    }
}

bill.addEventListener("keydown", (e) => {
    lockInputs(e);
});

people.addEventListener("keydown", (e) => {
    lockInputs(e);
});



bill.addEventListener("input", (e) => {
})