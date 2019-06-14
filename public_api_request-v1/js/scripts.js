const $searchContainerDiv = $("div.search-container");
const $gallery = $("div#gallery");
const $form = $("<form action='#' method='get'>");
const $search = $('<input type="search" id="search-input" class="search-input" placeholder="Search...">');
const $button = $('<input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">');
$form.append($search);
$form.append($button);
$searchContainerDiv.append($form)

console.log($gallery)


$(document).ready(function() {
  $.getJSON("https://randomuser.me/api/?results=12&nat=us", function(data){
    // console.log(data);
    //Creating the directory
    $.each(data.results, (index, person) => {
      let image = person.picture.large;
      let name = person.name;
      let email = person.email;
      let location = person.location;
      let $imageDIV = $("<div class='card-img'>");
      $imageDIV.append(`<img class='card-img' src=${image} alt='profile picture'>`);
      let $container = $("<div class='card-info-container'>");
      $container.append(`<h3 id='name' class='card-name cap'>${name.first} ${name.last}</h3>`);
      $container.append(`<p class='card-text'>${email}</p><p class='card-text cap'>${location.city}, ${location.state}</p>`);
      let $div = $("<div>").addClass("card").append($imageDIV);
      console.log($div);
      $div.append($container);
      $gallery.append($div);
      $div.on("click", ()=> console.log($(this)));
    });
  });
});