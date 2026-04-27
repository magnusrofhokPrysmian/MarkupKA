
//Awesome Functions here

function parseCableSize(text) {
    if (!text) return null;
	//Case 1:
    let match = text.match(/(\d+)\s*x\s*1\s*x\s*(\d+)(?:[\/+](\d+))?/i);
    if (match) {
        return {
            cores: parseInt(match[1], 10),
            size: parseInt(match[2], 10),
            screen: match[3] ? parseInt(match[3], 10) : null
        };
    }
    //Case 2:
    match = text.match(/(\d+)\s*x\s*(\d+)(?:[\/+x](\d+))?/i);
    if (match) {
        return {
            cores: parseInt(match[1], 10),
            size: parseInt(match[2], 10),
            screen: match[3] ? parseInt(match[3], 10) : null
        };
    }
	//Case 3:
	match = text.match(/(\d+)\s*G\s*(\d+|\*)?(?:[\/+](\d+))?/i);
    if (match) {
        return {
            cores: parseInt(match[1], 10),
            size: match[2] && match[2] !== "*" ? parseInt(match[2], 10) : null,
            screen: match[3] ? parseInt(match[3], 10) : null
        };
    }
    return null;
}
function parseVoltage(text){
	if(!text) return null;
	const match = text.match(/(\d+)\s*kV/i);
	return match ? parseInt(match[1], 10) : null;
}
function parseType(text){
	if(!text) return null;
	//Case 1:
    if (/1\s*kV/i.test(text)|| !/\d+\s*kV/i.test(text)) {
        return "1 kV";
    }
	//Case 2:
    if (/3x1x\d+/i.test(text)) {
        return "MSP 3-ledare EM->HS";
    }
	//Case 3:
    if (/\b[34]x\d+/i.test(text)) {
        return "MSP 3-ledare HS->EM";
    }
	//Case 4:
    if (/1x\d+/i.test(text)) {
        return "MSP 1-ledare";
    }
    return null;
}
const breakpoints = [
  500,1000,2000,3000,4000,5000,6000,7000,8000,9000,
  10000,11000,12000,15000,18000,20000,25000,Infinity
];
const markupTables = { //120 area is not complete, change it
	10: {
		"MSP 3-ledare HS->EM": [
		100,100,100,100,100,100,100,100,100,100,100,100,100,100,"Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ]},
	16: {
		"1kV": [
		105,105,105,105,105,105,105,105,105,105,105,105,105,105,"Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ]
},
	25: {
		"1 kV": [
		105,105,105,105,105,105,105,105,105,105,105,105,105,150,
		"Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ],
		"MSP 3-ledare HS->EM": [
		65,65,65,65,90,90,100,100,120,120,140,140,160,160,
		"Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ],
		"MSP 3-ledare EM->HS": [
		65,65,65,65,90,90,100,100,120,120,140,140,160,160,
		"Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ],
		"MSP 1-ledare": [
		130,130,130,130,130,130,130,130,130,130,130,130,
		"Längdberedning","Längdberedning",
		"Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ]
},
	35: {
		"1 kV": [
			105,105,105,105,105,105,105,105,105,105,105,105,105,105,
			"Längdberedning","Längdberedning","Längdberedning","Längdberedning"
		],

		"MSP 3-ledare HS->EM": [
			65,65,65,65,90,90,100,100,120,120,140,140,160,160,
			"Längdberedning","Längdberedning","Längdberedning","Längdberedning"
		],

		"MSP 3-ledare EM->HS": [
			65,65,65,65,90,90,100,100,120,120,140,140,160,160,
			"Längdberedning","Längdberedning","Längdberedning","Längdberedning"
		],

		"MSP 1-ledare": [
			50,50,50,50,80,80,80,110,110,110,140,140,140,170,
			"Längdberedning","Längdberedning","Längdberedning","Längdberedning"
		]
},
	50: {
    "1 kV": [
        70,70,70,70,70,70,85,85,85,85,110,110,110,110,
        "Längdberedning",120,"Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare HS->EM": [
        60,60,60,60,110,110,110,165,165,165,210,210,210,275,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare EM->HS": [
        60,60,60,60,110,110,110,165,165,165,210,210,210,275,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 1-ledare": [
        60,60,60,60,60,60,60,90,90,90,120,120,120,130,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ]
},
	70: {
    "1 kV": [
        70,70,70,70,70,70,85,85,85,85,110,110,110,110,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare HS->EM": [
        65,65,65,65,90,90,100,100,120,120,140,140,160,160,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare EM->HS": [
        65,65,65,65,90,90,100,100,120,120,140,140,160,160,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 1-ledare": [
        50,50,50,50,80,80,80,110,110,110,140,140,140,170,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ]
},
	95: {
    "1 kV": [
        70,70,70,70,70,70,85,95,95,95,110,110,110,220,
        220,220,220,"Längdberedning"
    ],

    "MSP 3-ledare HS->EM": [
        60,60,60,80,100,120,140,160,180,200,200,200,200,200,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare EM->HS": [
        70,70,70,70,100,100,100,140,140,140,180,180,180,210,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 1-ledare": [
        50,50,50,50,80,80,80,110,110,110,140,140,140,170,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ]
},
	120: {
    "1 kV": [
        70,70,70,70,70,70,85,95,95,95,110,110,110,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare HS->EM": [
        70,70,70,1000,100,140,140,160,180,200,250,250,250,300,
        "Längdberedning",350,"Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare EM->HS": [
        70,70,70,80,100,120,140,160,180,200,250,250,250,300,
        "Längdberedning",350,"Längdberedning","Längdberedning"
    ],

    "MSP 1-ledare": [
        70,70,70,70,100,120,140,160,180,200,250,250,250,300,
        "Längdberedning",350,"Längdberedning","Längdberedning"
    ]
},
	150: {
    "1 kV": [
        45,45,45,45,70,70,70,95,95,95,120,120,120,150,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare HS->EM": [
        60,60,60,80,100,120,140,160,180,200,250,250,270,300,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare EM->HS": [
        70,70,70,70,100,100,100,140,140,140,180,180,270,300,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 1-ledare": [
        70,70,70,70,100,100,100,140,140,140,180,180,270,300,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ]
},
	185: {
    "1 kV": [
        45,45,45,45,70,70,70,95,95,95,120,120,120,150,150,
        "Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare HS->EM": [
        60,60,60,80,100,120,140,160,180,200,250,250,270,300,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare EM->HS": [
        60,60,60,80,100,120,140,160,180,200,250,250,270,300,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 1-ledare": [
        60,60,60,80,100,120,140,160,180,200,250,250,270,300,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ]
},
	240: {
    "1 kV": [
        55,55,55,65,65,65,85,130,130,130,130,
        "Längdberedning","Längdberedning","Längdberedning",
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare HS->EM": [
        60,60,60,80,100,120,120,160,180,200,240,240,240,280,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare EM->HS": [
        70,70,70,80,100,120,120,160,180,200,240,240,240,280,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 1-ledare": [
        70,70,70,80,100,120,140,160,180,200,240,240,240,280,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ]
},
	300: {
    "1 kV": [
        55,55,55,70,70,70,90,130,130,130,130,
        "Längdberedning","Längdberedning","Längdberedning",
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare HS->EM": [
        70,70,70,100,100,120,140,160,180,200,220,240,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning",
        "Längdberedning","Längdberedning"
    ],

    "MSP 3-ledare EM->HS": [
        70,70,70,100,100,140,140,180,180,210,210,240,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning",
        "Längdberedning","Längdberedning"
    ],

    "MSP 1-ledare": [
        70,70,70,100,100,140,140,180,180,210,210,240,200,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning","Längdberedning"
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
        80,80,80,140,170,200,200,200,230,260,260,260,290,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ]
},
	630: {
    "MSP 1-ledare": [
        80,80,80,140,170,200,200,200,230,260,260,260,290,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ]
},
	800: {
    "MSP 1-ledare": [
        80,80,80,140,170,200,200,200,230,260,260,260,290,
        "Längdberedning","Längdberedning","Längdberedning","Längdberedning","Längdberedning"
    ]
}
};
const db = new PouchDB("Material-db");
//Import from JSON file.
const addArticleJSON = document.getElementById("jsonFile");
if(addArticleJSON) {
	addArticleJSON.addEventListener("change", async (event) => {
	const file = event.target.files[0];
	const text = await file.text();
	const data = JSON.parse(text);
	const docs = await Promise.all(data.map(async item => {
		let existing;
	try {
		existing = await db.get(item.Material.toString());
	}catch (e) {
		existing = null;
	}
		const parsed = parseCableSize(item["D. SE"]);
		const voltage = parseVoltage(item["D. SE"]);
		const cableType = parseType(item["D. SE"]);
		return {
		_id: item.Material.toString(),
		_rev: existing?._rev,
		...item,
		Cores: parsed?.cores || null,
		SizeMain: parsed?.size || null,
		SizeScreen: parsed?.screen || null,
		Voltage: voltage ?? null,
		CableType: cableType ?? null
		};
	})
	);
	await db.bulkDocs(docs);
	console.log("Import complete!");
	});
}
//Lookup from db
async function lookupArticle(materialNumber) {
    try {
        const doc = await db.get(materialNumber.toString());
		console.log(doc);
        return doc;
    } catch (err) {
        if (err.status === 404) return null;
        console.error(err);
        return null;
    }
}
//Add to db
const addMaterialToDBbutton = document.getElementById("addMaterialToDB");
if(addMaterialToDBbutton){
	addMaterialToDBbutton.addEventListener("click", async () => {
		const materialId = document.getElementById("artikelnummerEditmode").value.trim();
		const article = document.getElementById("artikelEditmode").value.trim();
		if (!materialId || !article) { 
			alert("Fyll i båda fälten.");
			return;
		}
		// Check if material already exists
		let existing = null;
		try {
			existing = await db.get(materialId.toString());
			alert("Artikeln finns redan.");
			return;
		} catch (e) {
			if(e.status !== 404) {
				console.error(e);
				alert("Oväntat fel har inträffat. Kontakta Mr. Rofhök.");
				return;
			}
		}
		const parsed = parseCableSize(article);
		const voltage = parseVoltage(article);
		const cableType = parseType(article);

		const newDoc = {
			_id: materialId.toString(),
			_rev: existing?._rev,
			Material: materialId,
			"D. SE": article,
			Cores: parsed?.cores || null,
			SizeMain: parsed?.size || null,
			SizeScreen: parsed?.screen || null,
			Voltage: voltage ?? null,
			CableType: cableType ?? null
		};
		await db.put(newDoc);
		console.log("New material added:", newDoc);
		alert("Artikeln tillagd i databasen!");
		document.getElementById("artikelnummerEditmode").value = "";
		document.getElementById("benmäningEditmode").value = "";
	});
}
//Remove from DB
const deleteFromDBbutton = document.getElementById("removeFromDB");
if(deleteFromDBbutton) {
	deleteFromDBbutton.addEventListener("click", async () => {
		const id = document.getElementById("artikelnummerRemoveFromDB").value.trim();
		if (!id) {
			alert("Fyll i artikelnummer.");
			return;
		}
		try { 
			const doc = await db.get(id.toString());
			const article = doc["D. SE"];
			const confirmDelete = confirm(`Är du säker på att du vill ta bort ${id} - ${article}?`);
			if (!confirmDelete) {return;}
			await db.remove(doc);
			console.log("Deleted:", id);
			alert(`Artikel ${id} borttagen.`);
			document.getElementById("artikelnummerRemoveFromDB").value = "";
		} catch (e) {
			if(e.status === 404) {
				alert("Artikel finns ej.");
			} else {
				console.error("Delete failed:", e);
				alert("Oväntat fel har inträffat. Kontakta Mr. Rofhök.");
			}
		}
	});
}
//
function getMarkup(area, type, length) {
	const table = markupTables[area]?.[type];
	if(!table) return null;
	const index = breakpoints.findIndex(bp => length <= bp);
	return table[index];
}
let updateTimer = null;
async function updateMarkup() {
	clearTimeout(updateTimer);
	updateTimer = setTimeout(async () => {
	const length  = Number(document.querySelector(".orderLength").value.trim());
	if(!length) return;
	const materialNumber = document.getElementById("artikelnummer").value;
	const doc = await lookupArticle(materialNumber);
	const crossection = doc.SizeMain;
	const type = document.getElementById("valdTyp").value;
    const markup = await getMarkup(crossection, type, length);
	let startScrap = 0;
	let endScrap = 0;
	if(type === "1 kV") {
		startScrap = 0, endScrap = 0;
	}else{
		startScrap = 85, endScrap = 70;
	}
	startScrap = startScrap + markup;
	endScrap = endScrap + markup;
	document.getElementById("outputMarkup").textContent = markup || "";
	if(markup === "Längdberedning"){ document.getElementById("outputMarkupStartStop").textContent = "";
		}else{
			document.getElementById("outputMarkupStartStop").textContent = startScrap + ", " + markup + ", " + endScrap || "";
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
        const doc = await lookupArticle(value);
        if (doc) {
            document.getElementById("output").textContent = doc["D. SE"] || "";
            document.getElementById("valdTyp").value = doc.CableType || "";
        } else {
            document.getElementById("output").textContent = "Finns Ej";
        }
    });
});
[".orderLength", "#artikelnummer", "#valdTyp"].forEach(selector => {
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
	document.getElementById("outputMarkup").textContent = "";
	document.getElementById("outputMarkupStartStop").textContent = "";
}
function resetEditForm() {
	document.getElementById("artikelnummerEditmode").value = "";
	document.getElementById("artikelEditmode").value = "";
	document.getElementById("artikelnummerRemoveFromDB").value = "";
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
