// Create a request variable and assign a new XMLHttpRequest object to it.
let request = new XMLHttpRequest()

// Assign variable
let table = document.getElementById('myTable')
// let current = document.getElementById('current')
// let total = document.getElementById('total')

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://swapi.co/api/planets/?format=json', true)

request.onload = function () {
  // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 ** request.status < 400) {
        // Set entries
        // current.innerHTML = 10
        // total.innerHTML = data.count * 10

        data.results.forEach( (results, index) => {
            // Log each results
            console.log(results)
            let data = results;

            // Append data to table
            tr = document.createElement('tr');

            td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML = index+1

            td1 = document.createElement('td');
            tr.appendChild(td1);
            td1.innerHTML = data.name

            td2 = document.createElement('td');
            tr.appendChild(td2);
            td2.innerHTML = data.rotation_period 

            td3 = document.createElement('td');
            tr.appendChild(td3);
            td3.innerHTML = data.orbital_period

            td4 = document.createElement('td');
            tr.appendChild(td4);
            td4.innerHTML = data.diameter

            td5 = document.createElement('td');
            tr.appendChild(td5);
            td5.innerHTML = data.climate

            table.appendChild(tr);
        })
    } else {
        console.log('Error getting data');
    }
}

// Send request
request.send()

// Search function
function search() {
    const input = document.getElementById('searchInput');
    const inputStr = input.value.toUpperCase();

    // Loop for each tr
    document.querySelectorAll('#myTable tr:not(.header)').forEach((tr) => {
        const anyMatch = [...tr.children]
            .some(td => td.textContent.toUpperCase().includes(inputStr));

        if (anyMatch) {
            tr.style.removeProperty('display');
        } else {
            tr.style.display = 'none';
        }
    });
}
