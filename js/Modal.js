class Modal {
    constructor() {
        this.modals = document.querySelectorAll('.modal'); // Селектор модальных окон
        this.initModals(); // Инициализация модальных окон
        this.initForms(); // Инициализация форм
        this.initTriggers(); // Инициализация триггеров для открытия модальных окон
    }

    initModals() {
        this.modals.forEach(modal => {
            const closeButton = modal.querySelector('.modal__button');
            closeButton.addEventListener('click', () => this.close(modal));
        });
    }

    initForms() {
        const forms = document.querySelectorAll('.feedback-form'); // Получаем все формы
        forms.forEach(form => {
            form.addEventListener('submit', (event) => {
                event.preventDefault(); // Отменяем стандартное поведение отправки формы
                this.handleFormSubmit(form); // Обработка отправки формы
            });
        });
    }

    initTriggers() {
        const triggerLinks = document.querySelectorAll('.open-modal-link'); // Селектор для ссылок

        triggerLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Отменяем переход по ссылке
                const modalId = link.getAttribute('href'); // Получаем идентификатор модального окна из href
                const modal = document.querySelector(modalId); // Находим модальное окно по идентификатору
                if (modal) {
                    this.open(modal); // Открываем соответствующее модальное окно
                }
            });
        });
    }

    handleFormSubmit(form) {
        // Проверяем, заполнены ли поля формы
        const inputs = form.querySelectorAll('input, textarea'); // Собираем все input и textarea
        let allFilled = true; // Переменная для отслеживания заполненности

        inputs.forEach(input => {
            if (!input.value.trim()) {
                allFilled = false; // Если есть незаполненные поля
            }
        });

        // Если все поля заполнены, показываем модальное окно успешного завершения
        if (allFilled) {
            this.showSuccessModal(); // Форма заполнена корректно
        } else {
            this.showErrorModal(); // Форма заполнена некорректно
        }

        // Сбрасываем форму (дополнительно, если необходимо)
        form.reset(); // Сбрасываем форму
    }

    showSuccessModal() {
        const successModal = document.getElementById('modal-request--successful');
        this.closeAllModals(); // Закрываем все модальные окна
        this.open(successModal); // Открываем модальное окно успеха
    }

    showErrorModal() {
        const errorModal = document.getElementById('modal-request--error');
        this.closeAllModals(); // Закрываем все модальные окна
        this.open(errorModal); // Открываем модальное окно ошибки
    }

    open(modal) {
        modal.style.display = 'block'; // Показываем модальное окно
    }

    close(modal) {
        modal.style.display = 'none'; // Скрываем модальное окно
    }

    closeAllModals() {
        this.modals.forEach(modal => this.close(modal)); // Закрываем все модальные окна
    }
}

export default Modal;
