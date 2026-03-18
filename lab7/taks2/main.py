from models import Animal, Cat, Dog

a = Animal("unknown", 0, "unknown")

c = Cat("Murka", 4, "Cat", "")
d = Dog("Rex", 3, "dog", "buldog")

l = [a, c, d]
str(a)
print(c.is_like_milk())
print(d.get_breed())
for animal in l:
    print(animal.sound())
    
    




