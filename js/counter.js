export class Counter {
    constructor(selector, initialValue = 0) {
        this.count = initialValue;
        this.selector = selector;
        this.mount();
    }

    mount() {
        const container = document.querySelector(this.selector);

        this.display = document.createElement('div');
        this.button = document.createElement('button');

        //add buttons
        this.decrementButton = document.createElement('button');
        this.resetButton = document.createElement('button');

        //set button text
        this.button.textContent = 'Increment';
        this.decrementButton.textContent = 'Decrement';
        this.resetButton.textContent = 'Reset';
        //append display and button to container
        container.appendChild(this.display);
        container.appendChild(this.button);
        container.appendChild(this.decrementButton);
        container.appendChild(this.resetButton);

        //initial display
        this.update();

        //add event listener to button
        this.button.addEventListener('click', () => this.increment());
        this.decrementButton.addEventListener('click', () => this.decrement());
        this.decrementButton.addEventListener('click', () => this.reset());
        this.resetButton.addEventListener('click', () => this.reset());
    }

    //state update method
    increment() {
        this.count++;
        this.update();
    }

    decrement() {
        //if statement to prevent count from going below 0
        if (this.count > 0) {
            this.count--;
        }
        this.update();
    }

    reset() {
        this.count = 0;
        this.update();
        console.log('Reset Activated!!!');
    }

    update() {
        this.display.textContent = `count ${this.count}`;
        //classList.toggle() this.count===0

        this.decrementButton.classList.toggle('inactive', this.count === 0);
        this.resetButton.classList.toggle('inactive', this.count === 0);
    }
    
}

//Counter is super class
//StepCounter is sub class

class StepCounter extends Counter {
    constructor(selector, initialValue = 0, step = 1) {
        super(selector, initialValue);
        this.step = step;
    } 
}
    //increment (){}
    //decrement (){}