const MENU_INNER_HTML = `
<table class='menu'>
  <td><a class='menu_link' href='/index.html'>Homepage</a></td>
  <td><a class='menu_link' href='/glossary.html'>Glossary</a></td>
  <td><a class='menu_link' href='/aboutme.html'>About me</a></td>
  <td><a class='menu_link' href='/contactme.html'>Contact me</a></td>
</table>
<hr>`;

window.onload = function(ev) {
  let menuDivs = document.querySelectorAll("#menu_holder");

  for (let menuDiv of menuDivs)
  {
    menuDiv.innerHTML = MENU_INNER_HTML;
  }
};