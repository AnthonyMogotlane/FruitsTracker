using FruitTracker.Model;
using FruitTracker.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http.Json;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

FruitDb fruitDb = new FruitDb();

app.MapGet("/api/fruits", () => {
    return  Results.Ok(fruitDb.GetFruits());
});

app.MapGet("/api/fruits/{name}", (string name) => {
    return Results.Ok(fruitDb.GetName(name));
});

app.MapPost("/api/fruits", (Fruit fruit) => {
    
    fruitDb.AddFruit(fruit.Name!);

    return Results.Created($"api/fruits/{fruit.Name}", fruit);
});

app.MapDelete("/api/fruits/{name}", (string name) => {
    fruitDb.RemoveName(name);
    return Results.Ok();
});

app.UseDefaultFiles();
app.UseStaticFiles();

app.Run();
