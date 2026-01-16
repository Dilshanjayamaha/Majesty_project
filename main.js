document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.card-horizontal');

  window.scroll_cards = function(value) { // must be global for onclick
    if(container){
      container.scrollBy({
        left: value,
        behavior: "smooth"
      });
    }
  }
});