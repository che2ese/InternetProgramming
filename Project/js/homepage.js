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
document.addEventListener('DOMContentLoaded', () => {
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(skillLevel => {
        const width = skillLevel.style.width;
        skillLevel.style.setProperty('--skill-level-width', width);
        skillLevel.style.width = '0';
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevels = entry.target.querySelectorAll('.skill-level');
                skillLevels.forEach(skillLevel => {
                    skillLevel.style.animation = 'fillSkillBar 2s ease forwards'; // 애니메이션 시간 2초로 설정
                });
            } else {
                const skillLevels = entry.target.querySelectorAll('.skill-level');
                skillLevels.forEach(skillLevel => {
                    skillLevel.style.width = '0';
                    skillLevel.style.animation = 'none';
                });
            }
        });
    }, {
        threshold: 0.5
    });

    const skillSections = document.querySelectorAll('.skill-section');
    skillSections.forEach(section => observer.observe(section));
});

