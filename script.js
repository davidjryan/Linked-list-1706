var recordCount = 0;

$('input').on('keyup', enterDisabled);
$('.enter').on('click', enterPressed);
$('main').on('click', '.read-button', readButton);
$('main').on('click', '.delete-button', deleteButton);


$( document ).ready(function() {
    console.log( "ready!" );
    // $('article').remove();
    $('.enter').prop('disabled', true);
});

function enterPressed() {
  var titleInput = $('.title').val();
  var urlInput = $('.url').val();
  if(titleInput === "") {
    alert("You are missing the title!");
  } else if (urlInput === ""){
    alert("You are missing the web url!");
  } else if (!isUrl(urlInput)) {
    alert("Your url is invalid!");
  } else {
    prependCard(titleInput, urlInput);
    clearInput();
  }
}

function prependCard(title, url) {
  $('.card-counter').html(function(i, val) { return val*1+1 });
  $('main').prepend(`<article class="card">
          <h2 class="title">${title}</h2>
          <hr />
          <a class="urllink" target="_blank" href="${url}">${url}</a>
          <hr />
          <section class="read-delete-container">
            <button class="read-button">Read</button>
            <button class="delete-button">Delete</button>
          </section>
        </article>`);
}

function readButton() {
  $(this).closest('article').toggleClass('read');
  $('.read-counter').html(function(i, val) { return val*1+1 });
}

function deleteButton() {
  $(this).closest('article').remove();
}

function clearInput() {
  $('.title').val('');
  $('.url').val('');
  $('.enter').prop('disabled', true);
}

function markAsRead() {

}

function enterDisabled() {
  if($('.title').val() !== '' &&
    $('.url').val() !== '') {
      $('.enter').prop('disabled', false);
  } else {
    console.log("failed enter");
    $('.enter').prop('disabled', true);
  }
}

function cardTotal() {
  var articleList = document.querySelectorAll('article');
    console.log(articleList);
}

function readUnread() {

}

function clearRead() {

}

function isUrl(url) {
  var regexQuery = "^(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
 var pattern = new RegExp(regexQuery,"i");
 return pattern.test(url);
}
