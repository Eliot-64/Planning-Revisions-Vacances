// --- CONFIGURATION ---
// Tu peux modifier la date de la rentrée ici (Format: AAAA-MM-JJ)
const DATE_RENTREE = new Date("2026-09-02").getTime(); 

// --- DONNÉES DU PROGRAMME ---
const programme = [
    {
        jour: 1,
        maths: ["Priorités de calcul", "Fractions", "Puissances", "Faire 25 exercices"],
        physique: ["Unités", "Conversions", "Chiffres significatifs", "10 exercices"],
        nsi: ["Variables", "Types Python", "print()", "input()"],
        lecture: ["20 minutes de lecture"]
    },
    {
        jour: 2,
        maths: ["Développement", "Double distributivité", "Factorisation", "25 exercices"],
        physique: ["Masse volumique"],
        nsi: ["Conditions if / elif / else"],
        lecture: ["20 minutes"]
    },
    {
        jour: 3,
        maths: ["Équations du premier degré", "Problèmes"],
        physique: ["Forces"],
        nsi: ["Boucles for"],
        lecture: ["20 minutes"]
    },
    {
        jour: 4,
        maths: ["Inéquations", "Intervalles"],
        physique: ["Mouvement"],
        nsi: ["Boucles while"],
        lecture: ["20 minutes"]
    },
    {
        jour: 5,
        maths: ["Fonctions", "Images", "Antécédents", "Lecture graphique"],
        physique: ["Vitesse"],
        nsi: ["Fonctions Python"],
        lecture: ["20 minutes"]
    },
    {
        jour: 6,
        maths: ["Variations", "Tableaux de variations"],
        physique: ["Énergie"],
        nsi: ["Exercices fonctions"],
        lecture: ["20 minutes"]
    },
    {
        jour: 7,
        maths: ["Droites", "Coefficient directeur"],
        physique: ["Travail d'une force"],
        nsi: ["Listes Python"],
        lecture: ["20 minutes"]
    },
    {
        jour: 8,
        maths: ["Vecteurs", "Coordonnées"],
        physique: ["Puissance"],
        nsi: ["Parcourir une liste"],
        lecture: ["20 minutes"]
    },
    {
        jour: 9,
        maths: ["Géométrie analytique", "Distance", "Milieu"],
        physique: ["Électricité"],
        nsi: ["Chaînes de caractères"],
        lecture: ["20 minutes"]
    },
    {
        jour: 10,
        maths: ["Probabilités"],
        physique: ["Circuits électriques"],
        nsi: ["Exercices complets"],
        lecture: ["20 minutes"]
    },
    {
        jour: 11,
        maths: ["Statistiques", "Moyenne", "Médiane", "Quartiles"],
        physique: ["Exercices mélangés"],
        nsi: ["Mini projet Python"],
        lecture: ["20 minutes"]
    },
    {
        jour: 12,
        maths: ["Révisions générales : calcul + fonctions + équations"],
        physique: ["Révisions générales"],
        nsi: ["Révisions générales"],
        lecture: ["20 minutes"]
    },
    {
        jour: 13,
        maths: ["Contrôle blanc de 1h30"],
        physique: ["Contrôle blanc de 45 min"],
        nsi: ["Exercices chronométrés"],
        lecture: ["20 minutes"]
    },
    {
        jour: 14,
        maths: ["Corriger les erreurs du contrôle"],
        physique: ["Corriger les erreurs"],
        nsi: ["Corriger les erreurs"],
        lecture: ["20 minutes"]
    }
];

// --- GESTION DE L'ÉTAT (Sauvegarde locale) ---
let userState = JSON.parse(localStorage.getItem('objectifPremiereState')) || {};

function saveState() {
    localStorage.setItem('objectifPremiereState', JSON.stringify(userState));
    updateGlobalUI();
}

// --- INITIALISATION ---
document.addEventListener("DOMContentLoaded", () => {
    updateCountdown();
    generateProgramHTML();
    updateGlobalUI();
    setInterval(updateCountdown, 1000 * 60 * 60); // Update compte à rebours toutes les heures
});

