// --- CONFIGURATION ---
const DATE_RENTREE = new Date("2026-09-02").getTime(); 

// --- DONNÉES DU PROGRAMME SUR 14 JOURS (AVEC ESPAGNOL) ---
const programme = [
    {
        jour: 1,
        maths: ["Priorités de calcul", "Fractions", "Puissances", "Faire 25 exercices"],
        physique: ["Unités", "Conversions", "Chiffres significatifs", "10 exercices"],
        nsi: ["Variables", "Types Python", "print()", "input()"],
        espagnol: [
            "Revoir les pronoms personnels (yo, tú, él, ella, usted, nosotros, vosotros, ellos, ustedes)",
            "Revoir le présent de : ser, estar, tener, haber",
            "Apprendre 20 mots de vocabulaire courant",
            "Écrire 5 phrases simples en espagnol"
        ],
        lecture: ["20 minutes de lecture"]
    },
    {
        jour: 2,
        maths: ["Développement", "Double distributivité", "Factorisation", "25 exercices"],
        physique: ["Masse volumique"],
        nsi: ["Conditions if / elif / else"],
        espagnol: [
            "Revoir la conjugaison des verbes réguliers en -AR",
            "Revoir les verbes en -ER",
            "Revoir les verbes en -IR",
            "Apprendre 10 verbes courants",
            "Faire 15 phrases à compléter ou à conjuguer"
        ],
        lecture: ["20 minutes"]
    },
    {
        jour: 3,
        maths: ["Équations du premier degré", "Problèmes"],
        physique: ["Forces"],
        nsi: ["Boucles for"],
        espagnol: [
            "Revoir la différence entre SER et ESTAR",
            "Apprendre les principaux cas d'utilisation",
            "Faire 15 exercices",
            "Écrire 10 phrases utilisant ser ou estar"
        ],
        lecture: ["20 minutes"]
    },
    {
        jour: 4,
        maths: ["Inéquations", "Intervalles"],
        physique: ["Mouvement"],
        nsi: ["Boucles while"],
        espagnol: [
            "Apprendre 20 nouveaux mots (famille, école, loisirs, maison)",
            "Réviser les mots des jours précédents",
            "Écrire 10 phrases avec le nouveau vocabulaire"
        ],
        lecture: ["20 minutes"]
    },
    {
        jour: 5,
        maths: ["Fonctions", "Images", "Antécédents", "Lecture graphique"],
        physique: ["Vitesse"],
        nsi: ["Fonctions Python"],
        espagnol: [
            "Revoir le passé composé (pretérito perfecto)",
            "Revoir la formation avec HABER",
            "Apprendre les participes passés irréguliers importants",
            "Faire 15 exercices",
            "Écrire 5 phrases sur ce qu'on a fait récemment"
        ],
        lecture: ["20 minutes"]
    },
    {
        jour: 6,
        maths: ["Variations", "Tableaux de variations"],
        physique: ["Énergie"],
        nsi: ["Exercices fonctions"],
        espagnol: [
            "Regarder 15 à 20 min de contenu en espagnol (sous-titres ES)",
            "Noter 5 nouveaux mots",
            "Noter 3 expressions entendues",
            "Écrire en français 2-3 phrases sur ce que la vidéo racontait"
        ],
        lecture: ["20 minutes"]
    },
    {
        jour: 7,
        maths: ["Droites", "Coefficient directeur"],
        physique: ["Travail d'une force"],
        nsi: ["Listes Python"],
        espagnol: [
            "Réviser tout le vocabulaire des jours 1 à 6",
            "Refaire les exercices où des erreurs ont été faites",
            "Revoir ser / estar",
            "Faire un mini-test de 20 questions",
            "Écrire 5 phrases sans regarder le cours"
        ],
        lecture: ["20 minutes"]
    },
    {
        jour: 8,
        maths: ["Vecteurs", "Coordonnées"],
        physique: ["Puissance"],
        nsi: ["Parcourir une liste"],
        espagnol: [
            "Revoir l'imparfait espagnol",
            "Apprendre les principales irrégularités",
            "Faire 15 exercices",
            "Écrire 8 phrases sur son enfance ou ses habitudes"
        ],
        lecture: ["20 minutes"]
    },
    {
        jour: 9,
        maths: ["Géométrie analytique", "Distance", "Milieu"],
        physique: ["Électricité"],
        nsi: ["Chaînes de caractères"],
        espagnol: [
            "Revoir le futur simple",
            "Apprendre les principaux verbes irréguliers",
            "Faire 15 exercices",
            "Écrire 8 phrases sur ses projets futurs"
        ],
        lecture: ["20 minutes"]
    },
    {
        jour: 10,
        maths: ["Probabilités"],
        physique: ["Circuits électriques"],
        nsi: ["Exercices complets"],
        espagnol: [
            "Revoir : muy/mucho, por/para, bueno/bien, mucho/poco, masculin/féminin, singulier/pluriel",
            "Faire 20 exercices mélangés"
        ],
        lecture: ["20 minutes"]
    },
    {
        jour: 11,
        maths: ["Statistiques", "Moyenne", "Médiane", "Quartiles"],
        physique: ["Exercices mélangés"],
        nsi: ["Mini projet Python"],
        espagnol: [
            "Apprendre 20 nouveaux mots (voyages, nourriture, ville, environnement)",
            "Écrire un texte de 10 lignes avec au moins 10 nouveaux mots",
            "Corriger les erreurs"
        ],
        lecture: ["20 minutes"]
    },
    {
        jour: 12,
        maths: ["Révisions générales : calcul + fonctions + équations"],
        physique: ["Révisions générales"],
        nsi: ["Révisions générales"],
        espagnol: [
            "Regarder 20 min de contenu espagnol (1ère écoute sans sous-titres, 2ème avec sous-titres ES)",
            "Noter 10 mots ou expressions compris",
            "Résumer le contenu en 5 phrases simples en espagnol"
        ],
        lecture: ["20 minutes"]
    },
    {
        jour: 13,
        maths: ["Contrôle blanc de 1h30"],
        physique: ["Contrôle blanc de 45 min"],
        nsi: ["Exercices chronométrés"],
        espagnol: [
            "Écrire un texte de 15 lignes : 'Mis vacaciones y mis proyectos para el próximo año'",
            "Inclure : présent, passé, futur, 10 mots de vocabulaire, 3 connecteurs logiques",
            "Relire et corriger conjugaisons, accords et vocabulaire"
        ],
        lecture: ["20 minutes"]
    },
    {
        jour: 14,
        maths: ["Corriger les erreurs du contrôle"],
        physique: ["Corriger les erreurs"],
        nsi: ["Corriger les erreurs"],
        espagnol: [
            "Créer et faire un mini contrôle final (vocabulaire, conjugaison, grammaire, compréhension, expression)",
            "Corriger le contrôle et noter les 5 erreurs les plus fréquentes",
            "Créer une liste 'À revoir avant la rentrée'"
        ],
        lecture: ["20 minutes"]
    }
];

