import { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import ResponsiveVoice from 'responsive-voice-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Interview() {
  const location = useLocation();
  const { experience } = location.state || {};
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState('');

  // Mock questions (replace with DeepSeek API later)
  useEffect(() => {
    const mockQuestions = [
      { text: "Explain CI/CD pipeline", keywords: ["automation", "testing", "deployment"] },
      { text: "What is Infrastructure as Code (IaC)?", keywords: ["terraform", "versioning", "cloud"] }
    ];
    setQuestions(mockQuestions);
  }, []);

  // AI Voice Question
  const speakQuestion = () => {
    ResponsiveVoice.speak(questions[currentQuestion]?.text, "UK English Male");
  };

  // Next question or finish
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      speakQuestion();
    } else {
      navigate('/result');
    }
    setAnswer('');
  };

  return (
    <div className="interview">
      {/* AI Interviewer Panel */}
      <div className="ai-panel">
        <h3>AI Interviewer</h3>
        <p>{questions[currentQuestion]?.text}</p>
        <button onClick={speakQuestion}>🔊 Repeat Question</button>
      </div>

      {/* User Panel */}
      <div className="user-panel">
        <Webcam className="webcam" />
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Speak or type your answer..."
        />
        <button onClick={handleNext}>Next ➔</button>
      </div>
    </div>
  );
}