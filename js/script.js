const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // 当目标元素进入可视区域时，添加动画属性来触发动画
            entry.target.style.animation = "fadeIn 2s ease-in-out 0s forwards";
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.4
});

const abstractsElement = document.querySelector('.abstracts');
observer.observe(abstractsElement);

const chartElement = document.querySelector('.chart');
observer.observe(chartElement);

const introductionItems = document.querySelectorAll('.introduction_item');
introductionItems.forEach(item => {
    observer.observe(item);
});

const backToTopBtn = document.querySelector('.back_to_top');
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});