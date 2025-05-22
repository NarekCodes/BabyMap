// --- INTERACTIVITY FOR MAP PATHS ---

// Add interactivity to all country path elements
document.querySelectorAll(".allPaths").forEach((e) => {
// Add the country ID as an additional class (for easy selection)
e.setAttribute("class", `allPaths ${e.id}`);

// Handle hover effect
e.addEventListener("mouseover", function () {
    // Move the tooltip with the mouse
    window.onmousemove = function (j) {
    const x = j.clientX;
    const y = j.clientY;
    const nameDiv = document.getElementById("name");
        nameDiv.style.top = y + 10 + "px";
        nameDiv.style.left = x + 10 + "px";

    };

    // Highlight all elements with the same country class
    const classes = e.className.baseVal.replace(/ /g, ".");
    document.querySelectorAll(`.${classes}`).forEach((country) => {
    country.style.fill = "#93d8fa"; // light blue highlight
    });

    // Show tooltip with country name
    document.getElementById("name").style.opacity = 1;
    document.getElementById("namep").innerText = e.id;
});

// Handle mouse leave effect
e.addEventListener("mouseleave", function () {
    const classes = e.className.baseVal.replace(/ /g, ".");
    document.querySelectorAll(`.${classes}`).forEach((country) => {
    country.style.fill = "#ececec"; // reset color
    });

    // Hide tooltip
    document.getElementById("name").style.opacity = 0;
});

// Handle click (e.g., get data for that country)
e.addEventListener("click", function () {
    getUser(e.id);
});
});

// --- BIRTH COUNTER SYSTEM ---