// --- GESTION DE L'ÉTAT LOCAL ---
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
    setInterval(updateCountdown, 1000 * 60 * 60);
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

    const matieres = [
        { id: 'maths', icon: '🧮', name: 'Mathématiques' },
        { id: 'physique', icon: '⚛️', name: 'Physique-Chimie' },
        { id: 'nsi', icon: '💻', name: 'NSI' },
        { id: 'espagnol', icon: '🇪🇸', name: 'Espagnol' },
        { id: 'lecture', icon: '📖', name: 'Lecture' }
    ];

    programme.forEach((dayData, dayIndex) => {
        const card = document.createElement('div');
        card.className = 'card day-card';
        card.id = `day-${dayIndex + 1}`;
        
        let htmlContent = `<h3>Jour ${dayData.jour}</h3>`;

        matieres.forEach(mat => {
            if (dayData[mat.id]) {
                htmlContent += `<div class="subject-section subject-${mat.id}">
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
    
    const matieres = ['maths', 'physique', 'nsi', 'espagnol', 'lecture'];
    
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

    programme.forEach((dayData, dayIndex) => {
        let dayIsComplete = true;
        const matieres = ['maths', 'physique', 'nsi', 'espagnol', 'lecture'];
        
        matieres.forEach(mat => {
            if(dayData[mat]) {
                dayData[mat].forEach((_, taskIndex) => {
                    const taskId = `d${dayIndex}-m${mat}-t${taskIndex}`;
                    if(!userState[taskId]) {
                        dayIsComplete = false;
                    }
                });
            }
        });

        if(dayIsComplete) daysCompleted++;
        
        if(document.getElementById(`day-${dayIndex + 1}`)) {
            const msg = document.getElementById(`msg-d${dayIndex}`);
            const card = document.getElementById(`day-${dayIndex + 1}`);
            if(dayIsComplete) {
                msg.style.display = 'block';
                card.style.borderColor = 'var(--accent-green)';
            }
        }
    });

    document.getElementById('global-progress-text').innerText = `Jours terminés : ${daysCompleted}/14`;
    const percentDays = Math.round((daysCompleted / 14) * 100);
    document.getElementById('global-progress-fill').style.width = `${percentDays}%`;
    
    const currentDayDisplay = daysCompleted < 14 ? daysCompleted + 1 : 14;
    document.getElementById('today-title').innerText = `Jour actuel : ${currentDayDisplay}`;
}

// --- STATISTIQUES ---
function updateStatsUI() {
    let daysCompleted = 0;
    let totalTasksGlobal = 0;
    let tasksCompletedGlobal = 0;

    const subjectStats = {
        maths: { total: 0, done: 0 },
        physique: { total: 0, done: 0 },
        nsi: { total: 0, done: 0 },
        espagnol: { total: 0, done: 0 },
        lecture: { total: 0, done: 0 }
    };

    const calGrid = document.getElementById('calendar-grid');
    calGrid.innerHTML = '';

    programme.forEach((dayData, dayIndex) => {
        let dayIsComplete = true;
        const matieres = ['maths', 'physique', 'nsi', 'espagnol', 'lecture'];
        
        matieres.forEach(mat => {
            if(dayData[mat]) {
                dayData[mat].forEach((_, taskIndex) => {
                    totalTasksGlobal++;
                    subjectStats[mat].total++;
                    
                    const taskId = `d${dayIndex}-m${mat}-t${taskIndex}`;
                    if(userState[taskId]) {
                        tasksCompletedGlobal++;
                        subjectStats[mat].done++;
                    } else {
                        dayIsComplete = false;
                    }
                });
            }
        });

        if(dayIsComplete) daysCompleted++;

        const calBox = document.createElement('div');
        calBox.className = `cal-day ${dayIsComplete ? 'completed' : ''}`;
        calBox.innerText = dayIndex + 1;
        calGrid.appendChild(calBox);
    });

    const percentGlobal = Math.round((tasksCompletedGlobal / totalTasksGlobal) * 100) || 0;

    document.getElementById('stat-days').innerText = `${daysCompleted}/14`;
    document.getElementById('stat-tasks').innerText = `${tasksCompletedGlobal}/${totalTasksGlobal}`;
    document.getElementById('stat-percent').innerText = `${percentGlobal}%`;
    document.getElementById('stat-streak').innerText = `${daysCompleted} 🔥`;

    // Statistiques spécifiques par matière
    const matList = ['maths', 'physique', 'nsi', 'espagnol', 'lecture'];
    matList.forEach(mat => {
        const total = subjectStats[mat].total;
        const done = subjectStats[mat].done;
        const pct = total > 0 ? Math.round((done / total) * 100) : 0;

        const percentEl = document.getElementById(`stat-${mat}-percent`);
        const barEl = document.getElementById(`bar-${mat}`);

        if (percentEl) percentEl.innerText = `${pct}%`;
        if (barEl) barEl.style.width = `${pct}%`;

        if (mat === 'espagnol') {
            const taskDetailsEl = document.getElementById('stat-espagnol-tasks');
            if (taskDetailsEl) taskDetailsEl.innerText = `${done} / ${total} tâches terminées`;
        }
    });
}

// --- RÉINITIALISATION ---
function resetAllProgress() {
    if (confirm("Es-tu sûr de vouloir réinitialiser toute ta progression ? Cette action est irréversible.")) {
        userState = {};
        localStorage.removeItem('objectifPremiereState');
        generateProgramHTML();
        updateGlobalUI();
        updateStatsUI();
    }
}

// --- CONFETTIS ---
function triggerConfetti() {
    const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#06b6d4'];
    
    for(let i = 0; i < 70; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confetti.style.opacity = Math.random() + 0.5;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}
