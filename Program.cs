

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

var fruits = new List<Fruit>();

// var routes = new Routes();

app.MapGet("/api/fruit/{fruitName}", (string fruitName) => {

    var fruit = fruits.Find(fruit => fruit.Name == fruitName);
    return  Results.Ok(fruit);

});

app.MapGet("/api/fruits", () => {
    return Results.Ok(fruits);
});

app.MapPost("/api/fruit", (Fruit input) => {

    var fruit = fruits.Find(fruit => fruit.Name == input.Name);

    if (fruit == null) {
        fruits.Add(new Fruit(input.Name));
    } else {
        fruit.Increment();
    }

    return Results.Ok(fruit);
});



app.Run();
