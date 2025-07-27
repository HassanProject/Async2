// Event Listener on btn1
document.getElementById('btn1').addEventListener('click', loadCustomer);

// Event Listener on btn2
document.getElementById('btn2').addEventListener('click', loadCustomers);

// Function for Single customer
function loadCustomer(e) {
    // Create XHR Object
    const xhr = new XMLHttpRequest();
    // Open Request
    xhr.open('GET', 'customer.json',true);
    // Load Request
    xhr.onload = function(){
        if (this.status === 200) {
            const customer = JSON.parse(this.responseText);

            const output = `
            <ul>
                <li>${customer.id}</li>
                <li>${customer.name}</li>
                <li>${customer.company}</li>
                <li>${customer.phone}</li>
            </ul>`;

            document.getElementById('customer').innerHTML = output;
            // console.log(this.responseText);
        }
    }
    xhr.send();
    // console.log('customer');
}

// Function for Multiple customers
function loadCustomers(e) {
    // Create XHR Object
    const xhr = new XMLHttpRequest();
    // Open Request
    xhr.open('GET', 'customers.json',true);
    // Load Request
    xhr.onload = function(){
        if (this.status === 200) {

            const customers = JSON.parse(this.responseText);

             let output ='';

           customers.forEach(function(customer){
             output += `
            <ul>
                <li>${customer.id}</li>
                <li>${customer.name}</li>
                <li>${customer.company}</li>
                <li>${customer.phone}</li>
            </ul>`;
           })

            document.getElementById('customers').innerHTML = output;
            // console.log(this.responseText);
        }
    }
    xhr.send();
    // console.log('customer');
}