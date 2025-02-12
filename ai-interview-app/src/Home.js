import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>AI DevOps Interview Simulator</h1>
      <p>Practice DevOps interviews with real-time feedback. No signup required!</p>
      <button onClick={() => navigate('/start')}>Start Interview Now</button>
    </div>
  );
}