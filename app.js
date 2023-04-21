var generateBtn = document.querySelector('#generateBtn');
var resetBtn = document.querySelector('#reset');
var outputCard = document.querySelector('#outputCard');
var result = document.querySelector('#result');
var minimumNum = document.querySelector('#minimumNum');
var maximumNum = document.querySelector('#maximumNum');

let randomNumber = () => {
    let minNum = document.querySelector('#minNum').value;
    let maxNum = document.querySelector('#maxNum').value;
    
    if (minNum === '' || maxNum === '') {
        Swal.fire(
            'Opps!',
            'Enter Number',
            'error'
          )
        return;
    }

    minNum = parseInt(minNum);
    maxNum = parseInt(maxNum);
    minimumNum.innerHTML = minNum;
    maximumNum.innerHTML = maxNum;
    let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
    result.innerHTML = Math.round(randomNum);
    outputCard.classList.remove('d-none');
    resetBtn.classList.remove('d-none');
}

let reset = () => {
    outputCard.classList.add('d-none');
    resetBtn.classList.add('d-none');
    minNum.value ='';
    maxNum.value = '';
}

resetBtn.addEventListener('click', reset);
generateBtn.addEventListener('click', randomNumber);

// Dynamic year:
var projectYear = document.getElementById('projectYear');
let copyrightYear =  new Date().getFullYear();
projectYear.innerText = copyrightYear;