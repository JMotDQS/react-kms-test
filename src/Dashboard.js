import React from 'react';
import './css/dashboard.css';

const Dashboard = () => {
	return (
		<div className="dashboard-container">
			<div className="card custom-report-card">Custom</div>
			<div className="card">Registered</div>
			<div className="card">Keys</div>
			<div className="card">Yard</div>
		</div>
	)
}

export default Dashboard