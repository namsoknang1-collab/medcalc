/* --- [1] CORE THEME & VARIABLES --- */
:root {
    --sidebar-bg: #0f172a;
    --medical-blue: #38bdf8;
    --white: #ffffff;
    --text-slate: #94a3b8;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --bg-light: #f1f5f9;
}

body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-light);
    display: flex;
    min-height: 100vh;
    overflow-x: hidden;
}

/* --- [2] SIDEBAR STYLING --- */
.sidebar {
    width: 280px;
    background: var(--sidebar-bg);
    color: white;
    position: fixed;
    left: 15px; top: 15px; bottom: 15px;
    border-radius: 24px;
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    z-index: 2000;
}

/* Collapsed Desktop Sidebar */
.sidebar.collapsed { width: 80px; padding: 20px 10px; }
.sidebar.collapsed .logo-text,
.sidebar.collapsed .nav-text,
.sidebar.collapsed .nav-label,
.sidebar.collapsed .search-inner input,
.sidebar.collapsed .search-clear { display: none; }

.sidebar-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
.logo-area { display: flex; align-items: center; gap: 12px; }
.logo-icon { color: var(--medical-blue); min-width: 28px; }
.logo-text { font-size: 1.4rem; font-weight: bold; }
.logo-text span { color: var(--medical-blue); }

.inner-toggle {
    background: #1e293b; border: none; color: var(--medical-blue);
    cursor: pointer; padding: 5px; border-radius: 8px; display: flex;
}

/* --- [3] SIDEBAR NAVIGATION --- */
.sidebar-nav a {
    display: flex; align-items: center; color: #cbd5e1;
    text-decoration: none; padding: 12px; margin-bottom: 5px;
    border-radius: 12px; transition: 0.2s;
}
.sidebar-nav a i { min-width: 24px; margin-right: 15px; }
.sidebar.collapsed .sidebar-nav a { justify-content: center; }
.sidebar.collapsed .sidebar-nav a i { margin-right: 0; }
.sidebar-nav a:hover, .sidebar-nav a.active {
    background: #1e293b; color: var(--medical-blue);
}
.nav-label { font-size: 0.7rem; text-transform: uppercase; color: #64748b; margin: 20px 0 10px 10px; font-weight: bold; }

/* --- [4] SEARCH BAR --- */
.search-inner {
    position: relative; display: flex; align-items: center;
    background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px; padding: 10px 14px; margin-bottom: 20px;
}
.search-inner input {
    background: transparent; border: none; color: white; width: 100%; outline: none; margin-left: 10px;
}
.search-clear { cursor: pointer; color: var(--text-slate); display: none; }

/* --- [5] MAIN CONTENT & CARDS --- */
.main-content {
    margin-left: 320px; transition: var(--transition);
    padding: 40px; width: 100%;
}
.main-content.expanded { margin-left: 110px; }

.tool-card {
    background: var(--white); width: 100%; max-width: 500px;
    padding: 35px; border-radius: 28px; margin: 0 auto;
    box-shadow: 0 4px 20px rgba(0,0,0,0.03);
    animation: fadeIn 0.4s ease-out;
}
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; } }

.card-header { display: flex; gap: 15px; margin-bottom: 25px; }
.card-icon { width: 40px; height: 40px; color: var(--medical-blue); }

/* --- [6] INPUTS & BUTTONS --- */
.calc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px; }
.modern-input {
    display: flex; align-items: center; background: #f8fafc;
    border: 2px solid #e2e8f0; border-radius: 16px; padding: 0 15px;
}
.modern-input input {
    height: 55px; border: none; background: transparent; width: 100%; font-weight: bold; outline: none;
}
.modern-input-select {
    width: 100%; border: 2px solid #e2e8f0; height: 55px; border-radius: 16px; padding: 0 15px; font-weight: bold; background: #f8fafc;
}

.button-area { display: flex; justify-content: center; margin: 30px 0; }
.btn-calc {
    background: linear-gradient(135deg, #38bdf8 0%, #0284c7 100%);
    color: white; border: none; border-radius: 16px; padding: 16px 32px;
    font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 10px;
    transition: transform 0.2s; width: 100%; justify-content: center;
}
.btn-calc:hover { transform: translateY(-3px); }
.btn-gfr { background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); }

/* --- [7] RESULTS & GAUGE --- */
.result-box {
    margin-top: 30px; padding: 25px; border-radius: 24px;
    background: #f8fafc; border: 1px solid #e2e8f0; text-align: center;
}
#bmi-value { font-size: 3.5rem; margin: 10px 0; letter-spacing: -2px; }
.status-badge { display: inline-block; padding: 8px 20px; border-radius: 50px; font-weight: 800; font-size: 0.85rem; }

.gauge-track {
    height: 12px; border-radius: 10px; margin: 20px 0; position: relative;
    background: linear-gradient(to right, #f59e0b 0%, #10b981 30%, #10b981 50%, #f97316 75%, #ef4444 100%);
}
.gauge-pointer {
    width: 4px; height: 20px; background: #0f172a; position: absolute; top: -4px; border-radius: 2px; transition: left 0.5s;
}

/* --- UPDATE TO MOBILE OVERRIDES --- */
@media (max-width: 768px) {
    /* [1] Ensure the main content takes up the WHOLE screen width */
    .main-content {
        margin-left: 0 !important; /* Force remove the 310px desktop margin */
        padding: 80px 15px 40px 15px;
        width: 100%;
        display: block; /* Ensures standard flow */
        box-sizing: border-box;
    }

    /* [2] Force the tool container to center its children */
    .tool-container {
        display: flex;
        justify-content: center; /* Centers horizontally */
        align-items: flex-start;
        width: 100%;
        margin: 0;
    }

    /* [3] Ensure the card itself doesn't have any left-leaning margins */
    .tool-card {
        width: 100%;
        max-width: 450px; /* Limits width so it doesn't touch screen edges */
        margin: 0 auto !important; /* Forces equal margins on left and right */
        padding: 25px 20px;
        box-sizing: border-box;
    }

    /* [4] Fix the Sidebar so it doesn't push the screen */
    .sidebar {
        position: fixed;
        left: -320px;
        /* Ensure it's totally removed from the flow until 'active' */
        visibility: hidden;
    }

    .sidebar.active {
        visibility: visible;
        left: 0;
    }
}

.reference-table { margin-top: 30px; border-top: 1px solid #f1f5f9; padding-top: 20px; }
.ref-row { display: flex; justify-content: space-between; padding: 8px 0; font-size: 0.85rem; color: #64748b; }
.active-green { color: #10b981; font-weight: bold; }
