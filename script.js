
$('.enter').on('click', prependCard);
$('.read-button').on('click', readButton);
$('.delete-button').on('click', deleteButton);

$( document ).ready(function() {
    console.log( "ready!" );
    $('.enter').prop('disabled', true);
});

function enterPressed() {
  var titleInput = $('.title').val();
  var urlInput = $('.url').val();
  prependCard(titleInput, urlInput);
}

function prependCard(title, url) {
  $('main').prepend(`<article class="card">
          <h2 class="title">${title}</h2>
          <hr />
          <a class="urllink" target="_blank" href="${url}">${url}</a>
          <hr />
          <section class="read-delete-container">
            <button class="read">Read</button>
            <button class="delete">Delete</button>
          </section>
        </article>`);
}

function readButton() {
  console.log("read button clicked");
}

function deleteButton() {
  console.log("delete button clicked");
$(this).closest('article').remove();
}

function clearInput() {

}

function missingInput() {

}

function markAsRead() {

}

function enterDisabled() {

}

function cardTotal() {

}

function readUnread() {

}

function clearRead() {

}

function isUrl() {

}
