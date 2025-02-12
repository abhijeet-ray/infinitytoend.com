import { useNavigate } from 'react-router-dom';

export default function Result() {
  const navigate = useNavigate();
  const score = Math.floor(Math.random() * 100); // Mock score

  return (
    <div className="result">
      <h2>Your Score: {score}/100</h2>
      <button onClick={() => navigate('/')}>Restart Interview</button>
    </div>
  );
}