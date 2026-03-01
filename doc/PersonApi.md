# laundry_api_sdk.api.PersonApi

## Load the API package
```dart
import 'package:laundry_api_sdk/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**personControllerCreateV1**](PersonApi.md#personcontrollercreatev1) | **POST** /api/v1/persons | Create a person
[**personControllerEditV1**](PersonApi.md#personcontrollereditv1) | **PATCH** /api/v1/persons/{id} | Edit a person
[**personControllerGetByIdV1**](PersonApi.md#personcontrollergetbyidv1) | **GET** /api/v1/persons/{id} | Get a person by id
[**personControllerListV1**](PersonApi.md#personcontrollerlistv1) | **GET** /api/v1/persons | List persons (no pagination)
[**personControllerRemoveV1**](PersonApi.md#personcontrollerremovev1) | **DELETE** /api/v1/persons/{id} | Delete a person


# **personControllerCreateV1**
> PersonDto personControllerCreateV1(createPersonDto)

Create a person

### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getPersonApi();
final CreatePersonDto createPersonDto = ; // CreatePersonDto | 

try {
    final response = api.personControllerCreateV1(createPersonDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling PersonApi->personControllerCreateV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPersonDto** | [**CreatePersonDto**](CreatePersonDto.md)|  | 

### Return type

[**PersonDto**](PersonDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **personControllerEditV1**
> PersonDto personControllerEditV1(id, editPersonDto)

Edit a person

### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getPersonApi();
final String id = id_example; // String | 
final EditPersonDto editPersonDto = ; // EditPersonDto | 

try {
    final response = api.personControllerEditV1(id, editPersonDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling PersonApi->personControllerEditV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **editPersonDto** | [**EditPersonDto**](EditPersonDto.md)|  | 

### Return type

[**PersonDto**](PersonDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **personControllerGetByIdV1**
> PersonDto personControllerGetByIdV1(id)

Get a person by id

### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getPersonApi();
final String id = id_example; // String | 

try {
    final response = api.personControllerGetByIdV1(id);
    print(response);
} catch on DioException (e) {
    print('Exception when calling PersonApi->personControllerGetByIdV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**PersonDto**](PersonDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **personControllerListV1**
> List<PersonDto> personControllerListV1(usernameContains, personType, laundryId, machineId, hasUser, userId)

List persons (no pagination)

### Example
```dart
import 'package:laundry_api_sdk/api.dart';

final api = LaundryApiSdk().getPersonApi();
final String usernameContains = usernameContains_example; // String | 
final String personType = personType_example; // String | 
final String laundryId = laundryId_example; // String | 
final String machineId = machineId_example; // String | 
final bool hasUser = true; // bool | 
final String userId = userId_example; // String | 

try {
    final response = api.personControllerListV1(usernameContains, personType, laundryId, machineId, hasUser, userId);
    print(response);
} catch on DioException (e) {
    print('Exception when calling PersonApi->personControllerListV1: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usernameContains** | **String**|  | [optional] 
 **personType** | **String**|  | [optional] 
 **laundryId** | **String**|  | [optional] 
 **machineId** | **String**|  | [optional] 
 **hasUser** | **bool**|  | [optional] 
 **userId** | **String**|  | [optional] 

### Return type

[**List&lt;PersonDto&gt;**](PersonDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **personControllerRemoveV1**
> personControllerRemoveV1(id)

Delete a person

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

