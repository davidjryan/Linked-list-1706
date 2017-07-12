
$('input').on('keyup', enterDisabled);
$('.enter').on('click', enterPressed);
$('.clear').on('click', clearRead);
$('main').on('click', '.read-button', readButton);
$('main').on('click', '.delete-button', deleteButton);


$( document ).ready(function() {
    console.log( "ready!" );
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
    cardTotal();
    clearInput();
  }
}

function prependCard(title, url) {
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
  cardTotal();
}

function deleteButton() {
  $(this).closest('article').remove();
  cardTotal();
}

function clearInput() {
  $('.title').val('');
  $('.url').val('');
  $('.enter').prop('disabled', true);
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
  var articleCount = $('article').length;
  var readCount = $('.read').length;
  var unreadCount = articleCount - readCount;

  $('.card-counter').text("Total Cards: " + articleCount)
  $('.read-counter').text("Total Read: " + readCount)
  $('.unread-counter').text("Total Unread: " + unreadCount)
}


function clearRead() {
  $('.read').remove();
  cardTotal();
}

function isUrl(url) {
  var regexQuery = "^(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
  var pattern = new RegExp(regexQuery,"i");
  return pattern.test(url);
}
