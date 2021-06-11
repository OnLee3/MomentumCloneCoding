// HTML에서 시간부분을 가져온다.
const clock = document.querySelector("h2#clock");

// 실행한 순간의 시간을 가져오는 function.
function getClock(){
    const date = new Date();
    // padStart를 붙여줌으로써, 두자리 숫자로 표기되게 함.
    // String을 붙여주지 않으면 Number로 취급되므로, padStart를 붙일 수 없음.  
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 시작하자마자 시간을 가져올 수 있도록 함수 실행. setInterval만으로 구성하면, 새로고침한 바로 직후에는 값을 가져올 수 없음.
getClock();
// 두개의 인자를 받는 function. 첫번쨰에는 실행할 함수를 받고, 두번째에는 ms단위로 시간간격을 받는다.
setInterval(getClock, 1000);