// --- NAVIGATION ---
function switchTab(tabId) {
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active-view'));
    document.querySelectorAll('.glass-nav li').forEach(li => li.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active-view');
    document.querySelector(`[data-target="${tabId}"]`).classList.add('active');
    
    if(tabId === 'stats') updateStatsUI();
}

function startToday() {
    switchTab('program');
    // Scroll jusqu'au premier jour non terminé
    const firstUnfinished = document.querySelector('.card.day-card:not(.completed-day-card)');
    if(firstUnfinished) {
        firstUnfinished.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// --- COMPTE À REBOURS ---
function updateCountdown() {
    const now = new Date().getTime();
    const distance = DATE_RENTREE - now;
    const days = Math.ceil(distance / (1000 * 60 * 60 * 24));
    
    const el = document.getElementById("countdown-days");
    if (days > 0) {
        el.innerText = `${days} Jours`;
    } else {
        el.innerText = "C'est la rentrée !";
    }
}

// --- GÉNÉRATION DU PROGRAMME HTML ---
function generateProgramHTML() {
    const container = document.getElementById('days-container');
    container.innerHTML = '';

    programme.forEach((dayData, dayIndex) => {
        const card = document.createElement('div');
        card.className = 'card day-card';
        card.id = `day-${dayIndex + 1}`;
        
        let htmlContent = `<h3>Jour ${dayData.jour}</h3>`;
        
        const matieres = [
            { id: 'maths', icon: '🧮', name: 'Mathématiques' },
            { id: 'physique', icon: '⚛️', name: 'Physique-Chimie' },
            { id: 'nsi', icon: '💻', name: 'NSI' },
            { id: 'lecture', icon: '📖', name: 'Lecture' }
        ];

        matieres.forEach(mat => {
            if (dayData[mat.id]) {
                htmlContent += `<div class="subject-section">
                    <div class="subject-title">${mat.icon} ${mat.name}</div>`;
                
                dayData[mat.id].forEach((task, taskIndex) => {
                    const taskId = `d${dayIndex}-m${mat.id}-t${taskIndex}`;
                    const isChecked = userState[taskId] ? 'checked' : '';
                    const textClass = isChecked ? 'checked-text' : '';
                    
                    htmlContent += `
                        <label class="task-label ${textClass}" id="label-${taskId}">
                            <input type="checkbox" onchange="toggleTask('${taskId}', ${dayIndex})" ${isChecked}>
                            <span>${task}</span>
                        </label>
                    `;
                });
                htmlContent += `</div>`;
            }
        });

        htmlContent += `<div id="msg-d${dayIndex}" class="day-done-msg">Journée terminée 🎉</div>`;
        card.innerHTML = htmlContent;
        container.appendChild(card);
    });
}

// --- GESTION DES TÂCHES ---
function toggleTask(taskId, dayIndex) {
    const checkbox = document.querySelector(`#label-${taskId} input`);
    const label = document.getElementById(`label-${taskId}`);
    
    userState[taskId] = checkbox.checked;
    
    if(checkbox.checked) {
        label.classList.add('checked-text');
    } else {
        label.classList.remove('checked-text');
    }
    
    saveState();
    checkDayCompletion(dayIndex);
}

function checkDayCompletion(dayIndex) {
    const dayData = programme[dayIndex];
    let allChecked = true;
    
    const matieres = ['maths', 'physique', 'nsi', 'lecture'];
    
    matieres.forEach(mat => {
        if(dayData[mat]) {
            dayData[mat].forEach((_, taskIndex) => {
                const taskId = `d${dayIndex}-m${mat}-t${taskIndex}`;
                if(!userState[taskId]) allChecked = false;
            });
        }
    });

    const msg = document.getElementById(`msg-d${dayIndex}`);
    const card = document.getElementById(`day-${dayIndex + 1}`);

    if(allChecked) {
        if(msg.style.display !== 'block') {
            triggerConfetti();
        }
        msg.style.display = 'block';
        card.classList.add('completed-day-card');
        card.style.borderColor = 'var(--accent-green)';
    } else {
        msg.style.display = 'none';
        card.classList.remove('completed-day-card');
        card.style.borderColor = 'var(--glass-border)';
    }
    
    return allChecked;
}

// --- MISE À JOUR DE L'INTERFACE GLOBALE ---
function updateGlobalUI() {
    let daysCompleted = 0;
    let totalTasks = 0;
    let tasksCompleted = 0;

    programme.forEach((dayData, dayIndex) => {
        let dayIsComplete = true;
        const matieres = ['maths', 'physique', 'nsi', 'lecture'];
        
        matieres.forEach(mat => {
            if(dayData[mat]) {
                dayData[mat].forEach((_, taskIndex) => {
                    totalTasks++;
                    const taskId = `d${dayIndex}-m${mat}-t${taskIndex}`;
                    if(userState[taskId]) {
                        tasksCompleted++;
                    } else {
                        dayIsComplete = false;
                    }
                });
            }
        });

        if(dayIsComplete) daysCompleted++;
        
        // Initialiser visuellement les jours complétés sans relancer les confettis
        if(document.getElementById(`day-${dayIndex + 1}`)) {
            const msg = document.getElementById(`msg-d${dayIndex}`);
            const card = document.getElementById(`day-${dayIndex + 1}`);
            if(dayIsComplete) {
                msg.style.display = 'block';
                card.style.borderColor = 'var(--accent-green)';
            }
        }
    });

    // Dashboard UI
    document.getElementById('global-progress-text').innerText = `Jours terminés : ${daysCompleted}/14`;
    const percentDays = (daysCompleted / 14) * 100;
    document.getElementById('global-progress-fill').style.width = `${percentDays}%`;
    
    // Day indicator
    const currentDayDisplay = daysCompleted < 14 ? daysCompleted + 1 : 14;
    document.getElementById('today-title').innerText = `Jour actuel : ${currentDayDisplay}`;
}

// --- STATISTIQUES ---
function updateStatsUI() {
    let daysCompleted = 0;
    let totalTasks = 0;
    let tasksCompleted = 0;
    
    const calGrid = document.getElementById('calendar-grid');
    calGrid.innerHTML = '';

    programme.forEach((dayData, dayIndex) => {
        let dayIsComplete = true;
        const matieres = ['maths', 'physique', 'nsi', 'lecture'];
        
        matieres.forEach(mat => {
            if(dayData[mat]) {
                dayData[mat].forEach((_, taskIndex) => {
                    totalTasks++;
                    const taskId = `d${dayIndex}-m${mat}-t${taskIndex}`;
                    if(userState[taskId]) {
                        tasksCompleted++;
                    } else {
                        dayIsComplete = false;
                    }
                });
            }
        });

        if(dayIsComplete) daysCompleted++;

        // Construction du calendrier
        const calBox = document.createElement('div');
        calBox.className = `cal-day ${dayIsComplete ? 'completed' : ''}`;
        calBox.innerText = dayIndex + 1;
        calGrid.appendChild(calBox);
    });

    const percentTotal = Math.round((tasksCompleted / totalTasks) * 100) || 0;

    document.getElementById('stat-days').innerText = `${daysCompleted}/14`;
    document.getElementById('stat-tasks').innerText = `${tasksCompleted}/${totalTasks}`;
    document.getElementById('stat-percent').innerText = `${percentTotal}%`;
    document.getElementById('stat-streak').innerText = `${daysCompleted} 🔥`; // Basique, compte les jours finis
}

// --- SYSTÈME DE CONFETTIS (100% Vanilla JS) ---
function triggerConfetti() {
    const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'];
    
    for(let i = 0; i < 70; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Randomisation
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's'; // Entre 2s et 4s
        confetti.style.opacity = Math.random() + 0.5;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        document.body.appendChild(confetti);
        
        // Nettoyage après l'animation
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}