import { ValidationPipe } from '@nestjs/common';
import { Body, Controller, Delete, Get, HttpCode, Param, ParseUUIDPipe, Post, Put, UsePipes } from '@nestjs/common';
import { PetCreateDto } from './dto/PetCreate.dto';
import { PetUpdateDto } from './dto/PetUpdate.dto';
import { Pet } from './entities/pet.entity';
import { PetsService } from './pets.service';

@Controller('services/pets')
export class PetsController {

    constructor(private petService: PetsService) {}

    @Post()
    @UsePipes(ValidationPipe)
    createPet(@Body() petCreateDto: PetCreateDto): Promise<Pet> {
        return this.petService.createPet(petCreateDto);
    }

    @Put('/:pid')
    @UsePipes(ValidationPipe)
    updatePet(@Param('pid', new ParseUUIDPipe()) pid: string, @Body() petUpdateDto: PetUpdateDto): Promise<Pet> {
        petUpdateDto.pid = pid;
        return this.petService.updatePet(petUpdateDto);
    }

    @Get()
    getAllPets(): Promise<Pet[]> {
        return this.petService.getAllPets();
    }

    @Get('/:pid')
    findPet(@Param('pid', new ParseUUIDPipe()) id: string): Promise<Pet> {
        return this.petService.findPet(id);
    }

    @Delete(':pid')
    @HttpCode(204)
    async deletePet(@Param('pid', new ParseUUIDPipe()) pid: string): Promise<any>  {
        try {
            await this.petService.findPet(pid);
            return await this.petService.deletePet(pid);
        } catch (error) {
                return Promise.reject(error);
        }
    }
}
