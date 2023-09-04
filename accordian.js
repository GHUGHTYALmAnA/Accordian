const accordian = document.querySelectorAll('.accordian');
accordian.forEach(acc => {
    const icon = acc.querySelector('.icon');
    const answer = acc.querySelector('.answer');
    acc.addEventListener('click',()=>{
        icon.classList.toggle('active');
        answer.classList.toggle('active');
    })
})