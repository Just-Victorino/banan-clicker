const tickRate = 1000 / 30; // 30 FPS
let clickStrength = 1;
let score = 0;

let collector = new Farm("collector", 0.1, 15, "buyCollector");
let harvester = new Farm('harvester', 1, 100, 'buyHarvester');
let sanitizer = new Farm('sanitizer', 5, 215, 'buySanitizer');
let chipmaker = new Farm('chip maker', 15, 1000, 'buyChipmaker');

let strongGrip = new StrongGrip('Strong Grip 1', 100, collector);

function scorePlusPlus() {
    score+= clickStrength;
}

function incScore() {
    score += collector.cps; 
    score += harvester.cps;
    score += sanitizer.cps;
    score += chipmaker.cps;
}

function updateButtons() {
    collector.buttonState();
    harvester.buttonState();
    sanitizer.buttonState();
    chipmaker.buttonState();
    strongGrip1.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);