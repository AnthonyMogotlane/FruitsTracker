namespace FruitTracker.Model;
public class Fruit
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public int Count { get; set; }
    public Fruit(string name)
    {
        Name = name;
        Count = 1;
    }
    public void Increment() => Count++;
}