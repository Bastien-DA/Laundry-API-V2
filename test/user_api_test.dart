import 'package:test/test.dart';
import 'package:laundry_api_sdk/laundry_api_sdk.dart';


/// tests for UserApi
void main() {
  final instance = LaundryApiSdk().getUserApi();

  group(UserApi, () {
    //Future userControllerEditV1(String id, EditUserDto editUserDto) async
    test('test userControllerEditV1', () async {
      // TODO
    });

    //Future userControllerGetByIdV1(String id) async
    test('test userControllerGetByIdV1', () async {
      // TODO
    });

    //Future userControllerListV1({ String emailContains, bool hasPerson, String personId }) async
    test('test userControllerListV1', () async {
      // TODO
    });

    //Future userControllerRemoveV1(String id) async
    test('test userControllerRemoveV1', () async {
      // TODO
    });

  });
}
