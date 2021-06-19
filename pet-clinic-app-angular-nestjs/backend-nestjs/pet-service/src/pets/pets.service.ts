import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PetCreateDto } from './dto/PetCreate.dto';
import { PetUpdateDto } from './dto/PetUpdate.dto';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {
    
    // repository injection (injecting typeorm's repository api)
    constructor(@InjectRepository(Pet) private petRepository: Repository<Pet>) {} 

    async createPet(petCreateDto: PetCreateDto): Promise<Pet> {
        const newPet = this.petRepository.create(petCreateDto);
        return await this.petRepository.save(newPet);
    }

    async findPet(pid: string): Promise<Pet> {
        const pet = await this.petRepository.findOne(pid);
        if (typeof(pet) !== 'undefined') {
            return pet;
        } else {
            throw new NotFoundException(`No pet exist from this pet id : ${pid}`);
        } 
    }

    async getAllPets(): Promise<Pet[]> {
        const pets = await this.petRepository.find();
        if (pets.length) {
            return pets;
        } else {
            throw new NotFoundException('No pets exists!!');
        }
    }

    async updatePet(petUpdateDto: PetUpdateDto): Promise<Pet> {
        await this.petRepository.update(petUpdateDto.pid, petUpdateDto);
        return await this.findPet(petUpdateDto.pid);
    }

    async deletePet(petId: string): Promise<any> {
        return await this.petRepository.delete(petId);
    }
}
