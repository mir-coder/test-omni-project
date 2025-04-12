class DropdownMenu {
    constructor(menuSelector = '.header__menu') {
        this.menuSelector = menuSelector;
        this.menu = document.querySelector(this.menuSelector);
        this.init();
    }

    init() {
        if (this.menu) {
            this.bindHoverEvents();
        } else {
            console.error(`Menu with selector "${this.menuSelector}" not found.`);
        }
    }

    bindHoverEvents() {
        const menuItems = this.menu.querySelectorAll('.header__menu-item.has-submenu');

        menuItems.forEach(item => {
            const submenu = item.querySelector('.submenu');
            let timeout; // Для задержки скрытия подменю

            // Показать подменю при наведении на родителя
            item.addEventListener('mouseenter', () => {
                clearTimeout(timeout); // Остановить таймер при наведении
                this.showSubMenu(submenu);
            });

            // Скрыть подменю при выходе курсора из родителя
            item.addEventListener('mouseleave', () => {
                timeout = setTimeout(() => {
                    this.hideSubMenu(submenu);
                }, 100); // Задержка перед скрытием
            });

            // Оставить подменю открытым при наведении на него
            submenu.addEventListener('mouseenter', () => {
                clearTimeout(timeout); // Остановить таймер при наведении на подменю
                this.showSubMenu(submenu);
            });

            // Скрыть подменю при выходе курсора из подменю
            submenu.addEventListener('mouseleave', () => {
                timeout = setTimeout(() => {
                    this.hideSubMenu(submenu);
                }, 100); // Задержка перед скрытием
            });
        });
    }

    showSubMenu(submenu) {
        submenu.style.display = 'block'; // Показываем подменю
    }

    hideSubMenu(submenu) {
        submenu.style.display = 'none'; // Скрываем подменю
    }
}
export default DropdownMenu;