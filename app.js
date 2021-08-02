const team = {
    _players: [{
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        },
        {
            firstName: 'Ama ',
            lastName: 'Domfie',
            age: 20
        },
        {
            firstName: 'Emmanuel',
            lastName: 'Antwi',
            age: 11
        }
    ],
    _games: [{
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Kwabena',
            teamPoints: 45,
            opponentPoints: 28
        },
        {
            opponent: 'Gabriel',
            teamPoints: 40,
            opponentPoints: 23
        }
    ],

    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },

    addGame(oppName, points, oppPoints) {
        const game = {
            oppName: oppName,
            points: points,
            oppPoints: oppPoints
        }
        this.games.push(game);
    }
}

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

console.log(team.players);

team.addGame("Sea Lions", 100, 50);
team.addGame("Wolves", 56, 90);
team.addGame("Tigers", 30, 45);


console.log(team.games);