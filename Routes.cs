class Routes
{

    private static List<Fruit> fruits = new List<Fruit>();

    public static IList<Fruit> Fruits
    {
        get
        {
            return fruits;
        }
    }


    public static IResult Fruit(String fruitName)
    {

        var fruit = fruits.Find(fruit => fruit.Name == fruitName);
        return Results.Ok(fruit);

    }

}