/**
 * Eulerian Path Dynamic Simulation
 * Developed for Tábata Saraiva's Course
 */

const app = {
    canvas: document.getElementById('game-canvas'),
    ctx: null,
    bgCanvas: document.getElementById('bg-canvas'),
    bgCtx: null,

    // State
    currentUser: '',
    currentDifficulty: 'easy',
    currentLevelIndex: 0,
    progress: {
        easy: 0,
        medium: 0,
        hard: 0
    },

    // Game State
    nodes: [],
    edges: [],
    visitedEdges: new Set(),
    currentNode: -1, // The node the player is currently at
    pathHistory: [], // To allow undo or just tracking
    isDragging: false,
    dragTarget: null, // Node we are hovering over while dragging
    pointerPos: { x: 0, y: 0 },

    // Config
    nodeRadius: 15,
    colors: {
        node: '#1f6feb',
        nodeActive: '#f78166',
        nodeVisited: '#2ea043',
        edge: '#30363d',
        edgeVisited: '#238636',
        edgeHighlight: '#58a6ff'
    },

    init: function () {
        this.ctx = this.canvas.getContext('2d');
        this.bgCtx = this.bgCanvas.getContext('2d');

        this.resize();
        window.addEventListener('resize', () => {
            this.resize();
            this.draw();
        });

        this.setupEventListeners();
        this.generateQRCode();
        this.startBackgroundAnimation();
    },

    generateQRCode: function () {
        const container = document.getElementById('qrcode-container');
        const emptyContainer = document.getElementById('qrcode');
        let currentUrl = window.location.href;
        const hostname = window.location.hostname;

        // Function to create QR
        const makeQR = (text) => {
            emptyContainer.innerHTML = '';
            new QRCode(emptyContainer, {
                text: text,
                width: 90,
                height: 90,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
        };

        // Try to get Local IP via WebRTC
        const getLocalIP = (callback) => {
            const pc = new (window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection)({ iceServers: [] });
            pc.createDataChannel('');
            pc.createOffer().then(offer => pc.setLocalDescription(offer)).catch(() => { });
            pc.onicecandidate = (ice) => {
                if (ice && ice.candidate && ice.candidate.candidate) {
                    const result = /([0-9]{1,3}(\.[0-9]{1,3}){3})/.exec(ice.candidate.candidate);
                    if (result && result[1] && result[1] !== '127.0.0.1') {
                        callback(result[1]);
                        pc.close();
                    }
                }
            };
        };

        if (typeof QRCode !== 'undefined') {
            container.style.display = 'flex';

            // Allow fixing localhost
            if (hostname === 'localhost' || hostname === '127.0.0.1') {
                // Check if we already added the input
                if (!document.getElementById('ip-input')) {
                    const inputGroup = document.createElement('div');
                    inputGroup.style.marginTop = '10px';
                    inputGroup.style.display = 'flex';
                    inputGroup.style.flexDirection = 'column';
                    inputGroup.style.alignItems = 'center';
                    inputGroup.innerHTML = `
                        <label style="color:#333; font-size: 0.8rem; margin-bottom:4px;">IP da Rede (Confirmar):</label>
                        <input id="ip-input" type="text" value="192.168.31.49" style="padding: 5px; border: 1px solid #ccc; border-radius: 4px; text-align: center; width: 150px;">
                     `;
                    container.insertBefore(inputGroup, container.firstChild);

                    const input = document.getElementById('ip-input');

                    // Helper to update everything
                    const updateWithIP = (ip) => {
                        input.value = ip;
                        const port = window.location.port ? `:${window.location.port}` : '';
                        const path = window.location.pathname;
                        const newUrl = `${window.location.protocol}//${ip}${port}${path}`;
                        makeQR(newUrl);
                    };

                    // Manual Input Listener
                    input.addEventListener('input', (e) => {
                        const val = e.target.value.trim();
                        if (val.length > 7) {
                            updateWithIP(val);
                        } else {
                            makeQR(currentUrl);
                        }
                    });

                    // Default to this IP immediately
                    updateWithIP("192.168.31.49");
                }
            } else {
                makeQR(currentUrl);
            }
        }
    },

    resize: function () {
        const container = document.getElementById('canvas-container');
        if (!container) return; // Guard clause
        this.dpr = window.devicePixelRatio || 1;

        // Game Canvas
        this.canvas.width = container.clientWidth * this.dpr;
        this.canvas.height = container.clientHeight * this.dpr;
        this.canvas.style.width = `${container.clientWidth}px`;
        this.canvas.style.height = `${container.clientHeight}px`;

        this.ctx.scale(this.dpr, this.dpr);

        // BG Canvas
        this.bgCanvas.width = window.innerWidth * this.dpr;
        this.bgCanvas.height = window.innerHeight * this.dpr;
        this.bgCanvas.style.width = `${window.innerWidth}px`;
        this.bgCanvas.style.height = `${window.innerHeight}px`;
        this.bgCtx.scale(this.dpr, this.dpr);
    },

    startGame: function () {
        try {
            console.log("Attempting to start game...");
            const nameInput = document.getElementById('student-name');
            const name = nameInput.value.trim();

            if (name) {
                console.log("User logged in:", name);
                this.currentUser = name;
                document.getElementById('player-display').textContent = `Aluno(a): ${name}`;

                // Direct to the single hard level
                this.currentDifficulty = 'hard';
                this.currentLevelIndex = 0;
                this.showScreen('game-view');
            } else {
                alert('Por favor, digite seu nome para começar.');
                nameInput.focus();
            }
        } catch (e) {
            alert('Erro ao iniciar: ' + e.message);
            console.error(e);
        }
    },

    setupEventListeners: function () {
        // Backup listener in case onclick fails
        const startBtn = document.getElementById('start-btn');
        if (startBtn) {
            startBtn.onclick = () => this.startGame();
        }

        // Mouse/Touch Events for Game Canvas
        this.canvas.addEventListener('mousedown', (e) => this.handleInputStart(e));
        this.canvas.addEventListener('mousemove', (e) => this.handleInputMove(e));
        this.canvas.addEventListener('mouseup', (e) => this.handleInputEnd(e));

        this.canvas.addEventListener('touchstart', (e) => this.handleInputStart(e));
        this.canvas.addEventListener('touchmove', (e) => this.handleInputMove(e));
        this.canvas.addEventListener('touchend', (e) => this.handleInputEnd(e));
    },

    handleInputStart: function (e) {
        if (!this.nodes.length) return;
        e.preventDefault();
        const pos = this.getPointerPos(e);
        this.pointerPos = pos;

        // Find if clicked on a node
        const nodeIndex = this.hitTestNode(pos);

        if (nodeIndex !== -1) {
            // If game hasn't started (currentNode is -1), start here
            if (this.currentNode === -1) {
                this.currentNode = nodeIndex;
                this.isDragging = true;
                this.pathHistory.push(nodeIndex);
                this.draw();
            } else if (this.currentNode === nodeIndex) {
                // Clicking on the current node to drag
                this.isDragging = true;
            }
        }
    },

    handleInputMove: function (e) {
        if (!this.isDragging) return;
        e.preventDefault();
        const pos = this.getPointerPos(e);
        this.pointerPos = pos;

        this.dragTarget = this.hitTestNode(pos);
        this.draw();
    },

    handleInputEnd: function (e) {
        if (!this.isDragging) return;
        e.preventDefault();
        this.isDragging = false;

        // Check if we released on a valid target
        if (this.dragTarget !== -1 && this.dragTarget !== this.currentNode) {
            this.attemptMove(this.currentNode, this.dragTarget);
        }

        this.dragTarget = null;
        this.draw();
    },

    getPointerPos: function (e) {
        const rect = this.canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        // Return logical pixels directly
        // The canvas drawing is scaled by ctx.scale, so logical inputs map to logical drawing commands
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    },

    hitTestNode: function (pos) {
        for (let i = 0; i < this.nodes.length; i++) {
            const node = this.nodes[i];
            const dx = pos.x - node.x;
            const dy = pos.y - node.y;
            if (dx * dx + dy * dy <= this.nodeRadius * this.nodeRadius * 2.5) { // generous hit area
                return i;
            }
        }
        return -1;
    },

    attemptMove: function (from, to) {
        // Check if edge exists and not visited
        const edgeIdx = this.findEdge(from, to);
        if (edgeIdx !== -1 && !this.visitedEdges.has(edgeIdx)) {
            // Valid move
            this.visitedEdges.add(edgeIdx);
            this.currentNode = to;
            this.pathHistory.push(to);
            this.updateStats();

            if (!this.checkWinCondition()) {
                this.checkLossCondition();
            }
        } else {
            // Optional: Feedback for invalid move?
            if (edgeIdx === -1) {
                // No edge
            } else if (this.visitedEdges.has(edgeIdx)) {
                this.showMessage("Essa aresta já foi percorrida! Escolha outra.", "error");
            }
        }
    },

    findEdge: function (n1, n2) {
        return this.edges.findIndex(edge =>
            (edge[0] === n1 && edge[1] === n2) || (edge[0] === n2 && edge[1] === n1)
        );
    },

    checkWinCondition: function () {
        if (this.visitedEdges.size === this.edges.length) {
            // Level Complete
            setTimeout(() => {
                this.showModal('Nível Concluído!', 'Parabéns! Você completou o desafio.', true);
                this.updateProgress();
            }, 300);
            return true;
        }
        return false;
    },

    checkLossCondition: function () {
        // Check if current node has any unvisited edges connected to it
        const hasMoves = this.edges.some((edge, idx) => {
            if (this.visitedEdges.has(idx)) return false; // Already visited
            // Check if edge connects to current node
            return (edge[0] === this.currentNode || edge[1] === this.currentNode);
        });

        if (!hasMoves) {
            setTimeout(() => {
                this.showModal('Sem Saída!', 'Você não tem mais movimentos possíveis e o grafo não foi completado. Lembre-se: planeje seu caminho para não ficar preso!', false);
            }, 300);
        }
    },

    updateProgress: function () {
        if (this.currentLevelIndex + 1 > this.progress[this.currentDifficulty]) {
            this.progress[this.currentDifficulty] = this.currentLevelIndex + 1;
            // Update UI
            document.getElementById(`status-${this.currentDifficulty}`).textContent =
                `${Math.min(5, this.progress[this.currentDifficulty])}/5 Concluídos`;
        }
    },

    showScreen: function (screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
        if (screenId === 'game-view') {
            this.resize();
            this.loadLevel();
        }
    },

    openLevelList: function (diff) {
        this.currentDifficulty = diff;
        const levels = LEVEL_DATA[diff];
        const container = document.getElementById('levels-container');
        const completedCount = this.progress[diff];

        document.getElementById('detail-title').textContent = `Níveis - ${this.translateDiff(diff)}`;
        container.innerHTML = '';

        levels.forEach((level, index) => {
            const isLocked = index > completedCount;
            const isCompleted = index < completedCount;
            const isCurrent = index === completedCount;

            let statusClass = '';
            let icon = '';

            if (isLocked) {
                statusClass = 'locked';
                icon = '🔒';
            } else if (isCompleted) {
                statusClass = 'completed';
                icon = '✅';
            } else {
                statusClass = 'active-level';
                icon = '▶️';
            }

            const div = document.createElement('div');
            div.className = `level-row ${statusClass}`;
            div.innerHTML = `
                <div class="level-info">
                    <h4>${index + 1}. ${level.title || 'Desafio'}</h4>
                    <p>${level.description || ''}</p>
                </div>
                <div class="level-icon">${icon}</div>
            `;

            if (!isLocked) {
                div.onclick = () => this.startLevel(index);
            }

            container.appendChild(div);
        });

        this.showScreen('level-detail-view');
    },

    startLevel: function (index) {
        this.currentLevelIndex = index;
        this.showScreen('game-view');
    },

    loadLevel: function () {
        const levels = LEVEL_DATA[this.currentDifficulty];
        const levelData = levels[this.currentLevelIndex];

        if (!levelData) {
            this.showModal("Módulo Completo!", "Você finalizou todos os níveis desta dificuldade.", true);
            this.returnToMenu();
            return;
        }

        document.getElementById('level-display').textContent = `Nível ${this.translateDiff(this.currentDifficulty)}`;

        // Update Title and Description
        document.getElementById('level-title').textContent = levelData.title || `Desafio ${this.currentLevelIndex + 1}`;
        document.getElementById('level-desc').textContent = levelData.description || "Encontre o Caminho Euleriano.";
        document.getElementById('message-area').style.display = 'none';

        // Parse Node data (relative coords)
        // Use logical dimensions (divide by DPR because ctx is scaled)
        const dpr = this.dpr || 1;
        const w = this.canvas.width / dpr;
        const h = this.canvas.height / dpr;
        const padding = w < 500 ? 25 : 50;

        this.nodes = levelData.nodes.map(n => ({
            x: padding + n[0] * (w - 2 * padding),
            y: padding + n[1] * (h - 2 * padding)
        }));

        this.edges = levelData.edges;
        this.visitedEdges.clear();
        this.currentNode = -1;
        this.pathHistory = [];
        this.isDragging = false;

        this.updateStats();
        this.draw();
    },

    updateStats: function () {
        document.getElementById('edges-display').textContent = `Arestas: ${this.visitedEdges.size}/${this.edges.length}`;
    },

    draw: function () {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw Edges
        ctx.lineWidth = 4;
        this.edges.forEach((edge, idx) => {
            const visited = this.visitedEdges.has(idx);

            const n1 = this.nodes[edge[0]];
            const n2 = this.nodes[edge[1]];

            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = visited ? this.colors.edgeVisited : this.colors.edge;

            // Glow for edges if visited
            if (visited) {
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.colors.edgeVisited;
            } else {
                ctx.shadowBlur = 0;
            }

            ctx.stroke();
            ctx.shadowBlur = 0; // Reset
        });

        // Interactive Drag Line
        if (this.isDragging && this.currentNode !== -1) {
            const startNode = this.nodes[this.currentNode];
            ctx.beginPath();
            ctx.moveTo(startNode.x, startNode.y);
            ctx.lineTo(this.pointerPos.x, this.pointerPos.y);
            ctx.strokeStyle = this.colors.nodeActive; // Drag color
            ctx.setLineDash([10, 10]);
            ctx.stroke();
            ctx.setLineDash([]);
        }

        // Draw Nodes
        this.nodes.forEach((node, idx) => {
            const isActive = (idx === this.currentNode);
            const isHover = (this.dragTarget === idx);
            const isVisited = this.pathHistory.includes(idx);

            ctx.beginPath();
            ctx.arc(node.x, node.y, this.nodeRadius, 0, Math.PI * 2);

            if (isActive) {
                ctx.fillStyle = this.colors.nodeActive;
                ctx.shadowBlur = 15;
                ctx.shadowColor = this.colors.nodeActive;
            } else if (isHover) {
                ctx.fillStyle = this.colors.edgeHighlight;
            } else if (isVisited) {
                ctx.fillStyle = this.colors.nodeVisited;
            } else {
                ctx.fillStyle = this.colors.node;
            }

            ctx.fill();
            ctx.shadowBlur = 0;

            // Border so it pops
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Draw Label (A, B, C...)
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 14px Outfit';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(String.fromCharCode(65 + idx), node.x, node.y);
        });
    },

    resetLevel: function () {
        document.getElementById('modal').classList.remove('open');
        this.visitedEdges.clear();
        this.currentNode = -1;
        this.pathHistory = [];
        this.isDragging = false;
        this.dragTarget = null;
        this.draw();
        this.updateStats();

        // Clear messages
        const msgBox = document.getElementById('message-area');
        msgBox.style.display = 'none';
        if (this.messageTimeout) clearTimeout(this.messageTimeout);
    },

    nextLevel: function () {
        document.getElementById('modal').classList.remove('open');
        this.showScreen('login-view');
        this.currentUser = '';
        document.getElementById('student-name').value = '';
    },

    returnToMenu: function () {
        document.getElementById('modal').classList.remove('open');
        this.showScreen('login-view');
        this.currentUser = '';
    },

    showModal: function (title, msg, isWin = true) {
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-message').textContent = msg;

        const btn = document.getElementById('modal-btn');
        const redoBtn = document.getElementById('modal-redo-btn');

        if (isWin) {
            btn.textContent = "Finalizar"; // Changed from Next Challenge
            btn.onclick = () => app.nextLevel();
            btn.className = "btn btn-primary";
            if (redoBtn) redoBtn.style.display = 'inline-block';
        } else {
            btn.textContent = "Tentar Novamente";
            btn.onclick = () => app.resetLevel();
            btn.className = "btn btn-danger";
            if (redoBtn) redoBtn.style.display = 'none';
        }

        document.getElementById('modal').classList.add('open');
    },

    translateDiff: function (d) {
        if (d === 'easy') return 'Fácil';
        if (d === 'medium') return 'Médio';
        if (d === 'hard') return 'Difícil';
        return d;
    },

    showHint: function () {
        const levels = LEVEL_DATA[this.currentDifficulty];
        const levelData = levels[this.currentLevelIndex];

        if (levelData && levelData.hint) {
            // Check current odd degrees to make it dynamic
            const degrees = new Array(this.nodes.length).fill(0);
            this.edges.forEach(edge => {
                degrees[edge[0]]++;
                degrees[edge[1]]++;
            });

            const oddNodes = degrees.map((d, i) => ({ id: i, degree: d })).filter(n => n.degree % 2 !== 0);

            let hintText = levelData.hint;
            hintText += `<br><br><strong>Análise:</strong> `;
            if (oddNodes.length === 0) {
                hintText += "Todos os nós têm grau par. Existe um Circuito Euleriano (começa e termina no mesmo lugar).";
            } else if (oddNodes.length === 2) {
                hintText += `Existem 2 nós de grau ímpar (${String.fromCharCode(65 + oddNodes[0].id)} e ${String.fromCharCode(65 + oddNodes[1].id)}). Comece por um deles!`;
            } else {
                hintText += `Existem ${oddNodes.length} nós de grau ímpar. Não há Caminho Euleriano possível!`;
            }

            this.showMessage(hintText, 'info');
        } else {
            this.showMessage("Dica não disponível para este nível.", 'info');
        }
    },

    showMessage: function (text, type = 'info') {
        const msgBox = document.getElementById('message-area');
        msgBox.innerHTML = text;
        msgBox.style.display = 'block';
        msgBox.className = `message-box ${type}`;

        // Hide after 8 seconds
        if (this.messageTimeout) clearTimeout(this.messageTimeout);
        this.messageTimeout = setTimeout(() => {
            msgBox.style.display = 'none';
        }, 10000);
    },

    startBackgroundAnimation: function () {
        const particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2
            });
        }

        const animate = () => {
            if (!this.bgCtx) return;
            this.bgCtx.clearRect(0, 0, this.bgCanvas.width, this.bgCanvas.height);
            this.bgCtx.fillStyle = 'rgba(88, 166, 255, 0.3)';

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = window.innerWidth;
                if (p.x > window.innerWidth) p.x = 0;
                if (p.y < 0) p.y = window.innerHeight;
                if (p.y > window.innerHeight) p.y = 0;

                this.bgCtx.beginPath();
                this.bgCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                this.bgCtx.fill();
            });

            // Draw connections between close particles
            this.bgCtx.strokeStyle = 'rgba(88, 166, 255, 0.05)';
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    if (dx * dx + dy * dy < 10000) {
                        this.bgCtx.beginPath();
                        this.bgCtx.moveTo(particles[i].x, particles[i].y);
                        this.bgCtx.lineTo(particles[j].x, particles[j].y);
                        this.bgCtx.stroke();
                    }
                }
            }
            requestAnimationFrame(animate);
        };
        animate();
    }
};

// Data for Levels
// Nodes are [x, y] in 0-1 range.
// Data for Levels
// Nodes are [x, y] in 0-1 range.
const LEVEL_DATA = {
    easy: [],
    medium: [],
    hard: [
        {
            title: "O Desafio Final",
            description: "Um teste de paciência e lógica. Encontre o caminho único.",
            hint: "Verifique os graus dos nós. Lembre-se: 0 ou 2 nós de grau ímpar permitem caminho.",
            nodes: [[0.5, 0.15], [0.85, 0.35], [0.85, 0.75], [0.5, 0.95], [0.15, 0.75], [0.15, 0.35], [0.5, 0.5]],
            edges: [
                [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], // Outer Hexagon
                [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], // Spokes to center
                [0, 2], [2, 4], [4, 0] // Inner Triangle skipping 1
            ]
        }
    ]
};

window.onload = () => app.init();
