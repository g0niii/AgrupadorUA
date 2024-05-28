let units = [
    "Filosofía y Humanidades",
    "Ciencias Económicas y de Administración",
    "(ICDA) Instituto de Ciencias de la Administración",
    "Ciencias Agropecuarias",
    "Derecho y Ciencias Sociales",
    "Educación",
    "Ciencia Política y Relaciones Internacionales",
    "Medicina",
    "Ingeniería",
    "Ciencias Químicas"
];

let groupingInterval;

function displayUnits() {
    const unitList = document.getElementById('unitList');
    unitList.innerHTML = '';
    units.forEach((unit, index) => {
        const unitElement = document.createElement('div');
        unitElement.className = 'unit';
        unitElement.innerText = `${index + 1}. ${unit}`;
        unitList.appendChild(unitElement);
    });
}

function groupUnits() {
    const groupedUnits = document.getElementById('groupedUnits');
    groupedUnits.innerHTML = '';
    const table = document.createElement('table');
    table.className = 'group-table';

    for (let i = 0; i < units.length; i += 2) {
        const row = table.insertRow();
        const groupCell = row.insertCell(0);
        const cell1 = row.insertCell(1);
        const cell2 = row.insertCell(2);

        groupCell.innerText = `Grupo ${Math.floor(i / 2) + 1}`;
        groupCell.className = 'group-name';

        cell1.innerText = units[i];
        cell1.className = 'group';

        if (units[i + 1]) {
            cell2.innerText = units[i + 1];
            cell2.className = 'group';
        } else {
            cell2.innerText = '';
        }
    }
    groupedUnits.appendChild(table);
}

function shuffleUnits(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startGrouping() {
    if (groupingInterval) {
        clearInterval(groupingInterval);
    }
    groupingInterval = setInterval(() => {
        shuffleUnits(units);
        groupUnits();
    }, 100);  // Intervalo reducido para cambios más rápidos
}

function stopGrouping() {
    if (groupingInterval) {
        clearInterval(groupingInterval);
    }
}

// Inicializar la lista de unidades al cargar la página
document.addEventListener('DOMContentLoaded', displayUnits);
