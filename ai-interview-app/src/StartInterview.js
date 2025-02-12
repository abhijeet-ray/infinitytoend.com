import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function StartInterview() {
  const navigate = useNavigate();
  const [experience, setExperience] = useState('Junior');

  const startInterview = () => {
    navigate('/interview', { state: { experience } });
  };

  return (
    <div className="setup">
      <h2>Choose Experience Level</h2>
      <select value={experience} onChange={(e) => setExperience(e.target.value)}>
        <option>Junior</option>
        <option>Mid</option>
        <option>Senior</option>
      </select>
      <button onClick={startInterview}>Start Now</button>
    </div>
  );
}