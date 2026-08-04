const { calculateTotal, applyDiscount } = require('./cart');

// ── TAREA 1 y 2 — Escribir y que corran

test('calculateTotal([10, 20, 30]) debe retornar 60', () => {
  expect(calculateTotal([10, 20, 30])).toBe(60);
});

test('calculateTotal([5, 5]) debe retornar 10', () => {
  expect(calculateTotal([5, 5])).toBe(10);
});

test('applyDiscount(100, 10) debe retornar 90 (10% de descuento sobre 100)', () => {
  expect(applyDiscount(100, 10)).toBe(90);
});

test('applyDiscount(200, 50) debe retornar 100 (50% de descuento sobre 200)', () => {
  expect(applyDiscount(200, 50)).toBe(100);
});

// ── TAREA 3 — Refactor

// Un array vacío no tiene precios que sumar, por lo que el total
// natural y neutro para una suma es 0 (identidad de la suma).
test('calculateTotal([]) debe retornar 0 (array vacío, sin precios que sumar)', () => {
  expect(calculateTotal([])).toBe(0);
});

// Con un solo elemento, el total del carrito es simplemente ese precio.
test('calculateTotal([42]) debe retornar 42 (un solo elemento)', () => {
  expect(calculateTotal([42])).toBe(42);
});
