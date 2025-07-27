// Event Listener on btn1
document.getElementById('btn1').addEventListener('click', loadCustomer);

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