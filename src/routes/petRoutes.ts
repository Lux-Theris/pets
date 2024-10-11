import { Router } from "express";
import {
  createPets,
  deletePetById,
  getPetById,
  listPets,
  updatePetById,
} from "../controllers/petsController";

export const petsRouter = Router()
  .get("/pets", listPets)
  .post("/pets", createPets)
  .delete("/pets/:petID(\\d+)", deletePetById)
  .put("/pets/:petID(\\d+)", updatePetById)
  .get("/pets/:petID(\\d+)", getPetById);
