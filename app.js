function handleSubmit(){
    let form = document.getElementById('createTask');
    var superParent= document.createElement('div');
    superParent.classList.add('card',form.piriorty.value)
    superParent.style="width: 18rem";
    var parent = document.createElement('div');
    parent.className="card-body";
    var header5= document.createElement('h5');
    header5.className="card-title";
    header5.appendChild(document.createTextNode(form.taskName.value));
    var para= document.createElement('p');
    para.className="card-text";
    para.appendChild(document.createTextNode(form.taskDetails.value));
    parent.appendChild(header5);
    parent.appendChild(para);
    superParent.appendChild(parent);
    var grandParent = document.getElementById("cards");
    grandParent.appendChild(superParent);
    console.log(superParent);
}

function filterCards(piriorty){
    console.log(piriorty);
    var cards =  document.getElementById("cards").getElementsByClassName("card");
    var filterCards =  document.getElementById("filterResult");
    while (filterCards.hasChildNodes()) {
        filterCards.removeChild(filterCards.lastChild);
    }
    for(let i=0;i<cards.length;i++){
        
        if(cards[i].className.split(" ")[1]===piriorty){
            filterCards.appendChild(cards[i].cloneNode(true));
        }
    }
}