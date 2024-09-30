import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Hydroponic Dashboard System</h1>
      </header>

      <aside className="sidebar">
        <nav className="sidebar-nav">
          <ul>
            <li><button className="nav-button">System Control Panel</button></li>
            <li><button className="nav-button">Watering Schedule Manager</button></li>
            <li><button className="nav-button">Sensor Data</button></li>
          </ul>
        </nav>

        <div className="sidebar-status">
          <h4>System Health</h4>
          <p>Online</p>
          <h4>Last Update</h4>
          <p>5 minutes ago</p>
        </div>
      </aside>

      <main className="main">
        {/* Widget 1: System Control Panel */}
        <div className="card">
          <h3>System Control Panel</h3>
          <button>Start System</button>
          <button>Stop System</button>
          <div className="status-indicator">
            <p>System Status: Stopped</p>
            <div className="status-circle red"></div>
          </div>
        </div>

        {/* Widget 2: Watering Schedule Manager */}
        <div className="card">
          <h3>Watering Schedule Manager</h3>
          <form>
            <label>
              Start Time:
              <input type="time" name="startTime" />
            </label>
            <br />
            <label>
              Duration (minutes):
              <input type="number" name="duration" />
            </label>
            <br />
            <label>
              End Time:
              <input type="time" name="endTime" />
            </label>
          </form>
        </div>

        {/* Widget 3: Sensor Data */}
        <div className="card">
          <h3>Sensor Data</h3>
          <p>Water Level: 50%</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "50%" }}></div>
          </div>
          <p>Pipe Status: Filled</p>
        </div>

        {/* Widget 4: Large Placeholder */}
        <div className="card placeholder-card">
          <h3>Additional Feature Coming Soon</h3>
        </div>

        {/* Widget 5: Placeholder */}
        <div className="card placeholder-card">
          <h3>Add in Widget</h3>
        </div>

        {/* Widget 6: Placeholder */}
        <div className="card placeholder-card">
          <h3>Add in Widget</h3>
        </div>
      </main>
    </div>
  );
}

export default App;
