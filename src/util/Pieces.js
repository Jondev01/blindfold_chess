export class Queen {

    constructor(square) {
        this.square = square;
        this.name = 'Q';
    }

    getDir = () => {
        //return random direction in which piece could move
        const testDir = () => [Math.floor(Math.random(3)) - 1, Math.floor(Math.random(3)) - 1];
        let dir = testDir();
        while(!this.stepIsLegal(dir))
            dir = testDir();
        return dir;
    };

    setSquare = (newSquare) => {
        this.square = newSquare;
    };

    stepIsLegal = (dir, square) => {
        if(!square && square !== 0)
            square = this.square
        return  !(square%8+dir[0] >=8 || square%8+dir[0] < 0 || square/8 + dir[1] < 0 || square/8 + dir[1] >=8);
    }

}

export class Rook {

    constructor(square) {
        this.square = square;
        this.name = 'R';
    }

    getDir = () => {
        const testDir = () => {
            //return random direction
            let rand = Math.floor(Math.random(4));
            switch(rand) {
                case 0 : return [0,1]; 
                case 1 : return [1,0];
                case 2 : return [0,-1];
                case 3 : return [-1, 0]; 
            };
        }
        let dir = testDir();
        while( !this.stepIsLegal(dir) ) {
            //not on board, try again
            dir = testDir();
        }
        return dir;
    };

    setSquare = (newSquare) => {
        this.square = newSquare;
    };

    stepIsLegal = (dir, square) => {
        if(!square && square !== 0)
            square = this.square
        return  !(square%8+dir[0] >=8 || square%8+dir[0] < 0 || square/8 + dir[1] < 0 || square/8 + dir[1] >=8);
    }

}

export class Bishop {

    constructor(square) {
        this.square = square;
        this.name = 'B';
    }

    getDir = () => {
        //return random direction
        const testDir = () => [2*Math.floor(Math.random(2)) - 1, 2*Math.floor(Math.random(2)) - 1];
        let dir = testDir();
        while(!this.stepIsLegal(dir))
            dir = testDir();
        return dir;
    };

    setSquare = (newSquare) => {
        this.square = newSquare;
    };

    stepIsLegal = (dir, square) => {
        if(!square && square !== 0)
            square = this.square
        return  !(square%8+dir[0] >=8 || square%8+dir[0] < 0 || square/8 + dir[1] < 0 || square/8 + dir[1] >=8);
    }

}

export class Knight {

    constructor(square) {
        this.square = square;
        this.name = 'N';
    }

    getDir = () => {
        //return random direction
        const testDir = () => {
            let rand = Math.floor(Math.random(8));
            switch(rand) {
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
        let dir = testDir();
        while(!this.stepIsLegal(dir))
            dir = testDir();
    };

    setSquare = (newSquare) => {
        this.square = newSquare;
    };

    stepIsLegal = (dir, square) => {
        if(!square && square !== 0)
            square = this.square
        return  !(square%8+dir[0] >=8 || square%8+dir[0] < 0 || square/8 + dir[1] < 0 || square/8 + dir[1] >=8);
    }
}