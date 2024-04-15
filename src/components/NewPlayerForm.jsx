import React, { useState } from 'react';
import { createNewPlayer } from '../API/index';

const NewPlayerForm = ({ history }) => {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const newPlayer = { name, breed };
            await createNewPlayer(newPlayer);
            history.push("/players");
        } catch (err) {
            setError("Failed to create new player");
            console.error("Error creating new player:", err);
        }
    };

    return (
        <div>
            <h2>Add New Player</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="breed">Breed:</label>
                    <input
                        id="breed"
                        type="text"
                        placeholder="Enter breed"
                        value={breed}
                        onChange={e => setBreed(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Player</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default NewPlayerForm;
