# laundry_api_sdk.api.UserApi

## Load the API package
```dart
import 'package:laundry_api_sdk/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userControllerEditV1**](UserApi.md#usercontrollereditv1) | **PATCH** /api/v1/users/{id} | Edit a user
[**userControllerGetByIdV1**](UserApi.md#usercontrollergetbyidv1) | **GET** /api/v1/users/{id} | Get a user by id
[**userControllerListV1**](UserApi.md#usercontrollerlistv1) | **GET** /api/v1/users | List users (no pagination)
[**userControllerRemoveV1**](UserApi.md#usercontrollerremovev1) | **DELETE** /api/v1/users/{id} | Delete a user


# **userControllerEditV1**
> UserDto userControllerEditV1(id, editUserDto)

Edit a user

### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getUserApi();
final String id = id_example; // String | 
final EditUserDto editUserDto = ; // EditUserDto | 

try {
    final response = api.userControllerEditV1(id, editUserDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling UserApi->userControllerEditV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **editUserDto** | [**EditUserDto**](EditUserDto.md)|  | 

### Return type

[**UserDto**](UserDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userControllerGetByIdV1**
> UserDto userControllerGetByIdV1(id)

Get a user by id

### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getUserApi();
final String id = id_example; // String | 

try {
    final response = api.userControllerGetByIdV1(id);
    print(response);
} catch on DioException (e) {
    print('Exception when calling UserApi->userControllerGetByIdV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**UserDto**](UserDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userControllerListV1**
> List<UserDto> userControllerListV1(emailContains, hasPerson, personId)

List users (no pagination)

### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getUserApi();
final String emailContains = emailContains_example; // String | 
final bool hasPerson = true; // bool | 
final String personId = personId_example; // String | 

try {
    final response = api.userControllerListV1(emailContains, hasPerson, personId);
    print(response);
} catch on DioException (e) {
    print('Exception when calling UserApi->userControllerListV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailContains** | **String**|  | [optional] 
 **hasPerson** | **bool**|  | [optional] 
 **personId** | **String**|  | [optional] 

### Return type

[**List&lt;UserDto&gt;**](UserDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userControllerRemoveV1**
> userControllerRemoveV1(id)

Delete a user

### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getUserApi();
final String id = id_example; // String | 

try {
    api.userControllerRemoveV1(id);
} catch on DioException (e) {
    print('Exception when calling UserApi->userControllerRemoveV1: $e\n');
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

