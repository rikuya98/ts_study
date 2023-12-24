var INCREMENT = 1;
var DECREMENT = -1;
function updateMeter(counterValue) {
    var meter = document.querySelector('#meter');
    var maxWidth = 200;
    var newWidth = (maxWidth / 10) * counterValue;
    meter.setAttribute('width', "".concat(newWidth));
}
var counterElement = document.querySelector('#counter');
var levelElement = document.querySelector('#LevelCount');
function updateCounter(amount) {
    if (!counterElement.textContent || !levelElement.textContent) {
        console.error('必要な要素が存在しません。');
        return;
    }
    var currentValue = parseInt(counterElement.textContent);
    var levelValue = parseInt(levelElement.textContent);
    if (amount > 0 && currentValue < 10) {
        currentValue += amount;
    }
    else if (amount < 0 && currentValue > 0) {
        currentValue += amount;
    }
    else if (currentValue === 10) {
        levelElement.textContent = "".concat(levelValue + 1);
        currentValue = 0;
        window.alert('おめでとうございます！レベルアップしました！');
    }
    counterElement.textContent = "".concat(currentValue);
    updateMeter(currentValue);
}
var countUpButton = document.querySelector('#countup');
countUpButton.addEventListener('click', function () { return updateCounter(INCREMENT); });
var countDownButton = document.querySelector('#countdown');
countDownButton.addEventListener('click', function () { return updateCounter(DECREMENT); });
