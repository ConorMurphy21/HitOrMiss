const {getRoomById} = require("../../models/rooms");
const GameState = require("../../models/gameState");
module.exports = (io, socket) => {
    /*** GAME STATE ENDPOINTS ***/

    socket.on("setOptions", (options, callback) => {
        const room = roomIfLeader(socket.id);
        if (!room) return;
        // todo: validation
        room.state.options = options;
        callback({success: true});
    });

    socket.on("startGame", () => {
        const room = roomIfLeader(socket.id);
        if (!room) return;
        room.state = new GameState(room, room.state.options);
        beginPrompt(io, room);
    });

    socket.on("promptResponse", (response) => {
        const state = getRoomById(socket.id).state;
        const result = state.acceptPromptResponse(socket.id, response);
        if(result.success){
            socket.emit("promptResponse", response);
        }
    });

    socket.on("selectResponse", (response) => {
        const room = getRoomById(socket.id);
        const state = room.state;
        const result = state.acceptResponseSelection(socket.id, response);
        if(result.success){
            io.to(room.name).emit("promptResponse", response);
        }
    });
}

function beginPrompt(io, room) {
    const state = room.state;
    state.beginNewPrompt();
    io.to(room.name).emit("beginPrompt", {
        prompt: state.prompt,
        timer: state.options.promptTimer
    });
    setTimeout(() => {
        beginSelection(io, room);
    }, state.options.promptTimer * 1000 + 1000);
}

function beginSelection(io, room) {
    const state = room.state;
    state.beginSelection(room);
    io.to(room.name).emit("nextSelection",
        {
            selector: state.players[state.selector].id,
            selectionType: state.selectionType
        });
}

function continueSelection(io, room) {
    if (room.state.nextSelection(room)) {
        io.to(room.name).emit("nextSelection",
            {
                selector: state.players[state.selector].id,
                selectionType: state.selectionType
            });
    } else {
        beginPrompt(io, room);
    }
}

// return the room only if the user is the party leader
function roomIfLeader(id) {
    let room = getRoomById(id);
    if (!room) return;
    const player = room.players.find(p => p.id === id);
    if (!player.leader) return;
    return room;
}
