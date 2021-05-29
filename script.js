function addClass() {
  document.body.classList.add("sent");
}

sendLetter.addEventListener("click", addClass);

document.getElementById("sendLetter").addEventListener("click", function(event){
  event.preventDefault()
});