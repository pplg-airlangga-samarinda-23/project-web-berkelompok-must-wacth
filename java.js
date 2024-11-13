var baru = document.getElementsByClassName('nav-item');
var loby =document.getElementById('loby');
var content =document.getElementById('main-content-window-user');
var room_numb;

Array.from(baru).forEach(function(item) {
    item.addEventListener('click', function() {
        let value=this.getAttribute('data-value')
        console.log(value)

        Array.from(baru).forEach(function(innerItem) {
            innerItem.style.backgroundColor = 'transparent';});

        if(value==1){wind1fun();this.style.backgroundColor="#8ABFA3";room_numb=1;}
        else if(value==2){wind2fun();this.style.backgroundColor="#8ABFA3";room_numb=2;}
        else if (value ==3){wind3fun();this.style.backgroundColor="#8ABFA3";room_numb=3;}
        localStorage.setItem("room_number",room_numb);
    });
});


function wind1fun (){
content.style.display='none';
loby.style.display='block';
}

function wind2fun(){
    content.style.display='block';
    loby.style.display='none';
    // bikin code khusus untuk ngebuat foto dan isinya sesuai nama window
    var g;
    var imager = document.getElementsByClassName("movief");
    var title_card=document.querySelectorAll(".title-card");
    // Loop through each image and update the src
    for (var x = 0; x < imager.length; x++) {
        g="test";
        title_card[x].innerText = g;
        imager[x].src = "foto-anime/anime" + (x + 1) + ".jpg"; // Set the src to foto-drakor/x.png
    }

}

function wind3fun() {
    content.style.display = 'block';
    loby.style.display = 'none'; 

    var imager = document.getElementsByClassName("movief");
    var title_card=document.querySelectorAll("title-card");
    // Loop through each image and update the src
    for (var x = 0; x < imager.length; x++) {
        // title_card[x].innerText = "Title " + (x + 1);
        imager[x].src = "foto-drakor/" + (x + 1) + ".png"; // Set the src to foto-drakor/x.png
    }

}

var searchInput = document.getElementById("search-bari"); // Get the search input element
searchInput.addEventListener("keydown", function(event) {

  if (event.key === "Enter") {

    // Trigger the form submission logic here (e.g., submit the form)

this.form.submit(); 

  }

});