let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    const totalSlides = slides.length;
    const slideWidth = slides[0].clientWidth;
    const offset = -index * slideWidth;
    document.querySelector('.slides').style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let score = 0;
    const answers = {
        q1: 'c',
        q2: 'b',
        q3: 'b',
        q4: 'c',
        q5: 'c',
        q6: 'c',
        q7: 'c',
        q8: 'a',
        q9: 'b',
        q10: 'b'
    };

    for (let [key, value] of Object.entries(answers)) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === value) {
            score++;
        }
    }

    document.getElementById('result').textContent = `Skor Anda: ${score}/${Object.keys(answers).length}`;
});

showSlide(currentSlide);
