// Basic SVG data
const svg = document.querySelector('svg');
const svgns = 'http://www.w3.org/2000/svg';
const output = document.querySelector('#output');

// Polylines
const thous = document.createElementNS(svgns, "polyline");
const hunds = document.createElementNS(svgns, "polyline");
const tens = document.createElementNS(svgns, "polyline");
const ones = document.createElementNS(svgns, "polyline");

// Initialize number input variable
var num;

// Rotation button
const rotBtn = document.querySelector('#rot');
const cont = document.querySelector('#container');
var rotate = false;

// Popover modal and buttons
var modal = document.querySelector('#modal');
var helpBtn = document.querySelector('#help');

function genGlyph(input) {
	// Set polyline attributes for all glyphs
	thous.setAttributeNS(null, "stroke", "black");
	thous.setAttributeNS(null, "fill", "none");
	thous.setAttributeNS(null, "stroke-width", "4");
	hunds.setAttributeNS(null, "stroke", "black");
	hunds.setAttributeNS(null, "fill", "none");
	hunds.setAttributeNS(null, "stroke-width", "4");
	tens.setAttributeNS(null, "stroke", "black");
	tens.setAttributeNS(null, "fill", "none");
	tens.setAttributeNS(null, "stroke-width", "4");
	ones.setAttributeNS(null, "stroke", "black");
	ones.setAttributeNS(null, "fill", "none");
	ones.setAttributeNS(null, "stroke-width", "4");

	// Convert input to string and pad out to four digits
	num = String(input).padStart(4,"0");

	// Generate "thousands" glyph
	switch (num.charAt(0)) {
		case "1":
			thous.setAttributeNS(null, "points", "125,298 50,298");
			svg.appendChild(thous);
			break;
		case "2":
			thous.setAttributeNS(null, "points", "125,225 50,225");
			svg.appendChild(thous);
			break;
		case "3":
			thous.setAttributeNS(null, "points", "125,298 50,225");
			svg.appendChild(thous);
			break;
		case "4":
			thous.setAttributeNS(null, "points", "125,225 50,298");
			svg.appendChild(thous);
			break;
		case "5":
			thous.setAttributeNS(null, "points", "125,225 50,298 125,298");
			svg.appendChild(thous);
			break;
		case "6":
			thous.setAttributeNS(null, "points", "50,225 50,300");
			svg.appendChild(thous);
			break;
		case "7":
			thous.setAttributeNS(null, "points", "50,225 50,298 125,298");
			svg.appendChild(thous);
			break;
		case "8":
			thous.setAttributeNS(null, "points", "50,300 50,225 125,225");
			svg.appendChild(thous);
			break;
		case "9":
			thous.setAttributeNS(null, "points", "125,298 50,298 50,225 125,225");
			svg.appendChild(thous);
			break;
		default:
			thous.setAttributeNS(null, "points", "125,60 125,300");
			svg.appendChild(thous);
			break;
	};

	// Generate "hundreds" glyph
	switch (num.charAt(1)) {
		case "1":
			hunds.setAttributeNS(null, "points", "125,298 200,298");
			svg.appendChild(hunds);
			break;
		case "2":
			hunds.setAttributeNS(null, "points", "125,225 200,225");
			svg.appendChild(hunds);
			break;
		case "3":
			hunds.setAttributeNS(null, "points", "125,298 200,225");
			svg.appendChild(hunds);
			break;
		case "4":
			hunds.setAttributeNS(null, "points", "125,225 200,298");
			svg.appendChild(hunds);
			break;
		case "5":
			hunds.setAttributeNS(null, "points", "125,225 200,298 125,298");
			svg.appendChild(hunds);
			break;
		case "6":
			hunds.setAttributeNS(null, "points", "200,225 200,300");
			svg.appendChild(hunds);
			break;
		case "7":
			hunds.setAttributeNS(null, "points", "200,225 200,298 125,298");
			svg.appendChild(hunds);
			break;
		case "8":
			hunds.setAttributeNS(null, "points", "200,300 200,225 125,225");
			svg.appendChild(hunds);
			break;
		case "9":
			hunds.setAttributeNS(null, "points", "125,298 200,298 200,225 125,225");
			svg.appendChild(hunds);
			break;
		default:
			hunds.setAttributeNS(null, "points", "125,60 125,300");
			svg.appendChild(hunds);
			break;
	};

	// Generate "tens" glyph
	switch (num.charAt(2)) {
		case "1":
			tens.setAttributeNS(null, "points", "125,62 50,62");
			svg.appendChild(tens);
			break;
		case "2":
			tens.setAttributeNS(null, "points", "125,135 50,135");
			svg.appendChild(tens);
			break;
		case "3":
			tens.setAttributeNS(null, "points", "125,62 50,135");
			svg.appendChild(tens);
			break;
		case "4":
			tens.setAttributeNS(null, "points", "125,135 50,60");
			svg.appendChild(tens);
			break;
		case "5":
			tens.setAttributeNS(null, "points", "125,135 50,62 125,62");
			svg.appendChild(tens);
			break;
		case "6":
			tens.setAttributeNS(null, "points", "50,60 50,135");
			svg.appendChild(tens);
			break;
		case "7":
			tens.setAttributeNS(null, "points", "50,135 50,62 125,62");
			svg.appendChild(tens);
			break;
		case "8":
			tens.setAttributeNS(null, "points", "50,60 50,135 125,135");
			svg.appendChild(tens);
			break;
		case "9":
			tens.setAttributeNS(null, "points", "125,62 50,62 50,135 125,135");
			svg.appendChild(tens);
			break;
		default:
			tens.setAttributeNS(null, "points", "125,60 125,300");
			svg.appendChild(tens);
			break;
	};

	// Generate "ones" glyph
	switch (num.charAt(3)) {
		case "1":
			ones.setAttributeNS(null, "points", "125,62 200,62");
			svg.appendChild(ones);
			break;
		case "2":
			ones.setAttributeNS(null, "points", "125,135 200,135");
			svg.appendChild(ones);
			break;
		case "3":
			ones.setAttributeNS(null, "points", "125,62 200,135");
			svg.appendChild(ones);
			break;
		case "4":
			ones.setAttributeNS(null, "points", "125,135 200,60");
			svg.appendChild(ones);
			break;
		case "5":
			ones.setAttributeNS(null, "points", "125,135 200,62 125,62");
			svg.appendChild(ones);
			break;
		case "6":
			ones.setAttributeNS(null, "points", "200,60 200,135");
			svg.appendChild(ones);
			break;
		case "7":
			ones.setAttributeNS(null, "points", "200,135 200,62 125,62");
			svg.appendChild(ones);
			break;
		case "8":
			ones.setAttributeNS(null, "points", "200,60 200,135 125,135");
			svg.appendChild(ones);
			break;
		case "9":
			ones.setAttributeNS(null, "points", "125,62 200,62 200,135 125,135");
			svg.appendChild(ones);
			break;
		default:
			ones.setAttributeNS(null, "points", "125,60 125,300");
			svg.appendChild(ones);
			break;
	};
};

function rotateGlyph() {
	if (rotate == false) {
		cont.style.transform = "rotate(-90deg)";
		rotBtn.innerHTML = "Reset";
		rotate = true;
	} else {
		cont.style.transform = "none";
		rotBtn.innerHTML = "Rotate";
		rotate = false;
	}
}

function openModal() {
	modal.style.animation = "fadeIn 0.5s forwards";
	modal.style.display = "block";
	helpBtn.style.display = "none";
}

function close() {
	modal.style.display = "none";
}

function closeModal() {
	modal.style.animation = "fadeOut 0.5s forwards";
	helpBtn.style.display = "block";
	setTimeout(close, 500);
}
