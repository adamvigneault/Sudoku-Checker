var validGang = function(arr) {
    var row = arr.slice().sort();

    for (var i=0; i<row.length; i++)
        if (row[i]!=i+1) return false;

    return true;
}

var validBoard = function(board) {
    var divisor = 3;

    for (var row=0;row<board.length;row++) {
        var column = [];
        for (var col=0;col<board.length;col++) {
            column.push(board[col][row]);
            // Develop a square assuming a keystone value
            if (col%divisor===0 && row%divisor===0) {
                var square = board[row].slice(col, col+divisor);
                for (var i = 1; i<divisor; i++)
                    square = square.concat(board[row+i].slice(col, col+divisor));

                if (!validGang(square)) return false;
            }
        }
        if (!validGang(column)) return false;
        if (!validGang(board[row])) return false;
    }

    return true;
}

var board = [
    [7,5,6, 4,1,2, 8,3,9],
    [4,9,2, 8,3,5, 1,7,6],
    [8,3,1, 6,7,9, 2,5,4],
    [6,4,9, 1,5,8, 7,2,3],
    [3,1,7, 2,4,6, 5,9,8],
    [2,8,5, 7,9,3, 6,4,1],
    [1,7,8, 3,2,4, 9,6,5],
    [9,2,4, 5,6,1, 3,8,7],
    [5,6,3, 9,8,7, 4,1,2]
]

// Returns true
console.log(validBoard(board));