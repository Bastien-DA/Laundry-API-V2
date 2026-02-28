# laundry_api_sdk.api.MachineApi

## Load the API package
```dart
import 'package:laundry_api_sdk/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**machineControllerAvailableV1**](MachineApi.md#machinecontrolleravailablev1) | **POST** /api/v1/machines/{id}/available | 
[**machineControllerCreateV1**](MachineApi.md#machinecontrollercreatev1) | **POST** /api/v1/machines | 
[**machineControllerEditV1**](MachineApi.md#machinecontrollereditv1) | **PATCH** /api/v1/machines/{id} | 
[**machineControllerGetByIdV1**](MachineApi.md#machinecontrollergetbyidv1) | **GET** /api/v1/machines/{id} | 
[**machineControllerListV1**](MachineApi.md#machinecontrollerlistv1) | **GET** /api/v1/machines | 
[**machineControllerOutOfOrderV1**](MachineApi.md#machinecontrolleroutoforderv1) | **POST** /api/v1/machines/{id}/out-of-order | 
[**machineControllerPauseV1**](MachineApi.md#machinecontrollerpausev1) | **POST** /api/v1/machines/{id}/pause | 
[**machineControllerRemoveV1**](MachineApi.md#machinecontrollerremovev1) | **DELETE** /api/v1/machines/{id} | 
[**machineControllerResumeV1**](MachineApi.md#machinecontrollerresumev1) | **POST** /api/v1/machines/{id}/resume | 
[**machineControllerStartV1**](MachineApi.md#machinecontrollerstartv1) | **POST** /api/v1/machines/{id}/start/{programId} | 
[**machineControllerStopV1**](MachineApi.md#machinecontrollerstopv1) | **POST** /api/v1/machines/{id}/stop | 


# **machineControllerAvailableV1**
> machineControllerAvailableV1(id)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getMachineApi();
final String id = id_example; // String | 

try {
    api.machineControllerAvailableV1(id);
} catch on DioException (e) {
    print('Exception when calling MachineApi->machineControllerAvailableV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machineControllerCreateV1**
> machineControllerCreateV1(createMachineDto)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getMachineApi();
final CreateMachineDto createMachineDto = ; // CreateMachineDto | 

try {
    api.machineControllerCreateV1(createMachineDto);
} catch on DioException (e) {
    print('Exception when calling MachineApi->machineControllerCreateV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createMachineDto** | [**CreateMachineDto**](CreateMachineDto.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machineControllerEditV1**
> machineControllerEditV1(id, editMachineDto)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getMachineApi();
final String id = id_example; // String | 
final EditMachineDto editMachineDto = ; // EditMachineDto | 

try {
    api.machineControllerEditV1(id, editMachineDto);
} catch on DioException (e) {
    print('Exception when calling MachineApi->machineControllerEditV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **editMachineDto** | [**EditMachineDto**](EditMachineDto.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machineControllerGetByIdV1**
> machineControllerGetByIdV1(id)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getMachineApi();
final String id = id_example; // String | 

try {
    api.machineControllerGetByIdV1(id);
} catch on DioException (e) {
    print('Exception when calling MachineApi->machineControllerGetByIdV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machineControllerListV1**
> machineControllerListV1(laundryId, personId, type, programId)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getMachineApi();
final String laundryId = laundryId_example; // String | 
final String personId = personId_example; // String | 
final String type = type_example; // String | 
final String programId = programId_example; // String | 

try {
    api.machineControllerListV1(laundryId, personId, type, programId);
} catch on DioException (e) {
    print('Exception when calling MachineApi->machineControllerListV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **laundryId** | **String**|  | [optional] 
 **personId** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **programId** | **String**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machineControllerOutOfOrderV1**
> machineControllerOutOfOrderV1(id)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getMachineApi();
final String id = id_example; // String | 

try {
    api.machineControllerOutOfOrderV1(id);
} catch on DioException (e) {
    print('Exception when calling MachineApi->machineControllerOutOfOrderV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machineControllerPauseV1**
> machineControllerPauseV1(id)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getMachineApi();
final String id = id_example; // String | 

try {
    api.machineControllerPauseV1(id);
} catch on DioException (e) {
    print('Exception when calling MachineApi->machineControllerPauseV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machineControllerRemoveV1**
> machineControllerRemoveV1(id)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getMachineApi();
final String id = id_example; // String | 

try {
    api.machineControllerRemoveV1(id);
} catch on DioException (e) {
    print('Exception when calling MachineApi->machineControllerRemoveV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machineControllerResumeV1**
> machineControllerResumeV1(id)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getMachineApi();
final String id = id_example; // String | 

try {
    api.machineControllerResumeV1(id);
} catch on DioException (e) {
    print('Exception when calling MachineApi->machineControllerResumeV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machineControllerStartV1**
> machineControllerStartV1(id, programId)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getMachineApi();
final String id = id_example; // String | 
final String programId = programId_example; // String | 

try {
    api.machineControllerStartV1(id, programId);
} catch on DioException (e) {
    print('Exception when calling MachineApi->machineControllerStartV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **programId** | **String**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machineControllerStopV1**
> machineControllerStopV1(id)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getMachineApi();
final String id = id_example; // String | 

try {
    api.machineControllerStopV1(id);
} catch on DioException (e) {
    print('Exception when calling MachineApi->machineControllerStopV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

