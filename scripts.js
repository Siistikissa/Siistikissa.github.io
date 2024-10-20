document.getElementById('sillyform').addEventListener('submit',function(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    alert("The cat will now decide your fate...");
    const data = Object.fromEntries(formData);
    console.log(Object.fromEntries(formData));
    if (Object.values(data).indexOf('YES') > -1){
        console.log("contains YES");
        document.getElementById("catpic").style.visibility = "hidden";
        getArt("catbrain.txt");//
    }
    else{
        console.log("contains something else");
    }
});
async function getArt(file){
    console.log("gotArt", file);
    try{
    var myObject = await fetch(file);
    } catch(error){
        console.log("Error fetching data: ", error);
    }
    let myArt = await myObject.text();
    document.getElementById("ascii").style.visibility = "visible";
    document.getElementById("ascii").innerHTML = myArt;
}
async function countBraincells(file) {
    try{
        var myObject = await fetch(file);
        } 
    catch(error){
        console.log("Error fetching data: ", error);
    }
    let mybrain = await myObject.text();
    let charCount = {};
    for(let char of mybrain){
        if(charCount[char]){
            charCount[char]++;
        }
        else{
            charCount[char] = 1;
        }
    }
    let brainText;
    for (let char in charCount) {
        brainText.concat(`${char} occurs ${charCount[char]} times\n`);
    }
    document.getElementById("braincell").style.visibility = "visible";
    document.getElementById("braincell").innerHTML = brainText;
}
let catPetStatus = false;
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
}