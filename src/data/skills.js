// src/data/skills.js
const skillsData = [{
        category: "Développement Web & Logiciel",
        icon: "code",
        skills: [
            { id: 1, name: "HTML / CSS", level: 90 },
            { id: 2, name: "JavaScript", level: 85 },
            { id: 3, name: "Bootstrap", level: 80 },
            { id: 4, name: "ReactJS", level: 75 },
            { id: 5, name: "Node.js", level: 70 },
            { id: 6, name: "MongoDB", level: 65 },
            { id: 7, name: "Git", level: 80 },
        ],
    },
    {
        category: "Conception & Simulation",
        icon: "ruler",
        skills: [
            { id: 8, name: "MATLAB / Simulink", level: 90 },
            { id: 9, name: "CST Studio", level: 85 },
            { id: 10, name: "LTspice", level: 85 },
            { id: 11, name: "FDTD", level: 75 }, // ✅ Renommé en un seul mot
        ],
    },
    {
        category: "Développement embarqué & IoT",
        icon: "cpu",
        skills: [
            { id: 12, name: "Python", level: 90 },
            { id: 13, name: "Tkinter", level: 75 },
            { id: 14, name: "Protocoles de communication", level: 75 },
            { id: 15, name: "Acquisition IoT", level: 80 },
            { id: 16, name: "Microcontrôleurs", level: 75 },
            { id: 17, name: "MPPT / Boost", level: 70 },
        ],
    },
    {
        category: "IA & Traitement du Signal",
        icon: "brain", // Si vous avez l'icône "brain" dans lucide-react, sinon gardez "code"
        skills: [
            { id: 18, name: "Machine Learning (Scikit-learn)", level: 75 },
            { id: 19, name: "Deep Learning (TensorFlow/Keras)", level: 70 },
            { id: 20, name: "Traitement du signal (OFDM / FFT)", level: 80 },
            { id: 21, name: "Réseaux Wi-Fi 6/7 / 5G", level: 65 },
        ],
    },
];

export default skillsData;