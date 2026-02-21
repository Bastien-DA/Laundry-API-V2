# laundry_api_sdk.api.PersonApi

## Load the API package
```dart
import 'package:laundry_api_sdk/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**personControllerCreateV1**](PersonApi.md#personcontrollercreatev1) | **POST** /api/v1/persons | 
[**personControllerEditV1**](PersonApi.md#personcontrollereditv1) | **PATCH** /api/v1/persons/{id} | 
[**personControllerGetByIdV1**](PersonApi.md#personcontrollergetbyidv1) | **GET** /api/v1/persons/{id} | 
[**personControllerListV1**](PersonApi.md#personcontrollerlistv1) | **GET** /api/v1/persons | 
[**personControllerRemoveV1**](PersonApi.md#personcontrollerremovev1) | **DELETE** /api/v1/persons/{id} | 


# **personControllerCreateV1**
> personControllerCreateV1(body)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getPersonApi();
final Object body = Object; // Object | 

try {
    api.personControllerCreateV1(body);
} catch on DioException (e) {
    print('Exception when calling PersonApi->personControllerCreateV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **personControllerEditV1**
> personControllerEditV1(id, body)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getPersonApi();
final String id = id_example; // String | 
final Object body = Object; // Object | 

try {
    api.personControllerEditV1(id, body);
} catch on DioException (e) {
    print('Exception when calling PersonApi->personControllerEditV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | **Object**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **personControllerGetByIdV1**
> personControllerGetByIdV1(id)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getPersonApi();
final String id = id_example; // String | 

try {
    api.personControllerGetByIdV1(id);
} catch on DioException (e) {
    print('Exception when calling PersonApi->personControllerGetByIdV1: $e\n');
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

# **personControllerListV1**
> personControllerListV1()



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getPersonApi();

try {
    api.personControllerListV1();
} catch on DioException (e) {
    print('Exception when calling PersonApi->personControllerListV1: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **personControllerRemoveV1**
> personControllerRemoveV1(id)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getPersonApi();
final String id = id_example; // String | 

try {
    api.personControllerRemoveV1(id);
} catch on DioException (e) {
    print('Exception when calling PersonApi->personControllerRemoveV1: $e\n');
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

