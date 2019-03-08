class Queen {

    constructor(square) {
        this.square = square;
        this.name = 'queen';
    }

    getDir = () => {
        //return random direction
        return [Math.floor(Math.random(3)) - 1, Math.floor(Math.random(3)) - 1];
    };

    move = (newSquare) => {
        this.square = newSquare;
    };

}

class Rook {

    constructor(square) {
        this.square = square;
        this.name = 'rook';
    }

    getDir = () => {
        //return random direction
        let dir = Math.floor(Math.random(4));
        switch(dir) {
            case 0 : return [0,1]; 
            case 1 : return [1,0];
            case 2 : return [0,-1];
            case 3 : return [-1, 0]; 
        };
    };

    move = (newSquare) => {
        this.square = newSquare;
    };

}

class Bishop {

    constructor(square) {
        this.square = square;
        this.name = 'bishop';
    }

    getDir = () => {
        //return random direction
        return [2*Math.floor(Math.random(2)) - 1, 2*Math.floor(Math.random(2)) - 1];
    };

    move = (newSquare) => {
        this.square = newSquare;
    };

}

class Knight {

    constructor(square) {
        this.square = square;
        this.name = 'knight';
    }

    getDir = () => {
        //return random direction
        let dir = Math.floor(Math.random(8));
        switch(dir) {
            case 0 : return [1,2]; 
            case 1 : return [2,1];
            case 2 : return [-1,2];
            case 3 : return [-2, 1];
            case 4 : return [1, -2];
            case 5 : return [2, -1];
            case 6 : return [-2, -1];
            case 7 : return [-1, -2];
        };
    };

    move = (newSquare) => {
        this.square = newSquare;
    };

}