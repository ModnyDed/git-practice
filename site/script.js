// Основной JavaScript файл для портфолио сайта

document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт успешно загружен!');
    
    // Инициализация функций
    initNavigation();
    initProjectCards();
    initScrollEffects();
    initFormHandlers();
});

// Функция для инициализации навигации
function initNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Подсветка активной страницы в навигации
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
        
        // Обработчик клика по ссылкам
        link.addEventListener('click', function(e) {
            console.log('Переход на страницу:', this.getAttribute('href'));
            // Можно добавить анимацию перехода или предзагрузку
        });
    });
}

// Функция для анимации карточек проектов
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Анимация при наведении
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Клик по карточке проекта
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('project-link')) {
                const link = this.querySelector('.project-link');
                if (link) {
                    console.log('Открытие проекта:', link.getAttribute('href'));
                    // В реальном проекте здесь может быть переход или модальное окно
                }
            }
        });
    });
}

// Функция для эффектов при скролле
function initScrollEffects() {
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Прячем/показываем header при скролле
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
        
        // Анимация появления элементов при скролле
        animateOnScroll();
    });
}

// Функция для анимации элементов при скролле
function animateOnScroll() {
    const animatedElements = document.querySelectorAll('.feature-card, .project-card, .timeline-item');
    
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        } else {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
        }
    });
}

// Функция для обработки форм (если будут добавлены)
function initFormHandlers() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Форма отправлена!');
            // Здесь может быть AJAX запрос или валидация
            alert('Сообщение отправлено! (это демо)');
            this.reset();
        });
    }
}

// Функция для плавного скролла к якорям
function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

    const body = document.body;
    body.classList.toggle('dark-theme');
    
    // Сохраняем выбор темы в localStorage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        console.log('Тема изменена на темную');

    } else {
        localStorage.setItem('theme', 'light');
        console.log('Тема изменена на светлую');
    }

}

// Загрузка сохраненной темы при загрузке страницы
function loadSavedTheme() {

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}


// Инициализация при загрузке
loadSavedTheme();

// Добавляем CSS для темной темы (опционально)
const darkThemeStyles = `
    <style id="dark-theme-styles">
        .dark-theme {
            background-color: #1a1a1a;
            color: #ffffff;
        }
        
        .dark-theme header {
            background-color: #2d2d2d;
        }
        }
        
        .dark-theme .feature-card,
        .dark-theme .experience {
            background-color: #2d2d2d;
        .dark-theme .skills h2,
        
        .dark-theme .feature-card p,
        .dark-theme .project-card p,
        .dark-theme .bio p,
        .dark-theme .skills li {
            color: #cccccc;
        }
    </style>
`;

// Добавляем стили для темной темы в документ
document.head.insertAdjacentHTML('beforeend', darkThemeStyles);
