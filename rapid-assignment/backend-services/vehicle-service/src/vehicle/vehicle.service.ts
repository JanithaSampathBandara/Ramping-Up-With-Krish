import { HttpService, Injectable } from '@nestjs/common';
import { CREATE_VEHICLE, DELETE_VEHICLE } from './vehicle.mutation';
import { UPDATE_VEHICLE } from './vehicle.mutation';
import { request, gql, GraphQLClient } from 'graphql-request'
// import { VehicleUpdateDto } from 'src/dto/input/update-vehicle.input';
import { All_VEHICLES, All_VEHICLES_PAGINATED, VEHICLE_BY_ID } from './vehicle.query';
import { VehicleCreateDto } from 'src/dto/input/create-vehicle.input';
import { VehicleUpdateDto } from './graphql';
const endpoint = 'http://localhost:5000/graphql';
// const bullServiceEndpoint = 'http://localhost:3001/file/upload';

@Injectable()
export class VehicleService {

    constructor(private httpService: HttpService) {}

    async createVehicle(firstName: string, lastName: string, email: string, carMake: string, carModel: string, vinNumber: string, manufacturedDate: string) {
        
        try {

            const graphQLClient = new GraphQLClient(endpoint/*, {
                headers: {
                   authorization: 'Bearer MY_TOKEN',
                },
              }*/)

            const query = CREATE_VEHICLE;
            const variables = {

                firstName: firstName,
                lastName: lastName,
                email: email,
                carMake: carMake,
                carModel: carModel,
                vinNumber: vinNumber,
                manufacturedDate: manufacturedDate
                

            /*    input: {
                    vehicle: {
                        firstName: vehicleCreateDto.firstName,
                        lastName: vehicleCreateDto.lastName,
                        email: vehicleCreateDto.email,
                        carMake: vehicleCreateDto.carMake,
                        carModel: vehicleCreateDto.carModel,
                        vinNumber: vehicleCreateDto.vinNumber,
                        manufacturedDate: vehicleCreateDto.manufacturedDate,
                        ageOfVehicle: vehicleCreateDto.ageOfVehicle
                    }
                } */
            }
    
            const data = await graphQLClient.request(query, variables) //const data = await graphQLClient.request(endpoint, query, variables)
            console.log(JSON.stringify(data, undefined, 2))
            return data;

        } catch(error) {
            console.log('errr at vehicle service', error);
        }

    }

    async updateVehicle(updateVehicleDto: VehicleUpdateDto) {

        try {

            const graphQLClient = new GraphQLClient(endpoint);
            const query = UPDATE_VEHICLE;
            const variables = {
                input: {
                    id: updateVehicleDto.id,
                    vehiclePatch: {
                        firstName: updateVehicleDto.firstName,
                        lastName: updateVehicleDto.lastName,
                        email: updateVehicleDto.email,
                    }
                }
            }
    
            const data = await graphQLClient.request(query, variables) //const data = await graphQLClient.request(endpoint, query, variables)
            console.log(JSON.stringify(data, undefined, 2))
            const vehicle = data.updateVehicleById.vehicle;
            return vehicle;


        } catch (error) {
            console.log('error while updating', error);
        }
    }

    async getVehicleById(id: number) {

        try {

            const graphQLClient = new GraphQLClient(endpoint);
            const query = VEHICLE_BY_ID;
            const variables = {
                id: id
            }
    
            const data = await graphQLClient.request(query, variables) //const data = await graphQLClient.request(endpoint, query, variables)
            console.log(JSON.stringify(data, undefined, 2));
            // return data;
            const vehicle = data.vehicleById;
            return vehicle;

        } catch (error) {
            console.log('errror while retrieving', error);
        }
    }

    async deleteVehicleById(id: number) {

        try {

            const graphQLClient = new GraphQLClient(endpoint);
            const query = DELETE_VEHICLE;
            const variables = {
                id: id
            }
    
            const data = await graphQLClient.request(query, variables) //const data = await graphQLClient.request(endpoint, query, variables)
            console.log(JSON.stringify(data, undefined, 2));
            return data.deleteVehicleById.vehicle;
            // const deletedVehicleId = data.vehicleById;
            // return vehicle;

        } catch (error) {
            console.log('error while deleting', error);
        }
    }

    async getAllVehicles(first: number) {
        
        try {

            const graphQLClient = new GraphQLClient(endpoint);
            const query = All_VEHICLES;
            const variables = {
                first: first
            }
    
            const data = await graphQLClient.request(query, variables) //const data = await graphQLClient.request(endpoint, query, variables)
            console.log(JSON.stringify(data, undefined, 2));
            return data.allVehicles.nodes;

        } catch(error) {
            console.log('error while retrieving all', error);
        }
    }

    async getAllVehiclesPaginated(first: number, offset: number) {

        try {

            const graphQLClient = new GraphQLClient(endpoint);
            const query = All_VEHICLES_PAGINATED;
            const variables = {
                first: first,
                offset: offset
            }
    
            const data = await graphQLClient.request(query, variables) //const data = await graphQLClient.request(endpoint, query, variables)
            console.log(JSON.stringify(data, undefined, 2));
            return data.allVehicles;

        } catch(error) {
            console.log('error while retrieving all paginated', error);
        }
    }

  /*  sendCsvToBullService(file: Express.Multer.File) {
        try {
            console.log('ser')
            this.httpService.post(bullServiceEndpoint, file);
        } catch(error) {
            console.log('errrr', error);
        }
         
    }

    test() {
        return this.httpService.get('http://localhost:3001/file');
    }

*/
}

