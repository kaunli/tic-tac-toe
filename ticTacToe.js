var player = "X";
var board = [["", "", ""], ["", "", ""], ["", "", ""]];

var scoreX = 0;
var scoreO = 0;
document.getElementById("oPlayer").innerHTML = scoreO;
document.getElementById("xPlayer").innerHTML = scoreX;

function picked(row, col) {
    var cellSelected = document.getElementById('board').rows[row].cells[col];
    if (cellSelected.firstElementChild.tagName.toLowerCase() == 'button') {
        cellSelected.innerHTML = player;
        cellSelected.classList.add(player === "X" ? "x-color" : "o-color");
        board[row][col] = player;
        player = (player == "X") ? "O" : "X";
        checkWins(row, col);
    }
}

function checkWins(row, col) {
    // Check across
    if (board[row][0] == board[row][1] && board[row][1] == board[row][2] && board[row][0] != '') {
        setTimeout(function() {
            alert(board[row][0] + " has won!");
            updateScoreBoard(board[row][0]);
        }, 100);
    }

    // Check down
    if (board[0][col] == board[1][col] && board[1][col] == board[2][col] && board[0][col] != '') {
        setTimeout(function() {
            alert(board[0][col] + " has won!");
            updateScoreBoard(board[0][col]);
        }, 100);
    }

    // Check diagonally Topleft -> bottomRight
    if (board[0][0] != "" && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        setTimeout(function() {
            alert(board[0][0] + " has won!");
            updateScoreBoard(board[0][0]);
        }, 100);
    }

    // Check diagonally bottomLeft -> topRight
    if (board[2][0] != "" && board[2][0] === board[1][1] && board[1][1] === board[0][2]) {
        setTimeout(function() {
            alert(board[2][0] + " has won!");
            updateScoreBoard(board[2][0]);
        }, 100);
    }
}

function updateScoreBoard(winner) {
    if (winner == "X") {
        scoreX++;
        document.getElementById("xPlayer").innerHTML = scoreX;
    } else {
        scoreO++;
        document.getElementById("oPlayer").innerHTML = scoreO;
    }
}

function replay() {
    console.log("The button Replay has been clicked.");
    var boardElement = document.getElementById('board');
    for (var row = 0; row < 3; row++) {
        for (var col = 0; col < 3; col++) {
            var cell = boardElement.rows[row].cells[col];
            cell.innerHTML = '<button onclick="picked(' + row + ',' + col + ')"></button>';
            cell.classList.remove('x-color', 'o-color');
            board[row][col] = "";
        }
    }
    player = "X";
}
