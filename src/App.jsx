import { useState } from 'react';
import './App.css';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);  // Initialize totalStrength
  const [totalAgility, setTotalAgility] = useState(0);    // Initialize totalAgility
  const [zombieFighters] = useState([
    { name: 'Survivor', price: 12, strength: 6, agility: 4, img: 'https://via.placeholder.com/150/92c952' },
    { name: 'Scavenger', price: 10, strength: 5, agility: 5, img: 'https://via.placeholder.com/150/771796' },
    { name: 'Shadow', price: 18, strength: 7, agility: 8, img: 'https://via.placeholder.com/150/24f355' },
    { name: 'Tracker', price: 14, strength: 7, agility: 6, img: 'https://via.placeholder.com/150/d32776' },
    { name: 'Sharpshooter', price: 20, strength: 6, agility: 8, img: 'https://via.placeholder.com/150/1ee8a4' },
    { name: 'Medic', price: 15, strength: 5, agility: 7, img: 'https://via.placeholder.com/150/66b7d2' },
    { name: 'Engineer', price: 16, strength: 6, agility: 5, img: 'https://via.placeholder.com/150/56acb2' },
    { name: 'Brawler', price: 11, strength: 8, agility: 3, img: 'https://via.placeholder.com/150/8985dc' },
    { name: 'Infiltrator', price: 17, strength: 5, agility: 9, img: 'https://via.placeholder.com/150/392537' },
    { name: 'Leader', price: 22, strength: 7, agility: 6, img: 'https://via.placeholder.com/150/602b9e' },
  ]);

  // Helper function to calculate total team strength
  const calculateTotalStrength = (team) => {
    return team.reduce((total, member) => total + member.strength, 0);
  };

  // Helper function to calculate total team agility
  const calculateTotalAgility = (team) => {
    return team.reduce((total, member) => total + member.agility, 0);
  };

  // Function to handle adding a fighter to the team
  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      const newTeam = [...team, fighter];          // Update team with new member
      setTeam(newTeam);                            // Set the updated team
      setMoney(money - fighter.price);             // Deduct fighter's price from money
      setTotalStrength(calculateTotalStrength(newTeam));  // Recalculate total strength
      setTotalAgility(calculateTotalAgility(newTeam));    // Recalculate total agility
    } else {
      console.log("Not enough money");             // Log if there's not enough money
    }
  };

  return (
    <div>
      <h1>Zombie Fighters</h1>
      <p>Money: ${money}</p> 
      <p>Total Team Strength: {totalStrength}</p>  {/* Display total strength */}
      <p>Total Team Agility: {totalAgility}</p>    {/* Display total agility */}

      {/* Display zombieFighters list */}
      <h2>Available Fighters</h2>
      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
            <img src={fighter.img} alt={`${fighter.name} avatar`} />
            <h2>{fighter.name}</h2>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>

      {/* Display team members or message */}
      <h2>Your Team</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>   // Message if no members in team
      ) : (
        <ul>
          {team.map((member, index) => (
            <li key={index}>
              <img src={member.img} alt={`${member.name} avatar`} />
              <h2>{member.name}</h2>
              <p>Price: ${member.price}</p>
              <p>Strength: {member.strength}</p>
              <p>Agility: {member.agility}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
