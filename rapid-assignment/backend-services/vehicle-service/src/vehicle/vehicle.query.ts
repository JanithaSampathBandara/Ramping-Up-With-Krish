import gql from "graphql-tag"

export const VEHICLE_BY_ID = gql`
query($id: Int!) {
    vehicleById(id: $id) {
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

export const All_VEHICLES = gql`
query($first: Int) {
  allVehicles(first: $first) {
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
  }
}`;

export const All_VEHICLES_PAGINATED = gql`
query($first: Int, $offset: Int) {
  allVehicles(first: $first, offset: $offset) {
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

/*
query MyQuery2 {
    vehicleById(id: 6242) {
      firstName
      lastName
    }
  }
  */

  /*

  query{
  getVehicleById(id: 6243) {
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
}



query{
  getAllVehicles(first: 5){
    id
    firstName
    lastName
  }
}

  */