// Yearly births per country
const birthData = {
Afghanistan: 1200000,
Albania: 150000,
Algeria: 1000000,
Angola: 600000,
Antigua: 5000,
Argentina: 950000,
Armenia: 170000,
Australia: 350000,
Austria: 300000,
Azerbaijan: 400000,
Bahamas: 13000,
Bahrain: 60000,
Bangladesh: 3100000,
Barbados: 7000,
Belarus: 220000,
Belgium: 400000,
Belize: 20000,
Benin: 350000,
Bhutan: 15000,
Bolivia: 180000,
Bosnia: 70000,
Botswana: 50000,
Brazil: 2300000,
Brunei: 12000,
Bulgaria: 90000,
"Burkina Faso": 450000,
Burundi: 350000,
"Cabo Verde": 10000,
Cambodia: 250000,
Cameroon: 600000,
Canada: 420000,
CAR: 120000,
Chad: 350000,
Chile: 320000,
China: 13500000,
Colombia: 1050000,
Comoros: 15000,
"Costa Rica": 90000,
Croatia: 65000,
Cuba: 85000,
Cyprus: 25000,
Czech: 130000,
Denmark: 140000,
Djibouti: 15000,
Dominica: 4000,
DR: 170000,
"Rep. of Congo": 192673,
"DR Congo": 4254102,
Ecuador: 250000,
Egypt: 2100000,
"El Salvador": 120000,
"Eq. Guinea": 15000,
Eritrea: 120000,
Estonia: 20000,
Eswatini: 25000,
Ethiopia: 2600000,
Fiji: 20000,
Finland: 50000,
France: 820000,
Gabon: 25000,
Gambia: 30000,
Georgia: 60000,
Germany: 700000,
Ghana: 610000,
Greece: 80000,
Grenada: 4000,
Guatemala: 250000,
Guinea: 300000,
"Guinea-B.": 100000,
Guyana: 15000,
Haiti: 120000,
Honduras: 160000,
Hungary: 70000,
Iceland: 4000,
India: 18500000,
Indonesia: 4200000,
Iran: 1500000,
Iraq: 850000,
Ireland: 65000,
Israel: 130000,
Italy: 420000,
Jamaica: 30000,
Japan: 880000,
Jordan: 120000,
Kazakhstan: 270000,
Kenya: 1100000,
Kiribati: 3000,
Kuwait: 60000,
Kyrgyzstan: 100000,
Laos: 110000,
Latvia: 22000,
Lebanon: 110000,
Lesotho: 25000,
Liberia: 80000,
Libya: 80000,
Liechtenstein: 500,
Lithuania: 25000,
Luxembourg: 10000,
Madagascar: 500000,
Malawi: 480000,
Malaysia: 590000,
Maldives: 9000,
Mali: 350000,
Malta: 5000,
Marshall: 2000,
Mauritania: 50000,
Mauritius: 25000,
Mexico: 1950000,
Micronesia: 2000,
Moldova: 35000,
Monaco: 300,
Mongolia: 45000,
Montenegro: 9000,
Morocco: 820000,
Mozambique: 600000,
Myanmar: 900000,
Namibia: 40000,
Nauru: 200,
Nepal: 580000,
Netherlands: 350000,
"New Zealand": 60000,
Nicaragua: 90000,
Niger: 400000,
Nigeria: 7000000,
"North Korea": 390000,
"N. Macedonia": 12000,
Norway: 60000,
Oman: 90000,
Pakistan: 5500000,
Panama: 60000,
PNG: 80000,
Paraguay: 120000,
Peru: 650000,
Philippines: 2300000,
Poland: 830000,
Portugal: 100000,
Qatar: 60000,
Romania: 200000,
Russia: 1250000,
Rwanda: 260000,
"Saudi Arabia": 700000,
Senegal: 250000,
Serbia: 100000,
Seychelles: 1000,
"Sierra Leone": 200000,
Singapore: 35000,
Slovakia: 60000,
Slovenia: 20000,
Solomon: 6000,
Somalia: 250000,
"S. Africa": 1150000,
"S. Korea": 310000,
"S. Sudan": 250000,
Spain: 410000,
"Sri Lanka": 220000,
Sudan: 770000,
Suriname: 10000,
Sweden: 115000,
Switzerland: 90000,
Syria: 480000,
Taiwan: 210000,
Tajikistan: 90000,
Tanzania: 1000000,
Thailand: 1250000,
Timor: 10000,
Togo: 140000,
Tonga: 4000,
Trinidad: 20000,
Tunisia: 140000,
Turkey: 1650000,
Turkmenistan: 80000,
Uganda: 780000,
Ukraine: 900000,
UAE: 150000,
UK: 680000,
USA: 3700000,
Uruguay: 30000,
Uzbekistan: 270000,
Venezuela: 670000,
Vietnam: 1850000,
Yemen: 600000,
Zambia: 380000,
Zimbabwe: 350000,
};

