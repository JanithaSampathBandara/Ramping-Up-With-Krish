import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ALL_VEHICLES, ALL_VEHICLES_PAGINATED, DELETE_VEHICLE, UPDATE_VEHICLE, Vehicle, VEHICLE_BY_ID } from '../models/vehicle.model';
import request, { GraphQLClient } from 'graphql-request';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseUrl = 'http://localhost:3000/graphql';

  constructor() { }

  async getAllVehicles(): Promise<Vehicle[]> {

    try {

      const graphQLClient = new GraphQLClient(this.baseUrl);

      const query = ALL_VEHICLES;
      const variables = {
          first: 10
      };

      const data = await graphQLClient.request(query, variables);
      // console.log(JSON.stringify(data, undefined, 2));
      return data.getAllVehicles;

    } catch (error) {
        console.log('errr at vehicle service getAllVehicles', error);
      }

  }

  async deleteVehicle(num: number): Promise<any> {

    try {
      const graphQLClient = new GraphQLClient(this.baseUrl);

      const query = DELETE_VEHICLE;
      const variables = {
          id: num
      };

      const data = await graphQLClient.request(query, variables);
      // console.log(JSON.stringify(data, undefined, 2));
      return data.deleteVehicleById.id;

    } catch (error) {
        console.log('errr at vehicle service deleteVehicle', error);
      }

  }

  async findVehicle(num: number): Promise<Vehicle> {

    try {
      const graphQLClient = new GraphQLClient(this.baseUrl);

      const query = VEHICLE_BY_ID;
      const variables = {
          id: num
      };

      const data = await graphQLClient.request(query, variables);
      // console.log(JSON.stringify(data, undefined, 2));
      return data.getVehicleById;

    } catch (error) {
        console.log('errr at vehicle service getbyid', error);
      }

  }

  async updateVehicle(vid: number, fName: string, lName: string, eMail: string): Promise<Vehicle> {

    try {
      const graphQLClient = new GraphQLClient(this.baseUrl);

      const query = UPDATE_VEHICLE;
      const variables = {
          id: vid,
          firstName: fName,
          lastName: lName,
          email: eMail
      };

      const data = await graphQLClient.request(query, variables);
      // console.log(JSON.stringify(data, undefined, 2));
      return data.updateVehicleById;

    } catch (error) {
        console.log('errr at vehicle service updateVehicle', error);
      }

  }

  async getAllVehiclesPaginated(pageSize: number, offsett: number): Promise<any> {

    try {
      const graphQLClient = new GraphQLClient(this.baseUrl);

      const query = ALL_VEHICLES_PAGINATED;
      const variables = {
          first: pageSize,
          offset: offsett
      };

      const data = await graphQLClient.request(query, variables);
      // console.log(JSON.stringify(data, undefined, 2));
      return data;

    } catch (error) {
        console.log('errr at vehicle service get all paginated', error);
      }
  }

}
