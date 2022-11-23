using FruitTracker.Model;
using FruitTracker.Data;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

FruitDb fruitDb = new FruitDb();

app.MapGet("/api/fruits", () => {
    return  Results.Ok(fruitDb.GetFruits());
});

// app.MapGet("/api/fruits/{id}", (int id) => {
//     return Results.Ok(fruitDb.GetFruits().Find(o => o.Id == id));
// });

app.MapPost("/api/fruits", (Fruit input) => {

    var fruit = fruitDb.GetFruits().Find(fruit => fruit.Name == input.Name);

    if (fruit == null) {
        fruitDb.AddFruit(input.Name!);
    } else {
        fruit.Count++;
    }

    return Results.Created($"api/fruits/{input.Id}", input);
});


app.UseDefaultFiles();
app.UseStaticFiles();

app.Run();
