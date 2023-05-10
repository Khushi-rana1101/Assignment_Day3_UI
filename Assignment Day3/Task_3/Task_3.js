var fruits;
(function (fruits) {
    fruits[fruits["Apple"] = 0] = "Apple";
    fruits[fruits["Mango"] = 1] = "Mango";
    fruits[fruits["Orange"] = 2] = "Orange";
    fruits[fruits["Pineapple"] = 3] = "Pineapple";
    fruits[fruits["Litchi"] = 4] = "Litchi";
    fruits[fruits["Avacado"] = 5] = "Avacado";
    fruits[fruits["WaterMelon"] = 6] = "WaterMelon";
    fruits[fruits["Raspberry"] = 7] = "Raspberry";
    fruits[fruits["Strawberry"] = 8] = "Strawberry";
})(fruits || (fruits = {}));
console.log("Printing index of Litchi: " + fruits.Litchi);
console.log("Printing the fruit with Index 6 : " + fruits[6]);
