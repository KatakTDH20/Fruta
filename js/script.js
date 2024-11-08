const app1 = {
    data() {
        return {
            mensaje: '',
            frutas: [{ nombre: 'Manzana', cantidad: 15, precio: 5, total: 0 }],
            nuevaFruta: '',
            nuevaCantidad: 0,
            nuevoPrecio: 0.0,
        };
    },
    methods: {
        montoFruta: function(i) {
            console.log(i);
            this.frutas[i].total = this.frutas[i].cantidad * this.frutas[i].precio;
            return this.frutas[i].total.toFixed(2); // Limitar a 2 decimales
        },
        agregar: function() {
            if (this.nuevaCantidad === '') this.nuevaCantidad = 0;

            if (this.nuevaFruta) {
                this.frutas.push({
                    nombre: this.nuevaFruta,
                    cantidad: this.nuevaCantidad,
                    precio: this.nuevoPrecio,
                });
                this.nuevaFruta = '';
                this.nuevaCantidad = 0;
                this.nuevoPrecio = 0.0;
            }
        },
    },
    computed: {
        // Cálculo del subtotal con dos decimales
        calcularSubtotal() {
            return this.frutas.reduce((acc, fruta) => acc + fruta.cantidad * fruta.precio, 0).toFixed(2);
        },
        // Cálculo del IVA con dos decimales
        calcularIva() {
            return (this.calcularSubtotal * 0.16).toFixed(2);
        },
        // Cálculo del total con dos decimales
        calcularTotal() {
            return (parseFloat(this.calcularSubtotal) + parseFloat(this.calcularIva)).toFixed(2);
        },
    },
};

const apli2 = Vue.createApp(app1).mount('#seccion');
