## @laundry/api-sdk@1.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @laundry/api-sdk@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AuthApi* | [**authControllerLoginV1**](docs/AuthApi.md#authcontrollerloginv1) | **POST** /api/v1/auth/login | Login user and return JWT
*AuthApi* | [**authControllerMeV1**](docs/AuthApi.md#authcontrollermev1) | **GET** /api/v1/auth/me | Get current authenticated user
*AuthApi* | [**authControllerRegisterV1**](docs/AuthApi.md#authcontrollerregisterv1) | **POST** /api/v1/auth/register | Register a new user
*LaundryApi* | [**laundryControllerCreateV1**](docs/LaundryApi.md#laundrycontrollercreatev1) | **POST** /api/v1/laundries | Create a laundry
*LaundryApi* | [**laundryControllerEditV1**](docs/LaundryApi.md#laundrycontrollereditv1) | **PATCH** /api/v1/laundries/{id} | Edit a laundry
*LaundryApi* | [**laundryControllerGetByIdV1**](docs/LaundryApi.md#laundrycontrollergetbyidv1) | **GET** /api/v1/laundries/{id} | Get a laundry by id
*LaundryApi* | [**laundryControllerListV1**](docs/LaundryApi.md#laundrycontrollerlistv1) | **GET** /api/v1/laundries | List laundries (no pagination)
*LaundryApi* | [**laundryControllerRemoveV1**](docs/LaundryApi.md#laundrycontrollerremovev1) | **DELETE** /api/v1/laundries/{id} | Delete a laundry
*MachineApi* | [**machineControllerAvailableV1**](docs/MachineApi.md#machinecontrolleravailablev1) | **POST** /api/v1/machines/{id}/available | Mark machine as available (from OUT_OF_ORDER)
*MachineApi* | [**machineControllerCreateV1**](docs/MachineApi.md#machinecontrollercreatev1) | **POST** /api/v1/machines | Create a machine
*MachineApi* | [**machineControllerEditV1**](docs/MachineApi.md#machinecontrollereditv1) | **PATCH** /api/v1/machines/{id} | Edit a machine
*MachineApi* | [**machineControllerGetByIdV1**](docs/MachineApi.md#machinecontrollergetbyidv1) | **GET** /api/v1/machines/{id} | Get a machine by id
*MachineApi* | [**machineControllerListV1**](docs/MachineApi.md#machinecontrollerlistv1) | **GET** /api/v1/machines | List machines (no pagination)
*MachineApi* | [**machineControllerOutOfOrderV1**](docs/MachineApi.md#machinecontrolleroutoforderv1) | **POST** /api/v1/machines/{id}/out-of-order | Set machine as out of order
*MachineApi* | [**machineControllerPauseV1**](docs/MachineApi.md#machinecontrollerpausev1) | **POST** /api/v1/machines/{id}/pause | Pause current program
*MachineApi* | [**machineControllerRemoveV1**](docs/MachineApi.md#machinecontrollerremovev1) | **DELETE** /api/v1/machines/{id} | Delete a machine
*MachineApi* | [**machineControllerResumeV1**](docs/MachineApi.md#machinecontrollerresumev1) | **POST** /api/v1/machines/{id}/resume | Resume paused program
*MachineApi* | [**machineControllerStartV1**](docs/MachineApi.md#machinecontrollerstartv1) | **POST** /api/v1/machines/{id}/start/{programId} | Start a program on a machine
*MachineApi* | [**machineControllerStopV1**](docs/MachineApi.md#machinecontrollerstopv1) | **POST** /api/v1/machines/{id}/stop | Stop program and mark machine as available
*PersonApi* | [**personControllerCreateV1**](docs/PersonApi.md#personcontrollercreatev1) | **POST** /api/v1/persons | Create a person
*PersonApi* | [**personControllerEditV1**](docs/PersonApi.md#personcontrollereditv1) | **PATCH** /api/v1/persons/{id} | Edit a person
*PersonApi* | [**personControllerGetByIdV1**](docs/PersonApi.md#personcontrollergetbyidv1) | **GET** /api/v1/persons/{id} | Get a person by id
*PersonApi* | [**personControllerListV1**](docs/PersonApi.md#personcontrollerlistv1) | **GET** /api/v1/persons | List persons (no pagination)
*PersonApi* | [**personControllerRemoveV1**](docs/PersonApi.md#personcontrollerremovev1) | **DELETE** /api/v1/persons/{id} | Delete a person
*ProgramApi* | [**programControllerCreateV1**](docs/ProgramApi.md#programcontrollercreatev1) | **POST** /api/v1/programs | Create a program
*ProgramApi* | [**programControllerEditV1**](docs/ProgramApi.md#programcontrollereditv1) | **PATCH** /api/v1/programs/{id} | Edit a program
*ProgramApi* | [**programControllerGetByIdV1**](docs/ProgramApi.md#programcontrollergetbyidv1) | **GET** /api/v1/programs/{id} | Get a program by id
*ProgramApi* | [**programControllerListV1**](docs/ProgramApi.md#programcontrollerlistv1) | **GET** /api/v1/programs | List programs (no pagination)
*ProgramApi* | [**programControllerRemoveV1**](docs/ProgramApi.md#programcontrollerremovev1) | **DELETE** /api/v1/programs/{id} | Delete a program
*UserApi* | [**userControllerEditV1**](docs/UserApi.md#usercontrollereditv1) | **PATCH** /api/v1/users/{id} | Edit a user
*UserApi* | [**userControllerGetByIdV1**](docs/UserApi.md#usercontrollergetbyidv1) | **GET** /api/v1/users/{id} | Get a user by id
*UserApi* | [**userControllerListV1**](docs/UserApi.md#usercontrollerlistv1) | **GET** /api/v1/users | List users (no pagination)
*UserApi* | [**userControllerRemoveV1**](docs/UserApi.md#usercontrollerremovev1) | **DELETE** /api/v1/users/{id} | Delete a user


### Documentation For Models

 - [CreateLaundryDto](docs/CreateLaundryDto.md)
 - [CreateMachineDto](docs/CreateMachineDto.md)
 - [CreatePersonDto](docs/CreatePersonDto.md)
 - [CreateProgramDto](docs/CreateProgramDto.md)
 - [EditLaundryDto](docs/EditLaundryDto.md)
 - [EditMachineDto](docs/EditMachineDto.md)
 - [EditPersonDto](docs/EditPersonDto.md)
 - [EditProgramDto](docs/EditProgramDto.md)
 - [EditUserDto](docs/EditUserDto.md)
 - [LaundryDto](docs/LaundryDto.md)
 - [LoginDto](docs/LoginDto.md)
 - [MachineDto](docs/MachineDto.md)
 - [PersonDto](docs/PersonDto.md)
 - [ProgramDto](docs/ProgramDto.md)
 - [RegisterDto](docs/RegisterDto.md)
 - [UserDto](docs/UserDto.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="jwt"></a>
### jwt

- **Type**: Bearer authentication (JWT)

