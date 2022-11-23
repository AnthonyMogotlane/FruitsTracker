public class Fruit {

    public Fruit(string name) {
        this.Name = name;
        this.Count = 1;
    }

    public Fruit() {
        this.Name = "Apple";
    }

    public string Name {
        get;
        set;
    }

    public int Count {
        get;
        set;
    }

    public void Increment() {
        this.Count++;
    }
}
