import { useState } from "react"

export default function Player({initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [editing, setEditing] = useState(false);

    function handleEditClick() {
        setEditing((editing) => !editing);
    }

    function handlePlayerNameChange(event) {
        setPlayerName((playerName) => event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if (editing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handlePlayerNameChange} />;
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{editing ? 'Save': 'Edit'}</button>
        </li>
    )
}