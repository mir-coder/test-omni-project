class CatalogGallery {
    constructor() {
        this.items = document.querySelectorAll('.catalog-gallery__item'); // Получаем все элементы с товарами
        this.maxHeight = 170; // Фиксированная максимальная высота для контента

        this.items.forEach(item => {
            this.contentElement = item.querySelector('.catalog-gallery__content'); // Получаем контент внутри каждого элемента
            this.titleElement = item.querySelector('.catalog-gallery__title'); // Получаем заголовок товара
            
            if (this.contentElement && this.titleElement) {
                this.summaryItems = this.contentElement.querySelectorAll('.summary__item');
                if (this.titleElement.offsetHeight > 40) { // Проверяем высоту заголовка
                    this.checkContentHeight(this.contentElement, this.summaryItems);
                }
            }
        });
    }

    checkContentHeight(contentElement, summaryItems) {
        // Получаем фиксированную высоту блока контента
        const contentHeight = contentElement.offsetHeight;

        // Если высота контента превышает максимально допустимую высоту, скрываем последний элемент
        if (contentHeight > this.maxHeight && summaryItems.length > 0) {
            this.hideLastSummaryItem(summaryItems);
        }
    }

    hideLastSummaryItem(summaryItems) {
        const lastItemIndex = summaryItems.length - 1;
        summaryItems[lastItemIndex].classList.add('hidden'); // Скрыть последний элемент
    }
}

export default CatalogGallery;
