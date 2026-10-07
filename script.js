// Intersection Observer for Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show') }), { threshold: .1 });
document.querySelectorAll('.hidden').forEach(el => io.observe(el));

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const io1 = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show') }), { threshold: .1 });
document.querySelectorAll('.hidden').forEach(el => io1.observe(el));


const copyBtn = document.getElementById('copyEmail');
if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
        const label = copyBtn.querySelector('span');
        try {
            await navigator.clipboard.writeText(copyBtn.dataset.email);
            label.textContent = 'Copied!';
        } catch (e) {
            label.textContent = copyBtn.dataset.email;
        }
        setTimeout(() => (label.textContent = 'Copy Email'), 2000);
    });
}