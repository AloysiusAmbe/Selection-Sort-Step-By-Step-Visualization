
var arr = [6, 10, 2, 5, 13, 3, 9, 8, 20];
createBars(arr); // Calls the function

// Create the bars in the web page
function createBars(arr) {
    for(let i = 0; i < arr.length; i++) {
        var bar = document.createElement('div'); // Creates a bar
        bar.className = 'bars';
        bar.style.height = `${arr[i] * 3}vh`;

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
            for (let j = i + 1; j < arrLength; j++) {

                // Colors the current and the min value
                bars[min].style.background = 'red';
                bars[j].style.background = 'green';
                await sleep(500);
                if (arr[min] > arr[j]) {
                    // Highlights the min value
                    bars[min].style.background = 'rgb(211, 211, 211)';
                    min = j;
                }
                await sleep(500);

                // Changes the colors back to their original state
                bars[j].style.background = 'rgb(211, 211, 211)';
                bars[min].style.background = 'rgb(211, 211, 211)';
            }
            // Swaps if the min value is not the current value
            if (min !== i) {
                let temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;

                // Swaps the min and current bars
                let height1 = bars[min].style.height;
                let height2 = bars[i].style.height;
                bars[min].style.background = '#000';
                bars[i].style.background = '#000';
                numbers[i].style.color = '#fff';
                numbers[min].style.color = '#fff';
                await sleep(500);
                bars[min].style.height = height2;
                bars[i].style.height = height1;
                await sleep(500);
                numbers[i].style.color = '#000';
                numbers[min].style.color = '#000';
                bars[min].style.background = 'rgb(211, 211, 211)';
                bars[i].style.background = 'rgb(211, 211, 211)';

                // Swaps the min and current numbers
                let num1 = numbers[min].innerHTML;
                let num2 = numbers[i].innerHTML;
                numbers[i].innerHTML = num1;
                numbers[min].innerHTML = num2;
            }

            else {
                bars[i].style.background = 'rgb(211, 211, 211)';
            }
            await sleep(500);
            bars[i].style.background = 'rgb(255, 192, 203)'; // Shows the sorted bars as pink
        }
        bars[arrLength - 1].style.background = 'rgb(255, 192, 203)';
    });
});

// Delays the program
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
