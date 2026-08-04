# LAB_Testing

Laboratorio de testing con Jest para practicar pruebas unitarias en JavaScript.

## Descripción

Este proyecto es un ejercicio práctico de testing que implementa funciones básicas de un carrito de compras y sus correspondientes pruebas unitarias utilizando Jest.

## Funcionalidades

El proyecto incluye dos funciones principales:

- **calculateTotal(prices)**: Calcula el total de un array de precios
- **applyDiscount(price, percent)**: Aplica un descuento porcentual a un precio

## Instalación

1. Clonar el repositorio
2. Instalar las dependencias:

```bash
npm install
```

## Uso

### Ejecutar las pruebas

```bash
npm test
```

## Estructura del proyecto

```
LAB_Testing/
├── cart.js           # Implementación de las funciones del carrito
├── cart.test.js      # Pruebas unitarias con Jest
├── package.json      # Configuración del proyecto y dependencias
└── README.md         # Este archivo
```

## ScreenShots

<img width="1512" height="982" alt="Screenshot 2026-08-04 at 5 49 07 PM" src="https://github.com/user-attachments/assets/d3884f17-450b-41b9-9290-1164be5a5795" />


## Tests

El archivo `cart.test.js` contiene pruebas para:

- Cálculo de total con múltiples precios
- Cálculo de total con array vacío
- Cálculo de total con un solo elemento
- Aplicación de descuentos porcentuales

## Tecnologías

- JavaScript (Node.js)
- Jest (Framework de testing)

## Licencia

ISC
