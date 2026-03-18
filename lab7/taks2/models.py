class Animal:
    def __init__(self, name, age, type):
        self.name = name
        self.age = age
        self.type =type
    def get_info(self):
        return f'age: {self.age}, name: {self.name}'
    def sound(self):
        return "..."
    
    def __str__(self):
        return f'Age: {self.age}, Name: {self.name}'
    
        
a = Animal("Rex", 3, "Dog")



class Dog(Animal):
    def __init__(self, name, age, type, breed):
        super().__init__(name, age, type)
        self.breed = breed
         
    def sound(self):
        return "Auu"
    
    def get_breed(self):
        return self.breed

import random

class Cat(Animal):
    def __init__(self, name, age, type, like_milk):
        super().__init__(name, age, type)
        self.like_milk = like_milk
    
    def sound(self):
        return "Meow"
    
    def is_like_milk(self):
        b = random.choice([True, False])
        return b


        