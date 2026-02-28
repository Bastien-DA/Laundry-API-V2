# laundry_api_sdk.api.ProgramApi

## Load the API package
```dart
import 'package:laundry_api_sdk/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**programControllerCreateV1**](ProgramApi.md#programcontrollercreatev1) | **POST** /api/v1/programs | 
[**programControllerEditV1**](ProgramApi.md#programcontrollereditv1) | **PATCH** /api/v1/programs/{id} | 
[**programControllerGetByIdV1**](ProgramApi.md#programcontrollergetbyidv1) | **GET** /api/v1/programs/{id} | 
[**programControllerListV1**](ProgramApi.md#programcontrollerlistv1) | **GET** /api/v1/programs | 
[**programControllerRemoveV1**](ProgramApi.md#programcontrollerremovev1) | **DELETE** /api/v1/programs/{id} | 


# **programControllerCreateV1**
> programControllerCreateV1(createProgramDto)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getProgramApi();
final CreateProgramDto createProgramDto = ; // CreateProgramDto | 

try {
    api.programControllerCreateV1(createProgramDto);
} catch on DioException (e) {
    print('Exception when calling ProgramApi->programControllerCreateV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProgramDto** | [**CreateProgramDto**](CreateProgramDto.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **programControllerEditV1**
> programControllerEditV1(id, editProgramDto)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getProgramApi();
final String id = id_example; // String | 
final EditProgramDto editProgramDto = ; // EditProgramDto | 

try {
    api.programControllerEditV1(id, editProgramDto);
} catch on DioException (e) {
    print('Exception when calling ProgramApi->programControllerEditV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **editProgramDto** | [**EditProgramDto**](EditProgramDto.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **programControllerGetByIdV1**
> programControllerGetByIdV1(id)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getProgramApi();
final String id = id_example; // String | 

try {
    api.programControllerGetByIdV1(id);
} catch on DioException (e) {
    print('Exception when calling ProgramApi->programControllerGetByIdV1: $e\n');
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

# **programControllerListV1**
> programControllerListV1(nameContains, machineId)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getProgramApi();
final String nameContains = nameContains_example; // String | 
final String machineId = machineId_example; // String | 

try {
    api.programControllerListV1(nameContains, machineId);
} catch on DioException (e) {
    print('Exception when calling ProgramApi->programControllerListV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nameContains** | **String**|  | [optional] 
 **machineId** | **String**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **programControllerRemoveV1**
> programControllerRemoveV1(id)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getProgramApi();
final String id = id_example; // String | 

try {
    api.programControllerRemoveV1(id);
} catch on DioException (e) {
    print('Exception when calling ProgramApi->programControllerRemoveV1: $e\n');
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

