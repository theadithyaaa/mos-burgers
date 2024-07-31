document.addEventListener('DOMContentLoaded', function() {
    // Add Customer Form
    const addCustomerForm = document.getElementById('addForm');
    if (addCustomerForm) {
        addCustomerForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const customerId = document.getElementById('customerId').value;
            const customerName = document.getElementById('customerName').value;
            const customerPhone = document.getElementById('customerPhone').value;
            const totalAmount = document.getElementById('totalAmount').value;

            const customer = {
                id: customerId, 
                name: customerName,
                phone: customerPhone,
                amount: totalAmount
            };

            let customers = JSON.parse(localStorage.getItem('customers')) || [];
            customers.push(customer);
            localStorage.setItem('customers', JSON.stringify(customers));

            alert('Customer Added Successfully!');
            window.location.href = 'employee.html';
        });
    }

    // View Customers Page
    const customersTableBody = document.getElementById('customersTableBody');
    if (customersTableBody) {
        const savedCustomers = JSON.parse(localStorage.getItem('customers')) || [];
        savedCustomers.forEach((customer, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${customer.id}</td>
                <td>${customer.name}</td>
                <td>${customer.phone}</td>
                <td>${customer.amount}</td>
            `;
            customersTableBody.appendChild(row);
        });
    }

    // Place Order Form
    const placeOrderForm = document.getElementById('orderForm');
    if (placeOrderForm) {
        placeOrderForm.addEventListener('submit', function(e) {
            e.preventDefault();

            alert('Order Placed Successfully!');
            window.location.href = 'employee.html';
        });
    }

    // Update Customer Form
    const updateCustomerForm = document.getElementById('updateForm');
    if (updateCustomerForm) {
        updateCustomerForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const customerId = document.getElementById('customerId').value;
            const customerName = document.getElementById('customerName').value;
            const customerPhone = document.getElementById('customerPhone').value;

            let customers = JSON.parse(localStorage.getItem('customers')) || [];

            const customerIndex = customers.findIndex(cust => cust.id === customerId);

            if (customerIndex !== -1) {
                customers[customerIndex] = {
                    id: customerId,
                    name: customerName || customers[customerIndex].name,
                    phone: customerPhone || customers[customerIndex].phone,
                    amount: customers[customerIndex].amount 
                };

                localStorage.setItem('customers', JSON.stringify(customers));

                alert('Customer Updated Successfully!');
                window.location.href = 'employee.html';
            } else {
                alert('Customer ID not found.');
            }
        });
    }

    // Update Order Form
    const updateOrderForm = document.getElementById('updateOrderForm');
    if (updateOrderForm) {
        updateOrderForm.addEventListener('submit', function(e) {
            e.preventDefault();

            alert('Order Updated Successfully!');
            window.location.href = 'employee.html';
        });
    }

    // Add to Cart
    let orderCart = JSON.parse(localStorage.getItem('orderCart')) || [];

    window.addToCart = function() {
        const productId = document.getElementById('productId').value;
        const quantity = document.getElementById('quantity').value;
        const price = document.getElementById('price').value;

        if (productId && quantity && price) {
            orderCart.push({ productId, quantity, price });
            localStorage.setItem('orderCart', JSON.stringify(orderCart));
            updateOrderTable();
        } else {
            alert('Please fill all fields.');
        }
    };

    function updateOrderTable() {
        const tableBody = document.getElementById('orderTableBody');
        tableBody.innerHTML = '';
        orderCart.forEach((order, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${order.productId}</td>
                <td>${order.quantity}</td>
                <td>${order.price}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // View Orders Page
    const ordersTableBody = document.getElementById('ordersTableBody');
    if (ordersTableBody) {
        const savedOrders = JSON.parse(localStorage.getItem('orderCart')) || [];
        savedOrders.forEach((order, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${order.productId}</td>
                <td>${order.quantity}</td>
                <td>${order.price}</td>
            `;
            ordersTableBody.appendChild(row);
        });
    }
});
