import { Request, Response } from "express";
import { PetsService } from "../services/petsService";

const service = new PetsService();
export const listPets = async (req: Request, res: Response) => {
  res.status(200).json(await service.fetchPets());
};

export const createPets = async (req: Request, res: Response) => {
  const result = await service.createPet(req.body);
  res.status(201).json(await service.createPet(result));
};

export const getPetById = async (req: Request, res: Response) => {
  const petID = parseInt(req.params.petID);
  res.status(200).json(await service.getPet(petID));
};

export const updatePetById = async (req: Request, res: Response) => {
  const petID = parseInt(req.params.petID)
  res.status(204).json(await service.updatePet(petID, ));
};

export const deletePetById = async (req: Request, res: Response) => {
  const petID = parseInt(req.params.petID)
  res.status(204).json(await service.deletePet(petID));
};
