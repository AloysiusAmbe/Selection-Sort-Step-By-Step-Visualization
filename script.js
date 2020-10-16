
var arr = [6, 10, 2, 5, 13, 3, 9, 8, 20, 11];
makeBars(arr); // Calls the function

// Makes the bars in the web page
function makeBars(arr) {
    for(let i = 0; i < arr.length; i++) {
        var bar = document.createElement('div'); // Creates a bar
        bar.className = 'bars';
        bar.style.height = `${arr[i] * 4}vh`;
        bar.style.width = '4%';
        bar.style.background = 'lightgrey';
        bar.style.margin = '4px';

        // Makes the numbers show on the bars
        var text = document.createElement('span');
        text.className = 'numbers';
        text.innerHTML = arr[i];
        bar.appendChild(text);
        document.querySelector('#content').appendChild(bar);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', async () => {
        // Gets all the bar divs and all the number span elements
        const bars = document.querySelectorAll('.bars');
        const numbers = document.querySelectorAll('.numbers');

        /* SELECTION SORT */
        let arrLength = arr.length;
        for (let i = 0; i < arrLength; i++) {
            let min = i;
            isSorted(bars, i); // Function call
            for (let j = i + 1; j < arrLength; j++) {

                // Colors the current and the min value
                bars[min].style.background = 'red';
                bars[j].style.background = 'green';
                await sleep(1000);
                if (arr[min] > arr[j]) {
                    // Highlights the min value
                    bars[min].style.background = 'lightgrey';
                    min = j;
                }
                await sleep(1000);

                // Changes the colors back to their original state
                bars[j].style.background = 'lightgrey';
                bars[min].style.background = 'lightgrey';
            }
            // Swaps if the min value is not the current value
            if (min !== i) {
                let temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;

                // Swaps the min and current bars
                let height1 = bars[min].style.height;
                let height2 = bars[i].style.height;
                bars[min].style.height = height2;
                bars[i].style.height = height1;

                // Swaps the min and current numbers
                let num1 = numbers[min].innerHTML;
                let num2 = numbers[i].innerHTML;
                numbers[i].innerHTML = num1;
                numbers[min].innerHTML = num2;
            }

            else {
                bars[i].style.background = 'lightgrey';
            }
            await sleep(1000);
        }
    });
});

// Makes the divs pink to show it is sorted
function isSorted(bars, max) {
    for (let i = 0; i < max; i++) {
        bars[i].style.background = 'pink';
    }
}

// Delays the program
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
