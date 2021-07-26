import { gql } from 'graphql-request';

export class Vehicle {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    carMake: string;
    carModel: string;
    manufacturedDate: string;
    ageOfVehicle: number;
    vinNumber: string;
}

export const ALL_VEHICLES = gql`
query($first: Int) {
    getAllVehicles(first: $first) {
        id
        firstName
        lastName
        email
        carMake
        carModel
        manufacturedDate
        ageOfVehicle
        vinNumber
    }
}`;

export const VEHICLE_BY_ID = gql`
query($id: Int!) {
    getVehicleById(id: $id) {
      id
      firstName
      lastName
      email
      carMake
      carModel
      vinNumber
      manufacturedDate
      ageOfVehicle
    }
}`;

export const DELETE_VEHICLE = gql `
mutation($id: Int!){
    deleteVehicleById(id: $id){
      id
    }
  }`;

export const UPDATE_VEHICLE = gql`

mutation(
    $id: Int!
    $firstName: String
    $lastName: String
    $email: String
    ){
    updateVehicleById(vehicleUpdateInput : {id: $id, firstName: $firstName, lastName: $lastName, email: $email}) {
        id
        firstName
        lastName
        email
        carMake
        carModel
        vinNumber
        manufacturedDate
        ageOfVehicle
    }
  }`;

export const ALL_VEHICLES_PAGINATED = gql`
query($first: Int, $offset: Int) {
    getAllVehiclesPaginated(first: $first, offset: $offset) {
        nodes {
            id
            firstName
            lastName
            email
            carMake
            carModel
            manufacturedDate
            ageOfVehicle
            vinNumber
        }
        totalCount
    }
}`;
