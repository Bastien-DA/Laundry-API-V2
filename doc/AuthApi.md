# laundry_api_sdk.api.AuthApi

## Load the API package
```dart
import 'package:laundry_api_sdk/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authControllerLoginV1**](AuthApi.md#authcontrollerloginv1) | **POST** /api/v1/auth/login | 
[**authControllerMeV1**](AuthApi.md#authcontrollermev1) | **GET** /api/v1/auth/me | 
[**authControllerRegisterV1**](AuthApi.md#authcontrollerregisterv1) | **POST** /api/v1/auth/register | 


# **authControllerLoginV1**
> authControllerLoginV1(body)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getAuthApi();
final Object body = Object; // Object | 

try {
    api.authControllerLoginV1(body);
} catch on DioException (e) {
    print('Exception when calling AuthApi->authControllerLoginV1: $e\n');
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

# **authControllerMeV1**
> authControllerMeV1()



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getAuthApi();

try {
    api.authControllerMeV1();
} catch on DioException (e) {
    print('Exception when calling AuthApi->authControllerMeV1: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authControllerRegisterV1**
> authControllerRegisterV1(body)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getAuthApi();
final Object body = Object; // Object | 

try {
    api.authControllerRegisterV1(body);
} catch on DioException (e) {
    print('Exception when calling AuthApi->authControllerRegisterV1: $e\n');
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

