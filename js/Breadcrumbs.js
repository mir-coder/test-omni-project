class Breadcrumbs {
    constructor(selector = '.breadcrumbs__list', containerSelector = '.catalog-details__content', asideSelector = '.catalog-details__aside') {
        this.breadcrumbsList = document.querySelector(selector);
        this.items = this.breadcrumbsList.querySelectorAll('.breadcrumbs__item');
        this.container = document.querySelector(containerSelector);
        this.aside = document.querySelector(asideSelector);
        this.init();
    }

    init() {
        this.updateBreadcrumbs(); // Инициализация при загрузке
        const resizeObserver = new ResizeObserver(() => this.updateBreadcrumbs()); // Наблюдение за изменением размера контейнера
        resizeObserver.observe(this.container); // Начинаем наблюдение за контейнером
        resizeObserver.observe(this.aside); // Наблюдаем за изменениями в соседнем блоке
    }

    updateBreadcrumbs() {
        const maxVisibleItems = 3; // Максимальное количество видимых элементов хлебных крошек
        const containerRect = this.container.getBoundingClientRect();
        const asideRect = this.aside.getBoundingClientRect();
        const availableWidth = asideRect.left - containerRect.left; // Доступная ширина для крошек
        const threshold = 768; // Порог для изменения логики отображения
    
        // Удаление предыдущих '...'
        const existingDots = this.breadcrumbsList.querySelector('.breadcrumbs__dots');
        if (existingDots) {
            this.breadcrumbsList.removeChild(existingDots);
        }
    
        // Если ширина контейнера меньше порога
        if (availableWidth <= threshold) {
            const totalItems = this.items.length;
    
            // Показываем только первый и последний элементы, если их больше
            if (totalItems > maxVisibleItems) {
                this.items.forEach((item, index) => {
                    if (index === 0 || index === totalItems - 1) {
                        item.classList.remove('hidden'); // Показываем первый и последний
                    } else {
                        item.classList.add('hidden'); // Скрываем все промежуточные
                    }
                });
    
                // Добавляем элемент '...' между первым и последним
                const dotsItem = document.createElement('li');
                dotsItem.className = 'breadcrumbs__dots';
                dotsItem.innerText = '❯ ...';
                this.breadcrumbsList.insertBefore(dotsItem, this.items[totalItems - 1]);
            } else {
                // Если элементов меньше или равно maxVisibleItems, показываем все
                this.items.forEach(item => item.classList.remove('hidden'));
            }
        } else {
            // Если ширина контейнера больше порога, показываем все элементы
            this.items.forEach(item => item.classList.remove('hidden'));
        }
    }
}

export default Breadcrumbs;
