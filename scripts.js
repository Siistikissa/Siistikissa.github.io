document.getElementById('sillyform').addEventListener('submit',function(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    alert("The cat will now decide your fate...");
    // Asynchronous form submission using fetch
    fetch('/submit', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      // Handle response data
    })
    .catch(error => {

      // Handle errors
    });
});
catPetStatus = false;
function petCat(params) {
    catPetStatus = true;
}
setInterval(petTheCat, 10000);
function petTheCat(params) {
    alert("Pet the cat!");
    catPetStatus = false;
    setTimeout(didPetCat, 5000);    
}
function didPetCat(params) {
    if (!catPetStatus){
        damnation()
    }
    else{
        vis.numOfPets += 1;
    }
}
function damnation() {
    location.replace("index.html")
    let accepted = true;
    while(accepted){
        let apology = prompt("Apologize from the sillycat. Type: I am sorry.");
        if (apology == "I am sorry."){ 
            accepted=false;
        }
    }
}
function visitor(){
    this.timeEntered = new Date();
    this.numOfPets = 0;
}
let vis = new visitor();
function timeSpent(){
    return vis.timeEntered - Date();
}
function displayData(){
    //time = timeSpent();
    alert("You have spent: " + time + "seconds on this site and you have pet the cat: " + vis.numOfPets +" times.")
}
