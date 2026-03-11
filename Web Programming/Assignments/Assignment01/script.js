// ==================== DATA ====================

// Load cars from localStorage or use default sample data
function loadCars() {
    let data = localStorage.getItem("cars");
    if (data) {
        return JSON.parse(data);
    }
    // Default sample data
    return [
        { id: 1, name: "Civic", company: "Honda", price: 25000, year: 2023, status: "Available" },
        { id: 2, name: "Corolla", company: "Toyota", price: 22000, year: 2022, status: "Available" },
        { id: 3, name: "Model 3", company: "Tesla", price: 40000, year: 2024, status: "Sold" },
    ];
}

function saveCars() {
    localStorage.setItem("cars", JSON.stringify(cars));
}

let cars = loadCars();
let nextId = cars.length > 0 ? Math.max(...cars.map(c => c.id)) + 1 : 1;

// ==================== NAVIGATION ====================

const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        let page = this.getAttribute("data-page");
        showPage(page);
    });
});

function showPage(pageName) {
    // Hide all pages
    pages.forEach(p => p.classList.add("d-none"));
    // Show selected page
    document.getElementById("page-" + pageName).classList.remove("d-none");
    // Update active nav link
    navLinks.forEach(l => l.classList.remove("active"));
    document.querySelector(`[data-page="${pageName}"]`).classList.add("active");
    // Refresh data on page
    renderPage(pageName);
}

// ==================== RENDERING ====================

function renderPage(pageName) {
    if (pageName === "dashboard") renderDashboard();
    if (pageName === "management") renderManagement();
    if (pageName === "sold") renderSold();
    if (pageName === "settings") loadSettings();
}

// Dashboard
function renderDashboard() {
    let total = cars.length;
    let available = cars.filter(c => c.status === "Available").length;
    let sold = cars.filter(c => c.status === "Sold").length;

    document.getElementById("total-cars").textContent = total;
    document.getElementById("available-cars").textContent = available;
    document.getElementById("sold-cars-count").textContent = sold;

    let tbody = document.getElementById("dashboard-table-body");
    tbody.innerHTML = "";

    cars.forEach((car, index) => {
        let statusBadge = car.status === "Available"
            ? `<span class="badge bg-success">Available</span>`
            : `<span class="badge bg-danger">Sold</span>`;

        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${car.name}</td>
                <td>${car.company}</td>
                <td>$${car.price.toLocaleString()}</td>
                <td>${car.year}</td>
                <td>${statusBadge}</td>
            </tr>
        `;
    });

    if (cars.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center">No cars found.</td></tr>`;
    }
}

// Car Management - shows only available cars
function renderManagement() {
    let tbody = document.getElementById("management-table-body");
    tbody.innerHTML = "";

    let availableCars = cars.filter(c => c.status === "Available");

    availableCars.forEach((car, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${car.name}</td>
                <td>${car.company}</td>
                <td>$${car.price.toLocaleString()}</td>
                <td>${car.year}</td>
                <td>
                    <button class="btn btn-sm btn-warning" onclick="editCar(${car.id})">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteCar(${car.id})">Delete</button>
                    <button class="btn btn-sm btn-success" onclick="markAsSold(${car.id})">Mark Sold</button>
                </td>
            </tr>
        `;
    });

    if (availableCars.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center">No available cars.</td></tr>`;
    }
}

// Sold Cars page
function renderSold() {
    let tbody = document.getElementById("sold-table-body");
    tbody.innerHTML = "";

    let soldCars = cars.filter(c => c.status === "Sold");

    soldCars.forEach((car, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${car.name}</td>
                <td>${car.company}</td>
                <td>$${car.price.toLocaleString()}</td>
                <td>${car.year}</td>
                <td>
                    <button class="btn btn-sm btn-info" onclick="markAsAvailable(${car.id})">Mark Available</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteCar(${car.id})">Delete</button>
                </td>
            </tr>
        `;
    });

    if (soldCars.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center">No sold cars.</td></tr>`;
    }
}

// ==================== CAR OPERATIONS ====================

// Add / Update car form
const carForm = document.getElementById("car-form");
const carIdField = document.getElementById("car-id");
const carNameField = document.getElementById("car-name");
const carCompanyField = document.getElementById("car-company");
const carPriceField = document.getElementById("car-price");
const carYearField = document.getElementById("car-year");
const formTitle = document.getElementById("form-title");
const formSubmitBtn = document.getElementById("form-submit-btn");
const formCancelBtn = document.getElementById("form-cancel-btn");

carForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let id = carIdField.value;
    let name = carNameField.value.trim();
    let company = carCompanyField.value.trim();
    let price = parseInt(carPriceField.value);
    let year = parseInt(carYearField.value);

    if (id) {
        // Update existing car
        let car = cars.find(c => c.id === parseInt(id));
        if (car) {
            car.name = name;
            car.company = company;
            car.price = price;
            car.year = year;
        }
        resetForm();
    } else {
        // Add new car
        cars.push({
            id: nextId++,
            name: name,
            company: company,
            price: price,
            year: year,
            status: "Available"
        });
    }

    saveCars();
    carForm.reset();
    renderManagement();
});

function editCar(id) {
    let car = cars.find(c => c.id === id);
    if (!car) return;

    carIdField.value = car.id;
    carNameField.value = car.name;
    carCompanyField.value = car.company;
    carPriceField.value = car.price;
    carYearField.value = car.year;

    formTitle.textContent = "Edit Car";
    formSubmitBtn.textContent = "Update Car";
    formCancelBtn.classList.remove("d-none");
}

function resetForm() {
    carForm.reset();
    carIdField.value = "";
    formTitle.textContent = "Add New Car";
    formSubmitBtn.textContent = "Add Car";
    formCancelBtn.classList.add("d-none");
}

formCancelBtn.addEventListener("click", resetForm);

function deleteCar(id) {
    if (!confirm("Are you sure you want to delete this car?")) return;
    cars = cars.filter(c => c.id !== id);
    saveCars();
    // Re-render current visible page
    let activePage = document.querySelector(".nav-link.active").getAttribute("data-page");
    renderPage(activePage);
}

function markAsSold(id) {
    let car = cars.find(c => c.id === id);
    if (car) {
        car.status = "Sold";
        saveCars();
        renderManagement();
        alert(car.name + " has been moved to Sold Cars.");
    }
}

function markAsAvailable(id) {
    let car = cars.find(c => c.id === id);
    if (car) {
        car.status = "Available";
        saveCars();
        renderSold();
        alert(car.name + " has been moved back to Available.");
    }
}

// ==================== SETTINGS ====================

function loadSettings() {
    let name = localStorage.getItem("showroomName") || "";
    document.getElementById("showroom-name").value = name;
}

document.getElementById("save-settings-btn").addEventListener("click", function () {
    let name = document.getElementById("showroom-name").value.trim();
    localStorage.setItem("showroomName", name);
    alert("Settings saved!");
});

document.getElementById("clear-data-btn").addEventListener("click", function () {
    if (!confirm("Are you sure you want to clear all data? This cannot be undone.")) return;
    localStorage.removeItem("cars");
    localStorage.removeItem("showroomName");
    cars = [];
    nextId = 1;
    alert("All data cleared.");
    showPage("dashboard");
});

// ==================== INIT ====================
renderDashboard();
