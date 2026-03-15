# laundry_api_sdk.api.AuthApi

## Load the API package
```dart
import 'package:laundry_api_sdk/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authControllerLoginV1**](AuthApi.md#authcontrollerloginv1) | **POST** /api/v1/auth/login | Login user and return JWT
[**authControllerMeV1**](AuthApi.md#authcontrollermev1) | **GET** /api/v1/auth/me | Get current authenticated user
[**authControllerRegisterV1**](AuthApi.md#authcontrollerregisterv1) | **POST** /api/v1/auth/register | Register a new user


# **authControllerLoginV1**
> Object authControllerLoginV1(loginDto)

Login user and return JWT

### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getAuthApi();
final LoginDto loginDto = ; // LoginDto | 

try {
    final response = api.authControllerLoginV1(loginDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling AuthApi->authControllerLoginV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginDto** | [**LoginDto**](LoginDto.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authControllerMeV1**
> Object authControllerMeV1()

Get current authenticated user

### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getAuthApi();

try {
    final response = api.authControllerMeV1();
    print(response);
} catch on DioException (e) {
    print('Exception when calling AuthApi->authControllerMeV1: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authControllerRegisterV1**
> Object authControllerRegisterV1(registerDto)

Register a new user

### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getAuthApi();
final RegisterDto registerDto = ; // RegisterDto | 

try {
    final response = api.authControllerRegisterV1(registerDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling AuthApi->authControllerRegisterV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registerDto** | [**RegisterDto**](RegisterDto.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

