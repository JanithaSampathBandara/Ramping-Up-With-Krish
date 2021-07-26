import { Process, Processor } from '@nestjs/bull';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'bull';
// import csvParser from 'csv-parser';
import csv = require('csv-parser');
import * as fs from 'fs';
import { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-tag';
import { Vehicle } from 'src/entities/vehicle.entity';
import { Repository } from 'typeorm';
const endpoint = 'http://localhost:5000/graphql';

@Processor('file-upload-queue')
export class FileProcessor {

  constructor(@InjectRepository(Vehicle) private vehicleRepository: Repository<Vehicle>) {}

@Process('file-upload')
  async uploadHandler(job: Job<any>) { //(job: Job) { //Express.Multer.File
    console.log('jobb');
    console.log('jobb');
     console.log('job', job);
     console.log('path', job.data.file.path);
    //console.log('path', job.data.);
    const results = [];
    //console.log('dsssssssssssssssssssssssss', job);


    try {

    let path: string = job.data.file.path;
    path = path.replace('\\', '/');
    console.log('replcd', path);

    fs.createReadStream(job.data.file.path) //job.data.obj.path //job.data.file.path
        .on('error', error => {//check whether errors with filepath
            console.log('error', error);
            throw new Error(`error occured : ${error.message}`);
        })
        .pipe(csv())
        .on('data', async (data) => {
            console.log('data as chunks : ', data);


           try {
            const vehicle = new Vehicle();
            vehicle.id = data.id;
            vehicle.firstName = data.first_name;
            vehicle.lastName = data.last_name;
            vehicle.email = data.email;
            vehicle.carMake = data.car_make;
            vehicle.carModel = data.car_model;
            vehicle.vinNumber = data.vin_number;
            vehicle.manufacturedDate = data.manufactured_date;

            const createdVehicle = await this.vehicleRepository.save(vehicle);
            console.log('createdVehicle', createdVehicle);


            /*

            const graphQLClient = new GraphQLClient(endpoint)

            const query = gql`
            mutation($input:CreateVehicleInput!){
              createVehicle(input: $input){
                vehicle {
                  id
                  firstName
                  lastName
                  email
                  carMake
                  carModel
                  vinNumber
                  manufacturedDate
                }
              }
            }`;
            
            const variables = {

              input: {
                vehicle: {
                  firstName: chunk.first_name,
                  lastName: chunk.last_name,
                  email: chunk.email,
                  carMake: chunk.car_make,
                  carModel: chunk.car_model,
                  vinNumber: chunk.vin_number,
                  manufacturedDate: chunk.manufactured_date
                }
              }

            } 
            const data = await graphQLClient.request(query, variables) //const data = await graphQLClient.request(endpoint, query, variables)
            console.log(JSON.stringify(data, undefined, 2))
            return data;
            */

        } catch(error) {
            console.log('errr at processor while creating vehicle', error);
        }




         /*   this.vehicleService.createVehicle(
              chunk.first_name,
              chunk.last_name,
              chunk.email,
              chunk.car_make,
              chunk.car_model,
              chunk.vin_number,
              chunk.manufactured_date
              );  */
            // results.push(chunk);
        })
        .on('end', () => {
            console.log('end of he stream');
            // console.log('ress', results);
        });

    /*  let progress = 0;
    for (i = 0; i < 100; i++) {
      await doSomething(job.data);
      progress += 10;
      job.progress(progress);
    } */
    // return {};
    console.log('endddd');
    } catch(error) {
      console.log('eerrrrrr at processor', error);
    }
  }

}