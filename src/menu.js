
(() => {
  // Скрипт выберает элементы, где стоит "[data-menu-button]" (в данном случае "бургер")
  const menuBtnRef = document.querySelector("[data-menu-open]");

  // Скрипт выберает так же элементы, где стоит "[data-menu]" (в данном случае "меню")
  const mobileMenuRef = document.querySelector("[data-menu]");


  // Скрипт задает правило: после клика мышью бдет происходить действие, описанное ниже
  menuBtnRef.addEventListener("click", () => {
   
    // Делает aria-expanded из false в true
      const expanded =
          menuBtnRef.getAttribute("aria-expanded") === "true" || false;

      // скрипт добавляет и удаляет класс is-open тем элементам, у которого есть "[data-menu-button]"
      menuBtnRef.classList.toggle("is-open");

      // Делает aria-expanded из false в true
      menuBtnRef.setAttribute("aria-expanded", !expanded);

      // скрипт добавляет и удаляет класс is-open тем элементам, у которого есть "[data-menu]"
      mobileMenuRef.classList.toggle("is-open");
    
      document.body.classList.toggle("menu-open");
    });
})();



(() => {
  const refs = {
    closeModalBtn: document.querySelector("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),
  };

  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("menu-open");
    refs.modal.classList.toggle("is-open");
  }
})();
