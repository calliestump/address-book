function AddBook() {
  this.contacts = [];
}

AddBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
}

function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName + " - " + this.phoneNumber;
}
$(document).ready(function() {
  let book = new AddBook();
  $("form#newContact").submit(function(event) {
    event.preventDefault();
    let contact = new Contact($("input#newFirstName").val(), $("input#newLastName").val(), $("input#newPhoneNumber").val());
    book.addContact(contact);
    console.log(book.contacts);
    $("#contacts").append("<li>" + contact.fullName(contact) + "</li>");
  });
});