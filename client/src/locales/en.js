export default {
    strikeOrSike: 'Strike or Sike',
    strike: 'Strike',
    sike: 'Sike',
    choice: 'Choice',
    cont: 'Continue',
    pending: 'Pending',
    confirm: 'Confirm',
    cancel: 'Cancel',

    /*** HOME STRINGS ***/
    usernameLabel: 'Name',
    usernamePlaceholder: 'your name',
    roomNameLabel: 'Room Name',
    roomNamePlaceholder: 'room name',
    joinGame: 'Join Game',
    createGame: 'Create Game',

    /*** HOME ERRORS ***/
    roomTaken: 'Room name is taken',
    noRoomName: 'Room name is required',
    noName: 'Name is required',
    shortName: 'Name is too short',
    longName: 'Name is too long',
    shortRoomName: 'Room name is too short',
    longRoomName: 'Room name is too long',
    noSpace: 'Room is full',
    noRoom: 'Room does not exist',
    nameTaken: 'Name is taken',
    roomCannotStartWithNum: 'Room name cannot start with a number',
    invalidCharacter: 'Unrecognized character in room name',
    inactiveRoom: 'Room closed due to inactivity',

    /*** LOBBY STRINGS ***/
    players: 'Players',
    startGame: 'Start',

    /*** OPTIONS STRINGS ***/
    timerDurationLabel: 'Timer:',
    numRoundsLabel: 'Rounds:',
    sikeDisputeLabel: 'Dispute Sike:',
    sikeRetriesLabel: 'Retries:',

    /*** GAME MESSAGES ***/
    selection: {
        message: '{player} is picking a word to...',
        selfMessage: '{self} are picking a word to...',
        self: 'You'
    },

    /*** END ROUND STRINGS ***/
    startNextRound: 'Next Round',

    /*** END GAME STRINGS ***/
    playerScores: 'Player Scores',
    toLobby: 'Back to Lobby',
    activeMatchingMessage: '{player} selected {response} to {type}, do you have a match?',
    passiveDisputeMessage: 'Your friends are deciding if {response} fits the category',
    activeDisputeMessage: 'Does {response} fit the category?',
    skipPrompt: 'Vote Skip',
    scoreMessage: '{player}\'s Score: {score}',
    selfScoreMessage: 'Your Score: {score}',

    /*** HOW TO PLAY ***/
    howToPlay: [
        {
            header: 'Overview',
            body: 'Strike or Sike is a fun simple party game suitable for players and groups of all sizes ages. Players are rewarded for being creative and thinking outside the box... and inside the box... and knowing what\'s in and out of the box.',
            children: []
        },
        // {
        //     header: 'Setup',
        //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Sit amet cursus sit amet. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Dolor magna eget est lorem ipsum dolor sit amet.',
        //     children: [
        //         {
        //             header: 'Create game',
        //             body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Sit amet cursus sit amet. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Dolor magna eget est lorem ipsum dolor sit amet.'
        //         },
        //         {
        //             header: 'Join game',
        //             body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Sit amet cursus sit amet. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Dolor magna eget est lorem ipsum dolor sit amet.'
        //         }
        //     ]
        // },
        {
            header: 'Prompt',
            body: 'At the start of each round, each player is given the same prompt. For the duration of the timer, players can respond to the with whatever they feel is fits the category. Clever answers are allowed as long as they fit the prompt. Try to respond with an equal number of uncommon and common answers. In this example round, the prompt is "Ice cream flavours". Some possible responses are Vanilla, Chocolate, and Garlic.',
            children: []
        },
        {
            header: 'Somethinging',
            body: 'After the timer runs out, each player will get a chance to something! The overlord computer will role a dice and pick whether either strike, sike or choice.',
            children: [
                {
                    header: 'Strike',
                    body: 'The somethinger will pick a response from their list that they think all other players also wrote down. A good choice for "Ice cream flavours" might be vanilla, because it is a very common flavour. The somethingers score for this round is the number of players who also had vanilla on their list.\n'
                },
                {
                    header: 'Sike',
                    body: 'The somethinger will pick a response from their list that they think no other players wrote down. A good choice for "Ice cream flavours" might be garlic, because it is an ice cream flavour that exists, but not a top flavour. The somethingers score for this round is the number of players who did not have garlic on their list.'
                },
                {
                    header: 'Choice',
                    body: 'The somethinger gets to choose whether they would like to Strike or Sike. After choosing, the player picks a response as if they had roled Strike or Sike.'
                }
            ]
        },
        {
            header: 'Matching',
            body: 'Most of the time matching is done automatically, but sometimes synonyms exist, and it is up to the players to decide whether or not 2 responses are the same. For example, Airplane and Plane are probably the same.',
            children: []
        },
        // {
        //     header: 'Options',
        //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Sit amet cursus sit amet. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Dolor magna eget est lorem ipsum dolor sit amet.',
        //     children: []
        // }
    ]
}