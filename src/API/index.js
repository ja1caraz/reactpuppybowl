const baseUrl = "https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players"; 

export async function fetchAllPlayers() {
    try {
        const response = await fetch(`${baseUrl}/players`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch all players");
    }
}

export async function createNewPlayer(newPlayer) {
    try {
        const response = await fetch(`${baseUrl}/players`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPlayer),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to create new player");
    }
}

export async function fetchPlayerById(playerId) {
    try {
        const response = await fetch(`${baseUrl}/players/${playerId}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch player details");
    }
}

export async function deletePlayer(playerId) {
    try {
        const response = await fetch(`${baseUrl}/players/${playerId}`, {
            method: "DELETE",
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to delete player");
    }
}

export async function fetchPlayerDetails(playerId) {
    try {
        const response = await fetch(`${baseUrl}/players/${playerId}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch player details");
    }
}