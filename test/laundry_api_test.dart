import 'package:test/test.dart';
import 'package:laundry_api_sdk/laundry_api_sdk.dart';


/// tests for LaundryApi
void main() {
  final instance = LaundryApiSdk().getLaundryApi();

  group(LaundryApi, () {
    // Create a laundry
    //
    //Future<LaundryDto> laundryControllerCreateV1(CreateLaundryDto createLaundryDto) async
    test('test laundryControllerCreateV1', () async {
      // TODO
    });

    // Edit a laundry
    //
    //Future<LaundryDto> laundryControllerEditV1(String id, EditLaundryDto editLaundryDto) async
    test('test laundryControllerEditV1', () async {
      // TODO
    });

    // Get a laundry by id
    //
    //Future<LaundryDto> laundryControllerGetByIdV1(String id) async
    test('test laundryControllerGetByIdV1', () async {
      // TODO
    });

    // List laundries (no pagination)
    //
    //Future<List<LaundryDto>> laundryControllerListV1({ String nameContains, String personId, String machineId }) async
    test('test laundryControllerListV1', () async {
      // TODO
    });

    // Delete a laundry
    //
    //Future laundryControllerRemoveV1(String id) async
    test('test laundryControllerRemoveV1', () async {
      // TODO
    });

  });
}
