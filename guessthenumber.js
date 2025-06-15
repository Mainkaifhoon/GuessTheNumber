
let randomNumber= Math.floor((Math.random()*100) +1)
result = document.getElementById('result-js');


let attemptCounts=document.getElementById('attempts')
let attempts=7;
document.getElementById('btn-js').onclick=()=>{
    
    console.log(randomNumber)
    const result = document.getElementById('result-js');

    const userNumber=Number(document.getElementById('input-js').value)
    if(userNumber>100 || userNumber<=0){
        result.innerText=`${userNumber} is not a valid between 1-100`
    }
    else{
        attempts--;
        attemptCounts.textContent=`Heart: ${attempts}`
        if(userNumber>randomNumber) {
            result.innerText= `${userNumber} is bigger than the Computer's number`
        }else if(userNumber<randomNumber){
            result.innerText= `${userNumber} is smaller than the Computer's number`
        }else{
            
            result.innerText=`'${userNumber}', Congrats You have guess the number`
            attempts=7
                attemptCounts.textContent = `Heart: ${attempts}`;

            return
        }
        if(attempts==0){
    document.getElementById('btn-js').disabled = true;
    result.textContent=`You have Lost the Game`
        }
    
}
}
document.getElementById('resetbtn').onclick=()=>{
    attempts = 7;
    randomNumber= Math.floor((Math.random()*100) +1)
    attemptCounts.textContent = `Heart: ${attempts}`;
    result.innerText = 'Enter a Number ';
    document.getElementById('btn-js').disabled = false;
    }