const countryFlags = {
Afghanistan: "🇦🇫",
Albania: "🇦🇱",
Algeria: "🇩🇿",
Angola: "🇦🇴",
Antigua: "🇦🇬",
Argentina: "🇦🇷",
Armenia: "🇦🇲",
Australia: "🇦🇺",
Austria: "🇦🇹",
Azerbaijan: "🇦🇿",
Bahamas: "🇧🇸",
Bahrain: "🇧🇭",
Bangladesh: "🇧🇩",
Barbados: "🇧🇧",
Belarus: "🇧🇾",
Belgium: "🇧🇪",
Belize: "🇧🇿",
Benin: "🇧🇯",
Bhutan: "🇧🇹",
Bolivia: "🇧🇴",
Bosnia: "🇧🇦",
Botswana: "🇧🇼",
Brazil: "🇧🇷",
Brunei: "🇧🇳",
Bulgaria: "🇧🇬",
"Burkina Faso": "🇧🇫",
Burundi: "🇧🇮",
"Cabo Verde": "🇨🇻",
Cambodia: "🇰🇭",
Cameroon: "🇨🇲",
Canada: "🇨🇦",
CAR: "🇨🇫",
Chad: "🇹🇩",
Chile: "🇨🇱",
China: "🇨🇳",
Colombia: "🇨🇴",
Comoros: "🇰🇲",
"Costa Rica": "🇨🇷",
Croatia: "🇭🇷",
Cuba: "🇨🇺",
Cyprus: "🇨🇾",
Czech: "🇨🇿",
Denmark: "🇩🇰",
Djibouti: "🇩🇯",
Dominica: "🇩🇲",
DR: "🇩🇴",
"Rep. of Congo": "🇨🇬",
"DR Congo": "🇨🇩",
Ecuador: "🇪🇨",
Egypt: "🇪🇬",
"El Salvador": "🇸🇻",
"Eq. Guinea": "🇬🇶",
Eritrea: "🇪🇷",
Estonia: "🇪🇪",
Eswatini: "🇸🇿",
Ethiopia: "🇪🇹",
Fiji: "🇫🇯",
Finland: "🇫🇮",
France: "🇫🇷",
Gabon: "🇬🇦",
Gambia: "🇬🇲",
Georgia: "🇬🇪",
Germany: "🇩🇪",
Ghana: "🇬🇭",
Greece: "🇬🇷",
Grenada: "🇬🇩",
Guatemala: "🇬🇹",
Guinea: "🇬🇳",
"Guinea-B.": "🇬🇼",
Guyana: "🇬🇾",
Haiti: "🇭🇹",
Honduras: "🇭🇳",
Hungary: "🇭🇺",
Iceland: "🇮🇸",
India: "🇮🇳",
Indonesia: "🇮🇩",
Iran: "🇮🇷",
Iraq: "🇮🇶",
Ireland: "🇮🇪",
Israel: "🇮🇱",
Italy: "🇮🇹",
Jamaica: "🇯🇲",
Japan: "🇯🇵",
Jordan: "🇯🇴",
Kazakhstan: "🇰🇿",
Kenya: "🇰🇪",
Kiribati: "🇰🇮",
Kuwait: "🇰🇼",
Kyrgyzstan: "🇰🇬",
Laos: "🇱🇦",
Latvia: "🇱🇻",
Lebanon: "🇱🇧",
Lesotho: "🇱🇸",
Liberia: "🇱🇷",
Libya: "🇱🇾",
Liechtenstein: "🇱🇮",
Lithuania: "🇱🇹",
Luxembourg: "🇱🇺",
Madagascar: "🇲🇬",
Malawi: "🇲🇼",
Malaysia: "🇲🇾",
Maldives: "🇲🇻",
Mali: "🇲🇱",
Malta: "🇲🇹",
Marshall: "🇲🇭",
Mauritania: "🇲🇷",
Mauritius: "🇲🇺",
Mexico: "🇲🇽",
Micronesia: "🇫🇲",
Moldova: "🇲🇩",
Monaco: "🇲🇨",
Mongolia: "🇲🇳",
Montenegro: "🇲🇪",
Morocco: "🇲🇦",
Mozambique: "🇲🇿",
Myanmar: "🇲🇲",
Namibia: "🇳🇦",
Nauru: "🇳🇷",
Nepal: "🇳🇵",
Netherlands: "🇳🇱",
"New Zealand": "🇳🇿",
Nicaragua: "🇳🇮",
Niger: "🇳🇪",
Nigeria: "🇳🇬",
"North Korea": "🇰🇵",
"N. Macedonia": "🇲🇰",
Norway: "🇳🇴",
Oman: "🇴🇲",
Pakistan: "🇵🇰",
Panama: "🇵🇦",
PNG: "🇵🇬",
Paraguay: "🇵🇾",
Peru: "🇵🇪",
Philippines: "🇵🇭",
Poland: "🇵🇱",
Portugal: "🇵🇹",
Qatar: "🇶🇦",
Romania: "🇷🇴",
Russia: "🇷🇺",
Rwanda: "🇷🇼",
"Saudi Arabia": "🇸🇦",
Senegal: "🇸🇳",
Serbia: "🇷🇸",
Seychelles: "🇸🇨",
"Sierra Leone": "🇸🇱",
Singapore: "🇸🇬",
Slovakia: "🇸🇰",
Slovenia: "🇸🇮",
Solomon: "🇸🇧",
Somalia: "🇸🇴",
"S. Africa": "🇿🇦",
"S. Korea": "🇰🇷",
"S. Sudan": "🇸🇸",
Spain: "🇪🇸",
"Sri Lanka": "🇱🇰",
Sudan: "🇸🇩",
Suriname: "🇸🇷",
Sweden: "🇸🇪",
Switzerland: "🇨🇭",
Syria: "🇸🇾",
Taiwan: "🇹🇼",
Tajikistan: "🇹🇯",
Tanzania: "🇹🇿",
Thailand: "🇹🇭",
Timor: "🇹🇱",
Togo: "🇹🇬",
Tonga: "🇹🇴",
Trinidad: "🇹🇹",
Tunisia: "🇹🇳",
Turkey: "🇹🇷",
Turkmenistan: "🇹🇲",
Uganda: "🇺🇬",
Ukraine: "🇺🇦",
UAE: "🇦🇪",
UK: "🇬🇧",
USA: "🇺🇸",
Uruguay: "🇺🇾",
Uzbekistan: "🇺🇿",
Venezuela: "🇻🇪",
Vietnam: "🇻🇳",
Yemen: "🇾🇪",
Zambia: "🇿🇲",
Zimbabwe: "🇿🇼",
};
const visibleCounts = {}; // Tracks visible birth count per country
const secondsInYear = 31536000; // Total seconds in a year

