
(function(exports) {
function Note(msg) {
  this.message = msg;
}



function createMessageClick(){
  var message = new Note(document.forms.Form.message.value)
  notesList.add(message);

 //  window.onload = function() {
 //  document.getElementById('messages').innerHTML = document.forms.Form.message.value;
 // }

}
// exports.Note = Note;
// })(this);
exports.Note = Note;
})(this);


// var storedNames = JSON.parse(localStorage["notes"]);
