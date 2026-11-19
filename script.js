// ==========================================
// SMART AI AUTOPILOT - NOVA
// Vehicle Maintenance Assistant
// ==========================================


// ==========================================
// NOVA PROBLEM ANALYSIS
// ==========================================


function sendMessage() {
    const inputElement = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    if (!inputElement || !chatBox) return;

    const input = inputElement.value.trim();

    if (!input) {
        alert("Please describe your car problem.");
        return;
    }

    const msg = input.toLowerCase();

    let problem = "General Vehicle Query";
    let response = "";
    let service = "General Vehicle Inspection";
    let advice = "";

    // Hindi + English matching
    const has = (...words) =>
        words.some(word => msg.includes(word));

    // URGENT SAFETY ISSUES
    if (has("brake fail", "brakes not working", "brake not working",
            "brake nahi", "brake fail ho", "brake kaam nahi",
            "steering fail", "steering not working",
            "smoke", "fire", "fuel leak", "petrol leak",
            "red oil light", "oil pressure warning")) {

        problem = "Urgent Vehicle Safety Concern";
        response = "Your message may indicate a serious vehicle safety issue.";
        service = "Urgent Professional Inspection";
        advice = "Stop driving when it is safe to do so. Move away from traffic and contact roadside assistance or a qualified mechanic. Do not continue driving until the vehicle is checked.";
    }

    // OVERHEATING
    else if (has("overheat", "overheating", "engine hot",
                 "temperature high", "engine garam",
                 "gaadi garam", "heat ho rahi", "temperature badh")) {

        problem = "Possible Engine Overheating";
        response = "Your vehicle may have a cooling system problem.";
        service = "Cooling System Inspection";
        advice = "Stop safely and switch off the engine. Let it cool. Never open the radiator cap while hot. Arrange a professional inspection.";
    }

    // BATTERY / STARTING
    else if (has("battery", "not starting", "won't start",
                 "wont start", "start nahi", "starting problem",
                 "self nahi", "self problem", "crank nahi",
                 "gaadi start", "car start nahi")) {

        problem = "Possible Battery or Starting System Issue";
        response = "The issue may involve the battery, starter motor or charging system.";
        service = "Battery & Starting System Check";
        advice = "A technician should test the battery, connections and charging system.";
    }

    // BRAKES
    else if (has("brake", "brakes", "braking",
                 "awaz brake", "brake noise", "brake sound",
                 "brake vibration", "brake pedal")) {

        problem = "Possible Brake System Issue";
        response = "Your symptoms may be related to the braking system.";
        service = "Brake Inspection";
        advice = "Have the brakes checked by a qualified technician. If braking feels weak or unsafe, do not drive the vehicle.";
    }

    // ENGINE
    else if (has("engine", "motor", "engine noise",
                 "engine sound", "engine vibration",
                 "engine misfire", "pickup nahi",
                 "power loss", "engine problem")) {

        problem = "Possible Engine Performance Issue";
        response = "The symptoms may involve engine performance, ignition or another engine component.";
        service = "Engine Inspection";
        advice = "Note when the problem happens and arrange a professional engine diagnosis.";
    }

    // OIL
    else if (has("oil", "engine oil", "lubricant",
                 "oil change", "oil leak", "tel leak",
                 "engine oil kam")) {

        problem = "Engine Oil Maintenance";
        response = "Your vehicle may need an oil level, leak or oil condition check.";
        service = "Engine Oil Check / Oil Change";
        advice = "Check the owner's manual for the correct oil specification and service interval. Get any oil leak inspected.";
    }

    // TYRE
    else if (has("tyre", "tire", "puncture", "wheel",
                 "flat tyre", "air pressure", "hawa kam",
                 "tyre pressure", "tire pressure")) {

        problem = "Possible Tyre or Wheel Issue";
        response = "The issue may be related to tyre pressure, puncture or wheel condition.";
        service = "Tyre & Wheel Inspection";
        advice = "Check tyre pressure when safe. Do not drive on a visibly damaged or flat tyre.";
    }

    // AC
    else if (has("ac", "air conditioner", "air conditioning",
                 "cooling nahi", "ac cooling", "ac not cooling",
                 "ac kaam nahi")) {

        problem = "Possible Car AC Issue";
        response = "The air conditioning system may need inspection.";
        service = "AC Inspection";
        advice = "A technician can inspect the AC filter, refrigerant system and compressor.";
    }

    // MILEAGE / FUEL
    else if (has("mileage", "average", "fuel average",
                 "petrol zyada", "diesel zyada",
                 "fuel consumption", "average kam")) {

        problem = "Possible Fuel Efficiency Issue";
        response = "Low mileage can have several causes, including tyre pressure, driving conditions or maintenance.";
        service = "Engine & Fuel Efficiency Check";
        advice = "Check tyre pressure and follow scheduled maintenance. A technician can inspect the engine and fuel system.";
    }

    // CLUTCH / GEAR
    else if (has("clutch", "gear", "gears",
                 "gear shifting", "gear nahi lag",
                 "clutch hard", "clutch slip")) {

        problem = "Possible Clutch or Transmission Issue";
        response = "Your symptoms may involve the clutch or transmission system.";
        service = "Clutch & Transmission Inspection";
        advice = "Avoid forcing the gear lever. Arrange a qualified technician's inspection.";
    }

    // WARNING LIGHT
    else if (has("warning light", "dashboard light",
                 "check engine", "engine light",
                 "warning symbol", "indicator light",
                 "dashboard symbol")) {

        problem = "Dashboard Warning Indicator";
        response = "A warning light indicates that a vehicle system may need attention.";
        service = "Vehicle Diagnostic Scan";
        advice = "Check the owner's manual for the exact symbol. If the warning is red or flashing, stop safely and seek professional help.";
    }

    // SUSPENSION
    else if (has("suspension", "shock absorber",
                 "car bouncing", "suspension noise",
                 "khad khad", "gaddhe par awaz")) {

        problem = "Possible Suspension Issue";
        response = "The sound or vibration may be related to suspension or steering components.";
        service = "Suspension Inspection";
        advice = "Have the suspension and steering system checked by a technician.";
    }

    // GREETING
    else if (has("hello", "hi", "hey", "namaste", "namaskar")) {
        problem = "Welcome";
        response = "Hello! I am NOVA, your Smart Vehicle Maintenance Assistant. You can ask me about your car in Hindi or English.";
        service = "No service selected";
        advice = "Tell me what is happening with your car.";
    }

    // BOOKING
    else if (has("booking", "book service", "service book",
                 "appointment", "service appointment")) {
        problem = "Service Booking";
        response = "You can book a vehicle service through Smart AI AutoPilot.";
        service = "Choose your required service";
        advice = "Use the Book Service button below to open the booking page.";
    }

    // GENERAL FALLBACK
    else {
        problem = "Need More Information";
        response = "I could not confidently identify the issue from that message.";
        service = "Not determined yet";
        advice = "Please describe the symptom. For example: 'Meri car start nahi ho rahi', 'Engine se awaaz aa rahi hai' or 'AC cooling nahi kar raha'.";
    }

    // Safely display user input
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";

    const userTitle = document.createElement("b");
    userTitle.textContent = "You:";

    const userText = document.createElement("p");
    userText.textContent = input;

    userMessage.append(userTitle, userText);

    // Display NOVA response
    const aiMessage = document.createElement("div");
    aiMessage.className = "ai-message";

    aiMessage.innerHTML = `
        <b>🤖 NOVA</b>
        <p><b>Possible Area:</b> ${problem}</p>
        <p>${response}</p>
        <p><b>🔧 Recommended Action:</b> ${advice}</p>
        <p><b>🛠 Recommended Service:</b> ${service}</p>
        <button onclick="window.location.href='booking.html'">
            🚗 Book a Service
        </button>
    `;

    chatBox.append(userMessage, aiMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    inputElement.value = "";
}



// ==========================================
// LOGOUT
// ==========================================

function logout() {

    alert("Logged Out Successfully!");

    window.location.href = "login.html";
}


// ==========================================
// BOOKING
// ==========================================


function bookService(event) {

    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const car = document.getElementById("carModel").value.trim();
    const date = document.getElementById("bookingDate").value;
    const service = document.getElementById("serviceType").value;

    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    const booking = {
        name: name,
        mobile: mobile,
        car: car,
        date: date,
        service: service
    };

    let allBookings = JSON.parse(
        localStorage.getItem("serviceBookings") || "[]"
    );

    allBookings.push(booking);

    localStorage.setItem(
        "serviceBookings",
        JSON.stringify(allBookings)
    );

    increaseBooking();

    alert(
        "Booking Successful!\n\n" +
        "Customer: " + name +
        "\nCar: " + car +
        "\nService: " + service +
        "\nDate: " + date
    );

    event.target.reset();
}


// ==========================================
// BOOKING COUNT
// ==========================================

let bookings = 5;


function increaseBooking() {

    bookings++;

    localStorage.setItem("bookings", bookings);

}


window.onload = function () {

    let saved = localStorage.getItem("bookings");

    if (saved !== null) {

        bookings = parseInt(saved);
    }

    let count = document.getElementById("bookingCount");

    if (count) {

        count.innerHTML = bookings + " Bookings";
    }

};


// ==========================================
// SERVICE RATING
// ==========================================

function rateService(event) {

    event.preventDefault();

    alert("⭐ Thank you for your valuable rating!");

}
// ==========================================
// NOVA VEHICLE HEALTH CHECK
// ==========================================

function checkVehicleHealth() {

    let model = document.getElementById("carModel").value.trim();
    let year = document.getElementById("carYear").value;
    let km = document.getElementById("carKm").value;
    let lastService = document.getElementById("lastService").value;

    if (model === "" || year === "" || km === "" || lastService === "") {
        alert("Please enter all vehicle details.");
        return;
    }

    let status = "";
    let advice = "";

    if (km >= 50000) {

        status = "🟡 Maintenance Check Recommended";

        advice =
            "Your vehicle has crossed approximately 50,000 km. " +
            "NOVA recommends a general inspection and scheduled maintenance.";

    }
    else if (km >= 30000) {

        status = "🟢 Regular Maintenance Recommended";

        advice =
            "Your vehicle appears to be within a regular maintenance range. " +
            "Keep following the manufacturer's service schedule.";

    }
    else {

        status = "🟢 Maintenance Status: Good";

        advice =
            "Continue regular maintenance and follow the manufacturer's recommended service schedule.";

    }

    document.getElementById("vehicleInfo").innerHTML =
        "<b>Vehicle:</b> " + model +
        "<br><b>Manufacturing Year:</b> " + year +
        "<br><b>Current KM:</b> " + km +
        "<br><b>Last Service:</b> " + lastService;

    document.getElementById("healthStatus").innerHTML = status;

    document.getElementById("novaAdvice").innerHTML = advice;

    document.getElementById("healthResult").style.display = "block";
}
// ==========================================
// NOVA MAINTENANCE PLANNER
// ==========================================

function createMaintenancePlan() {

    let car = document.getElementById("maintenanceCar").value.trim();
    let km = document.getElementById("maintenanceKm").value;
    let date = document.getElementById("serviceDate").value;

    if (car === "" || km === "" || date === "") {
        alert("Please enter all maintenance details.");
        return;
    }

    let action = "";
    let advice = "";

    if (km >= 50000) {

        action = "🔧 General Service + Detailed Inspection";

        advice =
            "Your vehicle has crossed approximately 50,000 km. " +
            "NOVA recommends a detailed inspection and scheduled maintenance.";

    }
    else if (km >= 30000) {

        action = "🛠️ General Maintenance Check";

        advice =
            "Regular maintenance is recommended. " +
            "Check oil, brakes, tyres, battery and other scheduled items.";

    }
    else {

        action = "✅ Continue Regular Maintenance";

        advice =
            "Your vehicle is within a normal maintenance range. " +
            "Continue following the manufacturer's recommended schedule.";

    }

    document.getElementById("maintenanceInfo").innerHTML =
        "<b>Vehicle:</b> " + car +
        "<br><b>Current KM:</b> " + km +
        "<br><b>Last Service:</b> " + date;

    document.getElementById("nextAction").innerHTML = action;

    document.getElementById("maintenanceAdvice").innerHTML = advice;

    document.getElementById("maintenanceResult").style.display = "block";
}
// ==========================================
// NOVA CAR BREAKDOWN ASSISTANCE
// ==========================================

function analyzeBreakdown() {

    let starting = document.getElementById("starting").value;
    let warning = document.getElementById("warning").value;
    let sound = document.getElementById("sound").value;
    let overheating = document.getElementById("overheating").value;

    if (
        starting === "" ||
        warning === "" ||
        sound === "" ||
        overheating === ""
    ) {
        alert("Please answer all questions.");
        return;
    }

    let problem = "";
    let advice = "";
    let next = "";

    // Car not starting
    if (starting === "no") {

        problem = "Possible Starting System / Battery Issue";

        advice =
            "The problem may be related to the battery, starter system or another starting-system component.";

        next =
            "Move to a safe location and arrange professional roadside assistance or a vehicle inspection.";
    }

    // Overheating
    else if (overheating === "yes") {

        problem = "Possible Cooling System Issue";

        advice =
            "The vehicle may be experiencing an overheating-related problem.";

        next =
            "Stop safely, avoid continuing to drive an overheating vehicle, and arrange professional assistance.";
    }

    // Warning light + unusual sound
    else if (warning === "yes" && sound === "yes") {

        problem = "Possible Mechanical / System Issue";

        advice =
            "A warning light together with an unusual sound should be professionally inspected.";

        next =
            "Avoid unnecessary driving and arrange a professional vehicle inspection.";
    }

    // Warning light
    else if (warning === "yes") {

        problem = "Possible Warning-System Issue";

        advice =
            "A dashboard warning light may indicate that a vehicle system needs attention.";

        next =
            "Check the vehicle manual for the warning indicator and arrange a professional inspection.";
    }

    // Unusual sound
    else if (sound === "yes") {

        problem = "Possible Mechanical Issue";

        advice =
            "The unusual sound may require inspection to identify its source.";

        next =
            "If the sound is severe or the vehicle feels unsafe, stop in a safe location and seek professional assistance.";
    }

    // Everything normal
    else {

        problem = "No Major Breakdown Symptom Detected";

        advice =
            "Based on your answers, NOVA did not detect a major breakdown symptom.";

        next =
            "Continue monitoring the vehicle and follow the regular maintenance schedule.";
    }
    function hideMobile(mobile) {
    return "******" + mobile.slice(-4);
}
hideMobile(booking.mobile)

    document.getElementById("breakdownProblem").innerHTML =
        "<b>Possible Problem Area:</b><br>" + problem;

    document.getElementById("breakdownAdvice").innerHTML =
        advice;

    document.getElementById("breakdownNext").innerHTML =
        next;

    document.getElementById("breakdownResult").style.display = "block";
}