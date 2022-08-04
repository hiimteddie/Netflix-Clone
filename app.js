let isLanguageOpen = false;

function toggleLanguage() {
    if (isLanguageOpen) {
        isLanguageOpen = false;
        return document.body.classList.remove("nav__language--menu--open")
    }
    isLanguageOpen = true;
    document.body.classList += " nav__language--menu--open";
}
