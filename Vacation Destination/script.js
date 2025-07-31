var detailsForm = document.querySelector('#destination_details_form');

detailsForm.addEventListener('submit' ,handleFormSubmit);

function handleFormSubmit(event){
    event.preventDefault();

    var destName = event.target.elements["name"].value;
    var destLocation = event.target.elements["location"].value;
    var destPhoto = event.target.elements["photo"].value;
    var destDesc = event.target.elements["description"].value;

for(var i = 0; i<detailsForm.length; i++){

    detailsForm.elements[i].value= "";
} 

    var destCard = createDestinationCard(destName,destLocation,destPhoto,destDesc)

    var wishListContainer = document.getElementById('destinations_container');
    if(wishListContainer.children.length === 0){
        document.getElementById('title').innerHTML = "My Wish List";
    }
    
    document.querySelector('#destinations_container').appendChild(destCard);

}

function createDestinationCard(name,location,photoURL,description){

    var card = document.createElement('div');
    card.className = "card";

    var img = document.createElement('img');
    img.setAttribute('alt', name);

    var constantPhotoUrl = "images/signpost.jpg";

    if(photoURL.length === 0){
        img.setAttribute('src', constantPhotoUrl); 
    }
    else{
        img.setAttribute('src', photoURL); 

    }

    card.appendChild(img);

    var cardBody = document.createElement('div');
    cardBody.className = "card-body";

    var cardTitle = document.createElement('h3');
    cardTitle.innerText = name ;
    cardBody.appendChild(cardTitle);

    var cardSubtitle = document.createElement('h4');
    cardSubtitle.innerText = location ;
    cardBody.appendChild(cardSubtitle);

    if(description.length !== 0){
        var cardText = document.createElement('p');
        cardText.className = "card-text"; 
        cardText.innerText = description ;
        cardBody.appendChild(cardText);
    }

    var cardDeleteBtn = document.createElement("button");
    cardDeleteBtn.innerText = "Remove";

    cardDeleteBtn.addEventListener("click", removeDestination);
    cardBody.appendChild(cardDeleteBtn);

    card.appendChild(cardBody);

    return card;

}

function removeDestination(event){
    var card = event.target.parentElement.parentElement;
    card.remove();
}
/* 
If you wanted to make it possible for users to edit the contents of a card they created, outline the steps you would need to take to implement that feature in this script.

There are a few ways to go about this, but one possible set of steps might include:

Add an "edit" button to each card.

Add an event listener for when the edit button is clicked.

Add a form that fills with the current card contents.

Add an event listener that captures the submission of the form and updates the card contents with updated card contents, and closes the form. */