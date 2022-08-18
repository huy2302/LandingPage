const btns = document.querySelectorAll('.five-btn-default');


for (const btn of btns) {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('five-btn-highlight')) {
            btn.classList.remove('five-btn-highlight');
            
        }
        else {
            btn.classList.add('five-btn-highlight');
        }
        // btn.classList.add('five-btn-highlight')
    })
}
