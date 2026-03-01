import 'package:test/test.dart';
import 'package:laundry_api_sdk/laundry_api_sdk.dart';


/// tests for PersonApi
void main() {
  final instance = LaundryApiSdk().getPersonApi();

  group(PersonApi, () {
    // Create a person
    //
    //Future<PersonDto> personControllerCreateV1(CreatePersonDto createPersonDto) async
    test('test personControllerCreateV1', () async {
      // TODO
    });

    // Edit a person
    //
    //Future<PersonDto> personControllerEditV1(String id, EditPersonDto editPersonDto) async
    test('test personControllerEditV1', () async {
      // TODO
    });

    // Get a person by id
    //
    //Future<PersonDto> personControllerGetByIdV1(String id) async
    test('test personControllerGetByIdV1', () async {
      // TODO
    });

    // List persons (no pagination)
    //
    //Future<List<PersonDto>> personControllerListV1({ String usernameContains, String personType, String laundryId, String machineId, bool hasUser, String userId }) async
    test('test personControllerListV1', () async {
      // TODO
    });

    // Delete a person
    //
    //Future personControllerRemoveV1(String id) async
    test('test personControllerRemoveV1', () async {
      // TODO
    });

  });
}
