//   src\components\DashboardCard.js
//   reusable components for Dashboard Card

const DashboardCard = ({ title, children }) => (
  <div className="card">
    <h3>{title}</h3>
    <div className="content">{children}</div>
  </div>
);