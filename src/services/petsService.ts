import { Pet } from "../models/pet";

const pets: Pet[] = [
  {
    id: 1,
    name: "Rex",
    age: 2,
    breed: "Labrador",
    color: "Brown",
    gender: "Male",
  },
  {
    id: 2,
    name: "RSparky",
    age: 5,
    breed: "Golden Retriever",
    color: "Golden",
    gender: "Male",
  },
];

const notFound = new Error("Pet not found");

export class PetsService {
  async fetchPets() {
    return pets;
  }

  async getPet(id: number) {
    const pet = pets.find((p) => p.id === id);
    if (pet === null) throw notFound;
    return pet;
  }

  async createPet(pet: Pet) {
    const maxID = pets.length > 0 ? Math.max(...pets.map((p) => p.id)) : 0;
    pet.id = maxID + 1;
    pets.push(pet);
    return pet;
  }

  async updatePet(id: number, pet: Pet) {
    const index = pets.findIndex((p) => p.id === id);
    if (index < 0) throw notFound;
    pets[index] = pet;
  }

  async deletePet(id: number) {
    const index = pets.findIndex((p) => p.id === id);
    if (index < 0) throw notFound;
    pets.splice(index,1);
  }
}
