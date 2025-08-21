//   src\components\DashboardCard.jsx
//   reusable components for Dashboard Card

import './DashboardCard.css'

const DashboardCard = ({ title, children }) => (
  <div className="card">
    <h3>{title}</h3>
    <div className="content">{children}</div>
  </div>
);

// critical - must keep to allow importing in other files
export default DashboardCard;