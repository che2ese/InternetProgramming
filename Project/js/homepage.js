// 프로필 카드 확대/축소 토글 함수
function toggleProfileCard() {
    const profileCard = document.querySelector('.profile-card');
    profileCard.classList.toggle('active');
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});