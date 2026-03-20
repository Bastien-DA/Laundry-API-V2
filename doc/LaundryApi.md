# laundry_api_sdk.api.LaundryApi

## Load the API package
```dart
import 'package:laundry_api_sdk/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**laundryControllerCreateV1**](LaundryApi.md#laundrycontrollercreatev1) | **POST** /api/v1/laundries | Create a laundry
[**laundryControllerEditV1**](LaundryApi.md#laundrycontrollereditv1) | **PATCH** /api/v1/laundries/{id} | Edit a laundry
[**laundryControllerGetByIdV1**](LaundryApi.md#laundrycontrollergetbyidv1) | **GET** /api/v1/laundries/{id} | Get a laundry by id
[**laundryControllerListV1**](LaundryApi.md#laundrycontrollerlistv1) | **GET** /api/v1/laundries | List laundries (no pagination)
[**laundryControllerRemoveV1**](LaundryApi.md#laundrycontrollerremovev1) | **DELETE** /api/v1/laundries/{id} | Delete a laundry


# **laundryControllerCreateV1**
> LaundryDto laundryControllerCreateV1(createLaundryDto)

Create a laundry

### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getLaundryApi();
final CreateLaundryDto createLaundryDto = ; // CreateLaundryDto | 

try {
    final response = api.laundryControllerCreateV1(createLaundryDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling LaundryApi->laundryControllerCreateV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createLaundryDto** | [**CreateLaundryDto**](CreateLaundryDto.md)|  | 

### Return type

[**LaundryDto**](LaundryDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **laundryControllerEditV1**
> LaundryDto laundryControllerEditV1(id, editLaundryDto)

Edit a laundry

### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getLaundryApi();
final String id = id_example; // String | 
final EditLaundryDto editLaundryDto = ; // EditLaundryDto | 

try {
    final response = api.laundryControllerEditV1(id, editLaundryDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling LaundryApi->laundryControllerEditV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **editLaundryDto** | [**EditLaundryDto**](EditLaundryDto.md)|  | 

### Return type

[**LaundryDto**](LaundryDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **laundryControllerGetByIdV1**
> LaundryDto laundryControllerGetByIdV1(id)

Get a laundry by id

### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getLaundryApi();
final String id = id_example; // String | 

try {
    final response = api.laundryControllerGetByIdV1(id);
    print(response);
} catch on DioException (e) {
    print('Exception when calling LaundryApi->laundryControllerGetByIdV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**LaundryDto**](LaundryDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **laundryControllerListV1**
> List<LaundryDto> laundryControllerListV1(nameContains, personId, machineId)

List laundries (no pagination)

### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getLaundryApi();
final String nameContains = nameContains_example; // String | 
final String personId = personId_example; // String | 
final String machineId = machineId_example; // String | 

try {
    final response = api.laundryControllerListV1(nameContains, personId, machineId);
    print(response);
} catch on DioException (e) {
    print('Exception when calling LaundryApi->laundryControllerListV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nameContains** | **String**|  | [optional] 
 **personId** | **String**|  | [optional] 
 **machineId** | **String**|  | [optional] 

### Return type

[**List&lt;LaundryDto&gt;**](LaundryDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **laundryControllerRemoveV1**
> laundryControllerRemoveV1(id)

Delete a laundry

### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getLaundryApi();
final String id = id_example; // String | 

try {
    api.laundryControllerRemoveV1(id);
} catch on DioException (e) {
    print('Exception when calling LaundryApi->laundryControllerRemoveV1: $e\n');
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

