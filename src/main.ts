const INCREMENT: number = 1;
const DECREMENT: number = -1

function updateMeter(counterValue: number) {
    const meter = document.querySelector('#meter')! as SVGElement;
    const maxWidth = 200;
    const newWidth: number = (maxWidth / 10) * counterValue;
    meter.setAttribute('width', `${newWidth}`);
}

const counterElement = document.querySelector('#counter')! as HTMLParagraphElement ;
const levelElement = document.querySelector('#LevelCount')! as HTMLParagraphElement;

function updateCounter(amount: number) {
    if (!counterElement.textContent || !levelElement.textContent){
        console.error('必要な要素が存在しません。')
        return
    }
    let currentValue = parseInt(counterElement.textContent);
    let levelValue = parseInt(levelElement.textContent);

    if (amount > 0 && currentValue < 10) {
        currentValue += amount;
    } else if (amount < 0 && currentValue > 0) {
        currentValue += amount;
    } else if (currentValue === 10) {
        levelElement.textContent = `${levelValue + 1}`;
        currentValue = 0;
        window.alert('おめでとうございます！レベルアップしました！');
    }

    counterElement.textContent = `${currentValue}`;
    updateMeter(currentValue)
}

const countUpButton = document.querySelector('#countup')! as HTMLButtonElement;
countUpButton.addEventListener('click', () => updateCounter(INCREMENT));

const countDownButton = document.querySelector('#countdown')! as HTMLButtonElement;
countDownButton.addEventListener('click', () => updateCounter(DECREMENT));

