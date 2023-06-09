function show() {
  const contactList = document.getElementById("contact-list");
  console.log(contactList); // selecionar tudo.

  const listElement = document.getElementsByTagName("li");
  console.log(listElement); // selecionar pelo nome da tag

  const contactInputs = document.getElementsByClassName("contact-input");
  console.log(contactInputs); // selecionar os elementos por classe

  const contacts = document.querySelectorAll("#contact-input > list > label");
  console.log(contacts); // selecionar elementos dentro de outras classes, igual ao CSS.
}
