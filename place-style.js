document.addEventListener("DOMContentLoaded", () => {
    const desc = document.getElementById("desc");
    if (!desc) return; // guard: skip if description element doesn't exist

    const areas = document.querySelectorAll("area");
    console.log("Areas found:", areas.length);
    areas.forEach(area => console.log(area.alt));

    areas.forEach(area => {
        area.addEventListener("mouseover", () => {
            if (area.alt.includes("Coron")) {
                desc.textContent = "Coron, known for crystal-clear lagoons and limestone cliffs.";
            } 
            else if (area.alt.includes("Athens")) {
                desc.textContent = "Athens, the capital of Greece and cradle of Western civilization.";
            } 
            else if (area.alt.includes("Italy")) {
                desc.textContent = "Rome, Italy — home of the iconic Colosseum.";
            } 
            else if (area.alt.includes("Germany")) {
                desc.textContent = "Munich, Germany — famous for its culture and historic architecture.";
            } 
            else if (area.alt.includes("Batanes")) {
                desc.textContent = "Batanes, Cagayan Valley — known for rolling hills and stone houses.";
            }
        });

        area.addEventListener("mouseout", () => {
            desc.textContent = "";
        });
    });
});