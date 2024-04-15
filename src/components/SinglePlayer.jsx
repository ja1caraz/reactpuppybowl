import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPlayerById } from "../API/index";

const SinglePlayer = () => {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        const getPlayerDetails = async () => {
            try {
                const APIResponse = await fetchPlayerById(id);
                if (APIResponse.success) {
                    setPlayer(APIResponse.data.player);
                }
            } catch (error) {
                console.error("Failed to fetch player details:", error);
            }
        };
        getPlayerDetails();
    }, [id]);

    if (!player) return <div>Loading...</div>;

    return (
        <div>
            <h2>{player.name}</h2>
            <p>Breed: {player.breed}</p>
            <img src={player.image} alt={player.name} style={{ maxWidth: "300px" }} />
        </div>
    );
};

export default SinglePlayer;