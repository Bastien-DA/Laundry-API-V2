import 'package:test/test.dart';
import 'package:laundry_api_sdk/laundry_api_sdk.dart';


/// tests for UserApi
void main() {
  final instance = LaundryApiSdk().getUserApi();

  group(UserApi, () {
    // Edit a user
    //
    //Future<UserDto> userControllerEditV1(String id, EditUserDto editUserDto) async
    test('test userControllerEditV1', () async {
      // TODO
    });

    // Get a user by id
    //
    //Future<UserDto> userControllerGetByIdV1(String id) async
    test('test userControllerGetByIdV1', () async {
      // TODO
    });

    // List users (no pagination)
    //
    //Future<List<UserDto>> userControllerListV1({ String emailContains, bool hasPerson, String personId }) async
    test('test userControllerListV1', () async {
      // TODO
    });

    // Delete a user
    //
    //Future userControllerRemoveV1(String id) async
    test('test userControllerRemoveV1', () async {
      // TODO
    });

  });
}
