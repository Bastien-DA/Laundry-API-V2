# laundry_api_sdk.model.MachineDto

## Load the model package
```dart
import 'package:laundry_api_sdk/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the machine | 
**name** | **String** | Display name of the machine | 
**type** | **String** | Type of machine | 
**price** | **String** | Price stored as string (Decimal) | 
**laundryId** | **String** | Laundry owning this machine | 
**personId** | **Object** | Assigned technician (0..1) | 
**machineStatusId** | **Object** | MachineStatus id (1–1 optional) | 
**status** | **String** | Current machine status | 
**currentProgramId** | **Object** | Current running program (if any) | 
**programIds** | **List&lt;String&gt;** | Compatible programs | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


