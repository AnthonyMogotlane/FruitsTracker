using FruitTracker.Model;

namespace FruitTracker.Data;
public class FruitDb
{
    List<Fruit> Fruits { get; set; }

    public FruitDb() => Fruits = new List<Fruit>(){};

    public void AddFruit(string name) 
    {
        var fruit = Fruits.Find(o => o.Name == name);
        if(fruit == null)
            Fruits.Add(new Fruit(name));
        else
            fruit.Count++;
    }

    public Fruit GetName(string name) => Fruits.Find(o => o.Name == name)!;

    public void RemoveName(string name) => Fruits.Remove(Fruits.Find(o => o.Name == name)!);

    public List<Fruit> GetFruits() => Fruits;

    public void UpdateFruit(string name, Fruit fruit)
    {
        var curFruit = Fruits.Find(o => o.Name == name);
        if(fruit != null) {
            curFruit!.Name = fruit.Name;
            curFruit.Count = fruit.Count;
        }

    }

}