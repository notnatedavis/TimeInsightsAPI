//   src\components\ProgressRing.js
//   reusable components for Progress Ring

const ProgressRing = ({ percent }) => {
  
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference * (1 - percent / 100);

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