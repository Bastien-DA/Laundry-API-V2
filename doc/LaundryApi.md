# laundry_api_sdk.api.LaundryApi

## Load the API package
```dart
import 'package:laundry_api_sdk/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**laundryControllerCreateV1**](LaundryApi.md#laundrycontrollercreatev1) | **POST** /api/v1/laundries | 
[**laundryControllerEditV1**](LaundryApi.md#laundrycontrollereditv1) | **PATCH** /api/v1/laundries/{id} | 
[**laundryControllerGetByIdV1**](LaundryApi.md#laundrycontrollergetbyidv1) | **GET** /api/v1/laundries/{id} | 
[**laundryControllerListV1**](LaundryApi.md#laundrycontrollerlistv1) | **GET** /api/v1/laundries | 
[**laundryControllerRemoveV1**](LaundryApi.md#laundrycontrollerremovev1) | **DELETE** /api/v1/laundries/{id} | 


# **laundryControllerCreateV1**
> laundryControllerCreateV1(body)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getLaundryApi();
final Object body = Object; // Object | 

try {
    api.laundryControllerCreateV1(body);
} catch on DioException (e) {
    print('Exception when calling LaundryApi->laundryControllerCreateV1: $e\n');
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

# **laundryControllerEditV1**
> laundryControllerEditV1(id, body)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getLaundryApi();
final String id = id_example; // String | 
final Object body = Object; // Object | 

try {
    api.laundryControllerEditV1(id, body);
} catch on DioException (e) {
    print('Exception when calling LaundryApi->laundryControllerEditV1: $e\n');
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

# **laundryControllerGetByIdV1**
> laundryControllerGetByIdV1(id)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getLaundryApi();
final String id = id_example; // String | 

try {
    api.laundryControllerGetByIdV1(id);
} catch on DioException (e) {
    print('Exception when calling LaundryApi->laundryControllerGetByIdV1: $e\n');
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

# **laundryControllerListV1**
> laundryControllerListV1()



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getLaundryApi();

try {
    api.laundryControllerListV1();
} catch on DioException (e) {
    print('Exception when calling LaundryApi->laundryControllerListV1: $e\n');
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

# **laundryControllerRemoveV1**
> laundryControllerRemoveV1(id)



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

