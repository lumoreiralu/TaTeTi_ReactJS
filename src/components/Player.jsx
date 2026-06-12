import { useState } from 'react';
import AvatarUploader from './AvatarUploader';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
  wins, //recibe las partidas ganadas
  draws, //recibe las partidas empatadas
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  const statsText = `Partidos ganados: ${wins ?? 0} | Empatados: ${draws ?? 0}`;

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = 'Edit';

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = 'Save';
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        <AvatarUploader id={`avatar-${symbol}`} initialSrc="https://cdn-icons-png.flaticon.com/512/847/847969.png" size={40}
        tooltipText={statsText} />
        
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
