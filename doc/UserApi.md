# laundry_api_sdk.api.UserApi

## Load the API package
```dart
import 'package:laundry_api_sdk/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userControllerEditV1**](UserApi.md#usercontrollereditv1) | **PATCH** /api/v1/users/{id} | 
[**userControllerGetByIdV1**](UserApi.md#usercontrollergetbyidv1) | **GET** /api/v1/users/{id} | 
[**userControllerListV1**](UserApi.md#usercontrollerlistv1) | **GET** /api/v1/users | 
[**userControllerRemoveV1**](UserApi.md#usercontrollerremovev1) | **DELETE** /api/v1/users/{id} | 


# **userControllerEditV1**
> userControllerEditV1(id, editUserDto)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getUserApi();
final String id = id_example; // String | 
final EditUserDto editUserDto = ; // EditUserDto | 

try {
    api.userControllerEditV1(id, editUserDto);
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

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userControllerGetByIdV1**
> userControllerGetByIdV1(id)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getUserApi();
final String id = id_example; // String | 

try {
    api.userControllerGetByIdV1(id);
} catch on DioException (e) {
    print('Exception when calling UserApi->userControllerGetByIdV1: $e\n');
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

# **userControllerListV1**
> userControllerListV1(emailContains, hasPerson, personId)



### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getUserApi();
final String emailContains = emailContains_example; // String | 
final bool hasPerson = true; // bool | 
final String personId = personId_example; // String | 

try {
    api.userControllerListV1(emailContains, hasPerson, personId);
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

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userControllerRemoveV1**
> userControllerRemoveV1(id)



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

