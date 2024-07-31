document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.btn-add');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.parentElement;
            const id = card.getAttribute('data-id');
            const name = card.querySelector('p:nth-of-type(2)').textContent;
            const price = card.querySelector('p:nth-of-type(3)').textContent.replace('Rs. ', '');

            const order = { id, name, price };
            let orders = JSON.parse(localStorage.getItem('orders')) || [];
            orders.push(order);
            localStorage.setItem('orders', JSON.stringify(orders));
            alert('Item added to cart');
        });
    });
});

function searchByID() {
    const searchInput = document.getElementById('searchInput').value.toUpperCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const itemId = card.getAttribute('data-id');
        if (itemId.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
