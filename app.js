function showTab(tabName) {
    // Ocultar todas las secciones
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.style.display = 'none');

    // Mostrar la sección correspondiente
    document.getElementById(tabName).style.display = 'block';
}

// Mostrar el primer formulario por defecto
document.addEventListener('DOMContentLoaded', () => {
    showTab('compras');
});