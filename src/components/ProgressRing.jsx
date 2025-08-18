//   src\components\ProgressRing.jsx
//   reusable components for Progress Ring

const ProgressRing = ({ percent }) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <svg viewBox="0 0 100 100">
      <circle className="ring-bg" cx="50" cy="50" r="45" />
      <circle 
        className="ring-progress"
        cx="50"
        cy="50"
        r="45"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
      />
    </svg>
  );
};

export default ProgressRing;