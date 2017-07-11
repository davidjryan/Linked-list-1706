
$('.enter').on('click', prependCard)
$('.read').on('click', readButton)
$('.delete').on('click', deleteButton)

$(document).ready()

function enterPressed() {
  var titleInput = $('.title').val()
  var urlInput = $('.url').val()

  prependCard(titleInput, urlInput)



}

function prependCard(title, url) {
  $('.main').prepend(`<article class="card">
          <h2 class="title">${title}</h2>
          <hr />
          <a class="urllink" target="_blank" href="${url}">${url}</a>
          <hr />
          <section class="read-delete-container">
            <button class="read">Read</button>
            <button class="delete">Delete</button>
          </section>
        </article>`)
}

function readButton() {

}

function deleteButton() {

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
