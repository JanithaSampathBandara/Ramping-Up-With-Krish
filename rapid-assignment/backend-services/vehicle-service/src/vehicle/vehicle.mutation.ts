import gql from "graphql-tag";

export const CREATE_VEHICLE = gql`
mutation(
	$firstName: String!
	$lastName: String!
	$email: String!
	$carMake: String!
	$carModel: String!
	$vinNumber: String!
	$manufacturedDate: String!
){
  createVehicle(
    input:{
    vehicle:{
		firstName: $firstName
		lastName: $lastName
		email: $email
		carMake: $carMake
		carModel: $carModel
		vinNumber: $vinNumber
		manufacturedDate: $manufacturedDate
      
        }
    }){
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

export const UPDATE_VEHICLE = gql`
mutation($input:UpdateVehicleByIdInput!){
  updateVehicleById(input:$input){
    vehicle{
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
  }}`;

  export const DELETE_VEHICLE = gql`
  mutation($id: Int!) {
    deleteVehicleById(input: { id: $id }) {
      vehicle {
        id
      }
    }
  }`;


  /*


mutation{
  updateVehicleById(vehicleUpdateInput : {id: 6245, firstName: "Janz", ageOfVehicle: 45}) {
      firstName
      lastName
  }
}


mutation{
  deleteVehicleById(id: 6259){
    id
  }
}


  */