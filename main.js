let coin = {

    state: 0,

    flip: function () {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        let randNum = Math.round(Math.random());

        this.state = randNum;
    },

    toString: function () {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
        if (this.state === 0) {
            return "Head";
        } else {
            return "Tail";
        }
    },

    toHTML: function () {
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/

        let image = document.createElement('img');

        let path;
        if (this.state === 0) {
            path = "./img/head.png";
        } else {
            path = "./img/tail.png"
        }
        image.src = path

        return image;
    }
};

let bodyElement = document.querySelector('body');

var i = 1;
function myLoop() {             // to delay every step in loop
    setTimeout(function () {

        //---------------------
        let container = document.createElement('div');
        container.className = 'cont';
        bodyElement.append(container);


        coin.flip();

        let div = document.createElement('div');
        div.className = 'text';
        let text = coin.toString();
        div.append(text);
        container.append(div);

        let image = coin.toHTML();
        image.className = 'pic';

        container.append(image);
        //---------------------

        i++;
        if (i <= 20) {           //  if the counter < 20, call the loop function
            myLoop();             //  ..  again which will trigger another 
        }

    }, 150)   // time for delay betweensteps in loop
}
myLoop();   