// Compute births per second for each country
const birthsPerSecond = {};
for (const country in birthData) {
  birthsPerSecond[country] = birthData[country] / secondsInYear;
}

let totalBabiesBorn = 0; // Total births globally
const fractionalParts = {}; // Keep track of fractional birth values

// Update births every second
setInterval(() => {
  let totalThisSecond = 0;

  for (const country in birthsPerSecond) {
    // Accumulate fractional births
    fractionalParts[country] =
      (fractionalParts[country] || 0) + birthsPerSecond[country];
    const birthsNow = Math.floor(fractionalParts[country]);
    fractionalParts[country] -= birthsNow;

    if (birthsNow > 0) {
      simulateBirth(country); // 🔄 Simulate the map effect
      totalThisSecond += birthsNow;
      visibleCounts[country] = (visibleCounts[country] || 0) + birthsNow;

      // Create or update the country birth count element
      let el = document.getElementById(`birth-${country}`);
      if (!el) {
        el = document.createElement("div");
        el.id = `birth-${country}`;
        el.style.display = "flex";
        el.style.justifyContent = "space-between";
        el.style.color = "white";
        el.style.padding = "8px 12px";
        el.style.marginBottom = "4px";
        el.style.borderRadius = "8px";
        el.style.backgroundColor = "#1f2937"; // dark gray-blue
        el.style.fontFamily = "Arial, sans-serif";
        el.style.fontSize = "0.95rem";
        el.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.2)";

        el.style.transition = "background-color 0.3s";
        el.style.backgroundColor = "#ffdd99"; // flash color
        setTimeout(() => {
          el.style.backgroundColor = "#1f2937"; // revert
        }, 300);

        document.getElementById("birthsList").appendChild(el);
      }

      el.innerHTML = `<span style="flex: 1;">${
        countryFlags[country] || ""
      } ${country}</span><span>${visibleCounts[country]}</span>`;

      // Highlight the country on the map briefly
      const elements = document.querySelectorAll(`.allPaths.${country}`);
      elements.forEach((el) => (el.style.fill = "#ffb3b3")); // pink highlight
      setTimeout(() => {
        elements.forEach((el) => (el.style.fill = "#ececec")); // revert to base color
      }, 300);
    }
  }

  // Update global baby counter
  totalBabiesBorn += totalThisSecond;
  document.getElementById("totalBabies").innerText = `Total babies born: ${totalBabiesBorn}`;
}, 1000);       


// ✅ Fixed simulateBirth function
function simulateBirth(countryName) {
  const paths = document.querySelectorAll(`.allPaths.${countryName}`);
  if (!paths.length) {
    console.log("No paths found for", countryName);
    return;
  }

  paths.forEach((path) => {
    path.style.fill = "yellow";
    setTimeout(() => {
      path.style.fill = "#ececec";
    }, 500);
  });
}
