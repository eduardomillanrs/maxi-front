import { PrimeIcons } from 'primeng/api';

import { Menu } from '@admin/app/core/layout/models/menu';


export const menus: Menu[] = [
  {
    id: 66,
    name: "Reservación de mobiliario interno",
    route: null,
    icon: PrimeIcons.BOOK,
    isActive: true,
    submenus: [
      {
        id: 67,
        name: "Eventos internos",
        route: "/eventos/interno",
        isActive: true,
      },
      {
        id: 68,
        name: "Reservaciones de uniformes",
        route: "/reservaciones/uniforme",
        isActive: true,
      },
    ]
  },
  {
    id: 83,
    name: "Gerencia de operaciones",
    route: "/gerencia-operaciones",
    icon: PrimeIcons.LIST,
    isActive: true,
  },
  {
    id: 14,
    name: "Administración de ventas almadera",
    route: null,
    icon: PrimeIcons.MONEY_BILL,
    isActive: true,
    submenus: [
      {
        id: 15,
        name: "Cotizador almadera",
        route: "/cotizadorAlmadera",
        isActive: true,
      },
      {
        id: 16,
        name: "Panel edición de ventas almadera",
        route: "/almadera/ventas",
        isActive: true,
      },
      {
        id: 17,
        name: "Adicionales almadera",
        route: "/adicionalesAlmadera",
        isActive: true,
      },
    ]
  },
  {
    id: 52,
    name: "Movimientos",
    route: null,
    icon: PrimeIcons.MAP,
    isActive: true,
    submenus: [
      {
        id: 53,
        name: "Transferencias de salida",
        route: "/salidas",
        isActive: true,
      },
      {
        id: 54,
        name: "Transferencias de entrada",
        route: "/entradas",
        isActive: true,
      },
      {
        id: 55,
        name: "Entrada por compras",
        route: "/entradasXcompra",
        isActive: true,
      },
      {
        id: 56,
        name: "Movimientos de corrección",
        route: "/movimientosCorreccion",
        isActive: true,
      },
      {
        id: 57,
        name: "Bajas de inventario",
        route: "/bajasInventario",
        isActive: true,
      },
    ]
  },
  {
    id: 58,
    name: "Prospectos",
    route: "/prospectos",
    icon: PrimeIcons.TIMES,
    isActive: true,
  },
  {
    id: 1,
    name: "Administración de página web",
    route: null,
    icon: PrimeIcons.CALENDAR,
    isActive: true,
    submenus: [
      {
        id: 2,
        name: "Slider",
        route: "/slider",
        isActive: true,
      },
      {
        id: 3,
        name: "Galería",
        route: "/galeria",
        isActive: true,
      },
      {
        id: 4,
        name: "Promociones",
        route: "/promocion",
        isActive: true,
      },
      {
        id: 5,
        name: "Artículos destacados",
        route: "/articulosDestacados",
        isActive: true,
      },
      {
        id: 6,
        name: "Bandeja de citas",
        route: "/bandejaCitas",
        isActive: true,
      },
      {
        id: 7,
        name: "Bandeja de comentarios",
        route: "/bandejaContacto",
        isActive: true,
      },
    ]
  },
  {
    id: 23,
    name: "Clientes",
    route: "/clientes",
    icon: PrimeIcons.LIST,
    isActive: true,
  },
  {
    id: 24,
    name: "Control de eventos",
    route: null,
    icon: PrimeIcons.STAR,
    isActive: true,
    submenus: [
      {
        id: 25,
        name: "Registro de pagos de clientes",
        route: "/registro-pagos",
        isActive: true,
      },
      {
        id: 26,
        name: "Registro de pagos a proveedores",
        route: "/cuentasPorPagar",
        isActive: true,
      },
      {
        id: 27,
        name: "Comisiones",
        route: "/comisiones",
        isActive: true,
      },
      {
        id: 28,
        name: "Saldos a favor",
        route: "/saldos-favor",
        isActive: true,
      },
      {
        id: 29,
        name: "Depósitos en garantía",
        route: "/depositos-garantia",
        isActive: true,
      },
      {
        id: 30,
        name: "Créditos de clientes",
        route: "/cuentas/creditos",
        isActive: true,
      },
      {
        id: 88,
        name: "Descuentos de clientes de rentas",
        route: "/especiales",
        isActive: true,
      },
    ]
  },
  {
    id: 32,
    name: "Administración de eventos",
    route: null,
    icon: PrimeIcons.MAP,
    isActive: true,
    submenus: [
      {
        id: 33,
        name: "Panel edición de eventos",
        route: "/eventos/edicion",
        isActive: true,
      },
      {
        id: 34,
        name: "Menús de platillos",
        route: "/eventos/menus",
        isActive: true,
      },
      {
        id: 35,
        name: "Platillos",
        route: "/eventos/platillos",
        isActive: true,
      },
      {
        id: 36,
        name: "Categorías de platillos",
        route: "/eventos/categorias/platillos",
        isActive: true,
      },
      {
        id: 37,
        name: "Paquetes de meseros",
        route: "/eventos/paquetes/meseros",
        isActive: true,
      },
      {
        id: 38,
        name: "Banquetes",
        route: "/eventos/banquetes",
        isActive: true,
      },
      {
        id: 39,
        name: "Tipos de eventos",
        route: "/eventos/tipos",
        isActive: true,
      },
      {
        id: 40,
        name: "Logística",
        route: "/logistica",
        isActive: false,
      },
      {
        id: 41,
        name: "Cotizador de eventos",
        route: "/cotizadorEventos",
        isActive: false,
      },
      {
        id: 42,
        name: "Paquete de artículos",
        route: "/eventos/paquetes/articulos",
        isActive: true,
      },
      {
        id: 44,
        name: "Logística de degustación",
        route: "/degustacion",
        isActive: false,
      },
      {
        id: 98,
        name: "Ajustes del Banquete",
        route: "/AjustesBanquete",
        isActive: true,
      },
      {
        id: 99,
        name: "Adicionales Banquete",
        route: "/ConceptosAdicionalesBanquete",
        isActive: true,
      },
      {
        id: 100,
        name: "Categorias de adicionales",
        route: "/CategoriasAjustesAdicionales",
        isActive: true,
      },
      {
        id: 101,
        name: "Servicios Adicionales",
        route: "/ServiciosAdicionales",
        isActive: true,
      },
    ]
  },
  {
    id: 69,
    name: "Saldos pendientes",
    route: null,
    icon: PrimeIcons.IMAGE,
    isActive: true,
    submenus: [
      {
        id: 70,
        name: "Entrada de saldos pendientes",
        route: "/saldosPendientes",
        isActive: true,
      },
      {
        id: 71,
        name: "Cobranza de saldos pendientes",
        route: "/cobranza",
        isActive: true,
      },
      {
        id: 72,
        name: "Historial de cobranza",
        route: "/historialCobranza",
        isActive: true,
      },
    ]
  },
  {
    id: 73,
    name: "Sistema",
    route: null,
    icon: PrimeIcons.LOCK,
    isActive: true,
    submenus: [
      {
        id: 74,
        name: "Menús",
        route: "/system/menus",
        isActive: true,
      },
      {
        id: 75,
        name: "Roles",
        route: "/system/roles",
        isActive: true,
      },
      {
        id: 76,
        name: "Usuarios",
        route: "/users",
        isActive: true,
      },
    ]
  },
  {
    id: 11,
    name: "Alertas",
    route: "/alertas",
    icon: PrimeIcons.TAG,
    isActive: true,
  },
  {
    id: 45,
    name: "Inventario",
    route: null,
    icon: PrimeIcons.SHOPPING_CART,
    isActive: true,
    submenus: [
      {
        id: 46,
        name: "Inventario actual",
        route: "/inventario",
        isActive: true,
      },
      {
        id: 47,
        name: "Ajuste de inventario",
        route: "/ajustesInventario",
        isActive: true,
      },
      {
        id: 48,
        name: "Diario de movimiento",
        route: "/diarioMovimientos",
        isActive: true,
      },
      {
        id: 49,
        name: "Control de inventario",
        route: "/controlinventario",
        isActive: true,
      },
      {
        id: 50,
        name: "Kardex",
        route: "/kardex",
        isActive: true,
      },
      {
        id: 51,
        name: "Ajuste de costo promedio",
        route: "/ajustesCostoPromedio",
        isActive: true,
      },
    ]
  },
  {
    id: 79,
    name: "Proveedores",
    route: null,
    icon: PrimeIcons.ENVELOPE,
    isActive: true,
    submenus: [
      {
        id: 80,
        name: "Proveedores",
        route: "/proveedores",
        isActive: true,
      },
      {
        id: 81,
        name: "Categorías de proveedores",
        route: "/categoriaProveedores",
        isActive: true,
      },
    ]
  },
  {
    id: 82,
    name: "Dashboard",
    route: "/",
    icon: PrimeIcons.USER,
    isActive: true,
  },
  {
    id: 103,
    name: "Administración recintos internos",
    route: null,
    icon: PrimeIcons.LIST,
    isActive: true,
    submenus: [
      {
        id: 43,
        name: "Calendario de Reservaciones",
        route: "/calendario",
        isActive: true,
      },
      {
        id: 104,
        name: "Panel de edicion de recintos internos",
        route: "/RecintosInternos/EdicionEventosRecintosInternos",
        isActive: true,
      },
      {
        id: 105,
        name: "Recintos Internos",
        route: "/RecintosInternos/ConfiguracionRecintosInternos",
        isActive: true,
      },
      {
        id: 107,
        name: "Creacion unidad negocio",
        route: "/RecintosInternos/CrearRecintosInternos",
        isActive: true,
      },
    ]
  },
  {
    id: 59,
    name: "Reportes",
    route: null,
    icon: PrimeIcons.ENVELOPE,
    isActive: true,
    submenus: [
      {
        id: 60,
        name: "Reporte de pagos de clientes",
        route: "/reportes/pagos/cliente",
        isActive: true,
      },
      {
        id: 61,
        name: "Reporte de anticipos de clientes",
        route: "/reportes/anticipos/cliente",
        isActive: true,
      },
      {
        id: 62,
        name: "Reporte de cuentas por cobrar",
        route: "/reportes/adeudos/cliente",
        isActive: true,
      },
      {
        id: 63,
        name: "Reporte de pagos de proveedores",
        route: "/reportes/pagos/proveedor",
        isActive: true,
      },
      {
        id: 64,
        name: "Reporte de anticipos de proveedores",
        route: "/reportes/anticipos/proveedor",
        isActive: true,
      },
      {
        id: 65,
        name: "Reporte de cuentas por pagar",
        route: "/reportes/adeudos/proveedor",
        isActive: true,
      },
      {
        id: 86,
        name: "Reporte de disponibilidad",
        route: "/reportes/disponibilidad",
        isActive: true,
      },
      {
        id: 87,
        name: "Reporte de almacenes",
        route: "/reporteAlmacenes",
        isActive: true,
      },
      {
        id: 89,
        name: "Reporte de ingresos eventos",
        route: "/reportes/ingresos/eventos",
        isActive: true,
      },
      {
        id: 90,
        name: "Reporte de ingresos rentas",
        route: "/reportes/ingresos/rentas",
        isActive: true,
      },
      {
        id: 91,
        name: "Reporte de ingresos ventas remate",
        route: "/reportes/ingresos/ventas",
        isActive: true,
      },
      {
        id: 92,
        name: "Reporte de ingresos ventas almadera",
        route: "/reportes/ingresos/almadera",
        isActive: true,
      },
      {
        id: 93,
        name: "Reporte de artículo reservado",
        route: "/reportes/articulos/reservado",
        isActive: true,
      },
      {
        id: 94,
        name: "Reporte de artículos sin movimiento",
        route: "/reportes/articulos/sin-movimientos",
        isActive: true,
      },
      {
        id: 95,
        name: "Reporte de saldos pendientes",
        route: "/reportes/saldos-pendientes",
        isActive: true,
      },
      {
        id: 96,
        name: "Reporte de bajas a costo promedio",
        route: "/reportes/costo-promedio",
        isActive: true,
      },
      {
        id: 97,
        name: "Reporte de bajas por mermas",
        route: "/reportes/bajas",
        isActive: true,
      },
      {
        id: 102,
        name: "Reporte de eventos internos",
        route: "/reportes/ingresos/eventosInternos",
        isActive: true,
      },
      {
        id: 106,
        name: "Reporte de ingresos recintos internos",
        route: "/reportes/ingresos/RecintosInternos",
        isActive: true,
      },
    ]
  },
  {
    id: 8,
    name: "Administración de rentas",
    route: null,
    icon: PrimeIcons.DATABASE,
    isActive: true,
    submenus: [
      {
        id: 9,
        name: "Panel edición de rentas",
        route: "/editarRenta",
        isActive: true,
      },
      {
        id: 10,
        name: "Cotizador de rentas",
        route: "/cotizador",
        isActive: true,
      },
    ]
  },
  {
    id: 12,
    name: "Almacenes",
    route: null,
    icon: PrimeIcons.MAP,
    isActive: true,
    submenus: [
      {
        id: 13,
        name: "Registro de almacenes",
        route: "/almacenes",
        isActive: true,
      },
    ]
  },
  {
    id: 18,
    name: "Artículos",
    route: null,
    icon: PrimeIcons.TIMES,
    isActive: true,
    submenus: [
      {
        id: 19,
        name: "Artículos",
        route: "/articulo",
        isActive: true,
      },
      {
        id: 20,
        name: "Kits de artículos",
        route: "/kits",
        isActive: true,
      },
      {
        id: 21,
        name: "Categorías de artículos",
        route: "/categoria",
        isActive: true,
      },
      {
        id: 22,
        name: "Consulta de artículo",
        route: "/reporteArticulo",
        isActive: true,
      },
    ]
  },
  {
    id: 31,
    name: "Ingresos y egresos",
    route: "/egresosIngresos",
    icon: PrimeIcons.TAG,
    isActive: false,
  },
];
