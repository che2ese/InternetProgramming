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
document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector('#animate-text');
    const originalText = '안녕하세요 ¡¡¡( •̀ ᴗ •́ )و!!!\nAI & Game Clients Developer를 꿈꾸는 김민성입니다.';
    text.textContent = '';

    let index = 0;
    let timer = setInterval(function() {
        if (index < originalText.length) {
            text.textContent += originalText[index];
            index++;
        } else {
            clearInterval(timer);
            
            // 한 줄 띄우기
            text.innerHTML += '<br>';

            // 모든 글자가 출력된 후 2초 후에 다 지우는 애니메이션 추가
            setTimeout(function() {
                let removeTimer = setInterval(function() {
                    if (text.textContent.length > 0) {
                        text.textContent = text.textContent.slice(0, -1); // 마지막 글자를 제거
                    } else {
                        clearInterval(removeTimer);

                        // 한 줄 띄우기
                        text.innerHTML += '<br>';

                        setTimeout(function() {
                            index = 0;
                            timer = setInterval(function() {
                                if (index < originalText.length) {
                                    text.textContent += originalText[index];
                                    index++;
                                } else {
                                    clearInterval(timer);
                                }
                            }, 100); // 한 글자씩 출력되는 간격을 100ms로 설정
                        }, 1000); // 모든 글자를 지운 후 2초 후에 다시 출력하는 애니메이션 시작
                    }
                }, 30); // 한 글자씩 지우는 간격을 50ms로 설정
            }, 2000); // 2초 후에 다 지우는 애니메이션 시작
        }
    }, 100); // 한 글자씩 출력되는 간격을 100ms로 설정
}); 

