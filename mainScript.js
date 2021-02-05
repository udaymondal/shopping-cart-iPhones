// + button for iPhone-Case
const caseIncrease = document.getElementById('case-increase');
caseIncrease.addEventListener('click', function(){
    handleProductChange(true);
});

// - button for iPhone-Case
const caseDecrease = document.getElementById('case-decrease');
caseDecrease.addEventListener('click', function(){
    handleProductChange(false);
});

// function for increase and decrease
function handleProductChange(isIncrease){
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = 0;
    if (isIncrease == true){
        caseNewCount = caseCount + 1;
    }
    if(isIncrease == false && caseCount>0){
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount *59;
    document.getElementById('case-total').innerText = '$ '+ caseTotal;
}