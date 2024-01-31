const { sum, fromDollarToYen } = require("./app.js");

test("adss 14 + 9 to equal 23", () => {
  let total = sum(14, 9);
  expect(total).toBe(23);
});

test("3.5 Euros should be 3.745 dollars", function () {
  // Importo la funcion desde app.js
  const { fromEuroToDollar } = require("./app.js");

  // Uso la función como debe ser usada
  const dollars = fromEuroToDollar(3.5);

  // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
  const expected = 3.5 * 1.07;

  // Hago mi comparación (la prueba)
  expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("One Dollar should be 146.26 yens", function () {
  const { fromDollarToYen } = require("./app.js");
  expect(fromDollarToYen(1)).toBe("146.26");
});

test("one Yens should be 0.87 pound", function (){
    const {fromYenToPound} = require("./app.js");
    expect(fromYenToPound(1)).toBe(0.87);

})

