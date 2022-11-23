using FruitTracker.Model;

namespace FruitTracker.Data;
public class FruitDb
{
    List<Fruit> Fruits { get; set; }

    public FruitDb() => Fruits = new List<Fruit>(){new Fruit("orange")};

    public void AddFruit(string name) 
    {
        Fruits.Add(new Fruit(name));
    } 

    public List<Fruit> GetFruits() => Fruits;

}