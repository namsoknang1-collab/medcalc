/* --- [1] TOOL SWITCHING LOGIC --- */
function showTool(toolName) {
    // Hide all tool cards
    document.getElementById('tool-bmi').style.display = 'none';
    document.getElementById('tool-gfr').style.display = 'none';

    // Reset Navigation Classes
    document.getElementById('nav-bmi').classList.remove('active');
    document.getElementById('nav-gfr').classList.remove('active');

    // Show the active tool
    if(toolName === 'bmi') {
        document.getElementById('tool-bmi').style.display = 'block';
        document.getElementById('nav-bmi').classList.add('active');
    } else if(toolName === 'gfr') {
        document.getElementById('tool-gfr').style.display = 'block';
        document.getElementById('nav-gfr').classList.add('active');
    }

    // Refresh icons for new elements
    lucide.createIcons();

    // Close sidebar on mobile after clicking
    if (window.innerWidth <= 768) {
        toggleSidebar();
    }
}

/* --- [2] SIDEBAR TOGGLE LOGIC --- */
function toggleSidebar() {
    const sidebar = document.getElementById('mainSidebar');
    const mainContent = document.getElementById('mainContent');
    const overlay = document.getElementById('sidebarOverlay');
    const toggleIcon = document.getElementById('toggleIcon');

    if (window.innerWidth > 768) {
        // Desktop: Toggle collapsed state
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');

        // Update Arrow Icon
        if (sidebar.classList.contains('collapsed')) {
            toggleIcon.setAttribute('data-lucide', 'chevron-right');
        } else {
            toggleIcon.setAttribute('data-lucide', 'chevron-left');
        }
    } else {
        // Mobile: Toggle active slide-in state
        sidebar.classList.toggle('active');
        overlay.style.display = sidebar.classList.contains('active') ? 'block' : 'none';
    }

    lucide.createIcons();
}

/* --- [3] BMI CALCULATION --- */
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);

    if (weight > 0 && heightCm > 0) {
        const heightM = heightCm / 100;
        const bmi = (weight / (heightM * heightM)).toFixed(1);

        document.getElementById('bmi-value').innerText = bmi;
        document.getElementById('result-container').style.display = "block";

        const category = document.getElementById('bmi-category');
        const pointer = document.getElementById('gauge-pointer');
        let color = "#10b981";
        let position = 50;

        if (bmi < 18.5) {
            category.innerText = "Underweight"; color = "#f59e0b";
            position = Math.max((bmi / 18.5) * 25, 5);
        } else if (bmi <= 24.9) {
            category.innerText = "Normal"; color = "#10b981";
            position = 30 + ((bmi - 18.5) / 6.4) * 20;
        } else if (bmi <= 29.9) {
            category.innerText = "Overweight"; color = "#f97316";
            position = 55 + ((bmi - 25) / 4.9) * 20;
        } else {
            category.innerText = "Obese"; color = "#ef4444";
            position = 80 + Math.min(((bmi - 30) / 10) * 15, 15);
        }

        category.style.backgroundColor = color + "20";
        category.style.color = color;
        pointer.style.left = position + "%";
        pointer.style.backgroundColor = color;
    } else {
        alert("Please enter valid weight and height.");
    }
}

/* --- [4] GFR CALCULATION (CKD-EPI 2021) --- */
function calculateGFR() {
    const scr = parseFloat(document.getElementById('creatinine').value);
    const age = parseFloat(document.getElementById('age').value);
    const sex = document.getElementById('sex').value;

    if (scr > 0 && age > 0) {
        let kappa = (sex === 'female') ? 0.7 : 0.9;
        let alpha = (sex === 'female') ? -0.241 : -0.302;
        let constant = (sex === 'female') ? 1.012 : 1.0;

        let gfr = 142 * Math.pow(Math.min(scr / kappa, 1), alpha) * Math.pow(Math.max(scr / kappa, 1), -1.200) * Math.pow(0.9938, age) * constant;

        gfr = Math.round(gfr);
        document.getElementById('gfr-value').innerText = gfr;
        document.getElementById('gfr-result-container').style.display = "block";

        const stage = document.getElementById('gfr-stage');
        if (gfr >= 90) { stage.innerText = "G1: Normal"; stage.style.color = "green"; }
        else if (gfr >= 60) { stage.innerText = "G2: Mildly Dec."; stage.style.color = "#84cc16"; }
        else if (gfr >= 30) { stage.innerText = "G3: Moderate"; stage.style.color = "#f97316"; }
        else { stage.innerText = "G4/5: Severe/Failure"; stage.style.color = "red"; }
    } else {
        alert("Please enter valid laboratory values.");
    }
}

/* --- [5] SEARCH & FILTER LOGIC --- */
function filterTools() {
    const input = document.getElementById('toolSearch');
    const filter = input.value.toLowerCase();
    const links = document.querySelectorAll('.sidebar-nav a');
    const clearBtn = document.getElementById('searchClear');

    clearBtn.style.display = filter.length > 0 ? "block" : "none";

    links.forEach(link => {
        const text = link.innerText.toLowerCase();
        link.style.display = text.includes(filter) ? "flex" : "none";
    });
}

function clearSearch() {
    const input = document.getElementById('toolSearch');
    input.value = "";
    filterTools();
    input.focus();
}
