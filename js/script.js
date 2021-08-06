function getGame() {
    function isNumber(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    };
    let endGame,
        randomNum = Math.floor((Math.random() * 100) + 1),
        attempts = 10,
        question = confirm('Начать игру?');
    if (question) {
        alert('Угадай число от 1 до 100.');
        function startGame() {
            let userNum = prompt('Введите число...');
            if (userNum !== null) {
                if (isNumber(userNum)) {
                    userNum = +userNum;
                    if (userNum > 100 || userNum < 1) {
                        alert(`Вы ввели число не соответствующее правилам игры. Осталось попыток ${attempts}!`);
                    } else if (userNum > randomNum) {
                        alert(`Загаданное число меньше. Осталось попыток ${attempts}!`);
                    } else if (userNum < randomNum) {
                        alert(`Загаданное число больше. Осталось попыток ${attempts}!`);
                    } else if (userNum === randomNum) {
                        endGame = confirm('Поздравляю, Вы угадали! Хотели бы сыграть еще?');
                        if (endGame == true) {
                            return getGame();
                        } else {
                            alert('Игра окончена!');
                            return;
                        };
                    };
                } else {
                    alert(`Введи число! Осталось попыток ${attempts}!`);
                };
                if (attempts == 0) {
                    endGame = confirm('Попытки закончились, хотите сыграть еще?');
                    if (endGame == true) {
                        return getGame();
                    } else {
                        alert('Игра окончена!');
                        return;
                    };
                };
                attempts--;
                return startGame();
            } else {
                alert('Как жаль, что нам не удалось поиграть...');
            };
        };
        startGame();
    } else {
        alert('Игра окончена!');
    };
};

getGame();