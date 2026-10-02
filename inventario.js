// Inventario de insumos de Cloud Coffee

const inventarioInsumos = [
    {
        nombre: "Café",
        stock: 20,
        minimo: 5
    },
    {
        nombre: "Leche",
        stock: 15,
        minimo: 5
    },
    {
        nombre: "Azúcar",
        stock: 10,
        minimo: 3
    }
];

function consultarStock() {
    return inventarioInsumos;
}

function verificarStockBajo() {
    return inventarioInsumos.filter(insumo => insumo.stock <= insumo.minimo);
}

module.exports = {
    inventario,
    consultarStock,
    verificarStockBajo
};