import React from "react";
import "./styles.css";

function Dashboard() {
  return (
    <div>
      <header className="header">
        <h1>Dashboard Header</h1>
      </header>
      <aside className="sidebar">
        <h2>Sidebar</h2>
        <p>Links and content go here.</p>
      </aside>
      <main className="main">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </main>
    </div>
  );
}

export default Dashboard;
