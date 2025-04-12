class LanguageSelector {
    constructor() {
        this.languageItems = document.querySelectorAll('.lang__item');
        this.init();
    }

    init() {
        this.languageItems.forEach(item => {
            item.addEventListener('click', () => this.selectLanguage(item));
        });
    }

    selectLanguage(selectedItem) {
        this.languageItems.forEach(item => item.classList.remove('selected'));
        selectedItem.classList.add('selected');
    }
}

export default LanguageSelector;
