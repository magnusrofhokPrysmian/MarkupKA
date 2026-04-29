
//Awesome Functions here (Less Awesome now..)

const breakpoints = [
  500,1000,2000,3000,4000,5000,6000,7000,8000,9000,
  10000,11000,12000,15000,20000,25000,Infinity
];
const markupTables = {
	10:  {
		 "MSP 3-ledare HS->EM": [
		 100,100,100,100,100,100,100,100,100,100,100,100,100,100,"Längdberedning","Längdberedning","Längdberedning"
    ]},  
	16:  {
		 "1 kV": [
		 105,105,105,105,105,105,105,105,105,105,105,105,105,105,"Längdberedning","Längdberedning","Längdberedning"
    ]    
},       
	25:  {
		 "1 kV": [
		 105,105,105,105,105,105,105,105,105,105,105,105,105,150,
		 "Längdberedning","Längdberedning","Längdberedning"
    ],   
		 "MSP 3-ledare HS->EM": [
		 65,65,65,65,90,90,100,100,120,120,140,140,160,160,
		 "Längdberedning","Längdberedning","Längdberedning"
    ],   
		 "MSP 3-ledare EM->HS": [
		 65,65,65,65,90,90,100,100,120,120,140,140,160,160,
		 "Längdberedning","Längdberedning","Längdberedning"
    ],   
		 "MSP 1-ledare": [
		 130,130,130,130,130,130,130,130,130,130,130,130,
		 "Längdberedning","Längdberedning",
		 "Längdberedning","Längdberedning","Längdberedning"
    ]    
},       
	35:  {
		 "1 kV": [
		 	105,105,105,105,105,105,105,105,105,105,105,105,105,105,
		 	"Längdberedning","Längdberedning","Längdberedning"
		 ],
		 
		 "MSP 3-ledare HS->EM": [
		 	65,65,65,65,90,90,100,100,120,120,140,140,160,160,
		 	"Längdberedning","Längdberedning","Längdberedning"
		 ],
		 
		 "MSP 3-ledare EM->HS": [
		 	65,65,65,65,90,90,100,100,120,120,140,140,160,160,
		 	"Längdberedning","Längdberedning","Längdberedning"
		 ],
		 
		 "MSP 1-ledare": [
		 	50,50,50,50,80,80,80,110,110,110,140,140,140,170,
		 	"Längdberedning","Längdberedning","Längdberedning"
		 ]
},       
	50:  {
    "1 kV": [
         70,70,70,70,70,70,85,85,85,85,110,110,110,110,
         "Längdberedning",120,"Längdberedning"
    ],   
		 
    "MSP 3-ledare HS->EM": [
         60,60,60,60,110,110,110,165,165,165,210,210,210,275,
         "Längdberedning","Längdberedning","Längdberedning"
    ],   
		 
    "MSP 3-ledare EM->HS": [
         60,60,60,60,110,110,110,165,165,165,210,210,210,275,
         "Längdberedning","Längdberedning","Längdberedning"
    ],   
		 
    "MSP 1-ledare": [
         60,60,60,60,60,60,60,90,90,90,120,120,120,130,
         "Längdberedning","Längdberedning","Längdberedning"
    ]    
},       
	70:  {
    "1 kV": [
         70,70,70,70,70,70,85,85,85,85,110,110,110,110,
         "Längdberedning","Längdberedning","Längdberedning"
    ],   
		 
    "MSP 3-ledare HS->EM": [
         65,65,65,65,90,90,100,100,120,120,140,140,160,160,
         "Längdberedning","Längdberedning","Längdberedning"
    ],   
		 
    "MSP 3-ledare EM->HS": [
         65,65,65,65,90,90,100,100,120,120,140,140,160,160,
         "Längdberedning","Längdberedning","Längdberedning"
    ],   
		 
    "MSP 1-ledare": [
         50,50,50,50,80,80,80,110,110,110,140,140,140,170,
         "Längdberedning","Längdberedning","Längdberedning"
    ]    
},       
	95:  {
    "1 kV": [
        70,70,70,70,70,70,85,95,95,95,110,110,110,220,
        220,220,"Längdberedning"
    ],

    "MSP 3-ledare HS->EM": [
        60,60,60,80,100,120,140,160,180,200,200,200,200,200,
        "Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare EM->HS": [
        70,70,70,70,100,100,100,140,140,140,180,180,180,210,
        "Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 1-ledare": [
        50,50,50,50,80,80,80,110,110,110,140,140,140,170,
        "Längdberedning","Längdberedning","Längdberedning"
    ]
},
	120: {
    "1 kV": [
        70,70,70,70,70,70,85,95,95,95,110,110,110,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare HS->EM": [
        70,70,70,100,100,140,140,180,180,250,250,250,250,300,
        420,"Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare EM->HS": [
        70,70,70,100,100,140,140,180,180,250,250,250,250,300,
        420,"Längdberedning","Längdberedning"
    ],

    "MSP 1-ledare": [
        70,70,70,70,100,120,140,160,180,200,250,250,250,300,
        420,"Längdberedning","Längdberedning"
    ]
},
	150: {
    "1 kV": [
        45,45,45,45,70,70,70,95,95,95,120,120,120,150,
        "Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare HS->EM": [
        70,70,70,100,100,140,140,180,180,250,250,250,270,300,
        "Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare EM->HS": [
        70,70,70,100,100,140,140,180,180,250,250,250,270,300,
        "Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 1-ledare": [
        70,70,70,70,100,100,100,140,140,140,180,180,270,300,
        "Längdberedning","Längdberedning","Längdberedning"
    ]
},
	185: {
    "1 kV": [
        45,45,45,45,70,70,70,95,95,95,120,120,120,120,150,
        "Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare HS->EM": [
        70,70,70,100,100,140,140,180,180,250,250,250,270,300,
        "Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare EM->HS": [
        70,70,70,100,100,140,140,180,180,250,250,250,270,300,
        "Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 1-ledare": [
        60,60,60,80,100,120,140,160,180,200,250,250,270,300,
        "Längdberedning","Längdberedning","Längdberedning"
    ]
},
	240: {
    "1 kV": [
        55,55,55,65,65,65,85,130,130,130,130,
        "Längdberedning","Längdberedning","Längdberedning",
        "Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare HS->EM": [
        60,60,60,80,100,120,120,160,180,200,240,240,240,280,
        "Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare EM->HS": [
        70,70,70,80,100,120,120,160,180,200,240,240,240,280,
        "Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 1-ledare": [
        70,70,70,80,100,120,140,160,180,200,240,240,240,280,
        "Längdberedning","Längdberedning","Längdberedning"
    ]
},
	300: {
    "1 kV": [
        55,55,55,70,70,70,90,130,130,130,130,
        "Längdberedning","Längdberedning","Längdberedning",
        "Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare HS->EM": [
        50,50,80,110,140,170,200,230,260,290,320,350,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning",
        "Längdberedning"
    ],

    "MSP 3-ledare EM->HS": [
        50,50,80,110,140,170,200,230,260,290,320,350,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning",
        "Längdberedning"
    ],

    "MSP 1-ledare": [
        70,70,70,100,100,140,140,180,180,210,210,240,240,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ]
},
	400: {
    "MSP 1-ledare": [
        80,80,80,90,100,130,150,150,230,250,250,280,280,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ]
},
	500: {
    "MSP 1-ledare": [
        60,60,60,100,100,140,140,180,180,220,220,260,260,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ]
},
	630: {
    "MSP 1-ledare": [
        60,60,60,100,100,140,140,180,180,220,220,260,260,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ]
},
	800: {
    "MSP 1-ledare": [
        80,80,80,140,170,200,200,200,230,260,260,260,290,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ]
}
};
//Replacing pouchDB with Hardcoded tables (Bad idea, but no way to use a server or database of any kind).
function getMarkup(area, type, length) {
	const table = markupTables[area]?.[type];
	if(!table) return null;
	const index = breakpoints.findIndex(bp => length <= bp);
	return table[index];
}
const markupMachineTable = {
	ep40: {
		default: [0, 0 ]
		},
	ep41: { 
		10: [250, 90],
		16: [250, 90],
		25: [250, 90],
		35: [250, 90],
		50: [250, 90],
		70: [250, 90],
		95: [250, 90],
		default: [180, 40]
		},
	ep4344: {
		10: [200, 70],
		16: [200, 70],
		25: [200, 70],
		35: [200, 70],
		50: [200, 70],
		70: [200, 70],
		95: [120, 70],
		default: [85, 70]
	}
}

function updateMachineScrap(area, machine) {
	if(!machine) return;
	return markupMachineTable[machine]?.[area] || markupMachineTable[machine].default;
}

let updateTimer = null;
async function updateMarkup() {
	clearTimeout(updateTimer);
	updateTimer = setTimeout(async () => {
		const machine = document.getElementById("valdMaskin").value;
		const crossection = document.getElementById("artikelnummer").value;
		const type = document.getElementById("valdTyp").value;
		const length  = Number(document.querySelector(".orderLength").value.trim());
		const markup = await getMarkup(crossection, type, length);
		const machineScrap = updateMachineScrap(crossection, machine);
		document.getElementById("outputMarkup").textContent = markup || "";
		document.getElementById("outputMarkupStartStop").textContent = "";
		if(!length | !machine | !markup ) { return; }
		if(markup === "Längdberedning")
			{ 
				document.getElementById("outputMarkupStartStop").textContent = "";
			}else{
				document.getElementById("outputMarkupStartStop").textContent = 
					(machineScrap[0] + markup) + ", " + markup + ", " + (machineScrap[1] + markup) || "";
			}
		}, 150);
}
function safeQuery(selector, callback) {
    const el = document.querySelector(selector);
    if (el) callback(el);
}
safeQuery(".artikelnummer", (input) => {
    input.addEventListener("input", async function () {
        const value = this.value.trim();
        if (!value) return;
        const doc = lookupArticle(value);
        if (doc) {
            document.getElementById("output").textContent = doc.Description || "";
            document.getElementById("valdTyp").value = doc.CableType || "";
        } else {
            document.getElementById("output").textContent = "Finns Ej";
        }
    });
});
[".orderLength", "#artikelnummer", "#valdTyp", "#valdMaskin"].forEach(selector => {
	const el = document.querySelector(selector);
	if(!el) return;
	const eventType = el.tagName === "SELECT" ? "change" : "input";
	el.addEventListener(eventType, updateMarkup);
});
//Reset functions
function resetForm() {
	document.getElementById("artikelnummer").value = "";
	document.getElementById("output").textContent = "";
	document.getElementById("orderLength").value = "";
	document.getElementById("valdTyp").value = "";
	document.getElementById("valdMaskin").value = "";
	document.getElementById("outputMarkup").textContent = "";
	document.getElementById("outputMarkupStartStop").textContent = "";
}
//Dark or Light mode code
function updateThemeMetaColor(color) {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
        metaThemeColor.setAttribute('content', color);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    if (themeSwitch) {
        // Apply saved theme
        const savedTheme = localStorage.getItem('markupTheme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
            themeSwitch.checked = true;
            updateThemeMetaColor('#f8f9fa');
        } else if (savedTheme === 'dark') {
            document.body.classList.remove('light-theme');
            themeSwitch.checked = false;
            updateThemeMetaColor('#202124');
        } else {
            if (prefersDark) {
                document.body.classList.remove('light-theme');
                themeSwitch.checked = false;
                updateThemeMetaColor('#202124');
            } else {
                document.body.classList.add('light-theme');
                themeSwitch.checked = true;
                updateThemeMetaColor('#f8f9fa');
            }
        }
        // Toggle event
        themeSwitch.addEventListener('change', () => {
            if (themeSwitch.checked) {
                document.body.classList.add('light-theme');
                localStorage.setItem('markupTheme', 'light');
                updateThemeMetaColor('#f8f9fa');
            } else {
                document.body.classList.remove('light-theme');
                localStorage.setItem('markupTheme', 'dark');
                updateThemeMetaColor('#202124');
            }
        });
    }
});
