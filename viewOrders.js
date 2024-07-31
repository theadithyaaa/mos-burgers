document.addEventListener('DOMContentLoaded', () => {
    const ordersTableBody = document.getElementById('ordersTableBody');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)}</td>
        `;
        ordersTableBody.appendChild(row);
    });
});
