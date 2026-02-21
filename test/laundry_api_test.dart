import 'package:test/test.dart';
import 'package:laundry_api_sdk/laundry_api_sdk.dart';


/// tests for LaundryApi
void main() {
  final instance = LaundryApiSdk().getLaundryApi();

  group(LaundryApi, () {
    //Future laundryControllerCreateV1(Object body) async
    test('test laundryControllerCreateV1', () async {
      // TODO
    });

    //Future laundryControllerEditV1(String id, Object body) async
    test('test laundryControllerEditV1', () async {
      // TODO
    });

    //Future laundryControllerGetByIdV1(String id) async
    test('test laundryControllerGetByIdV1', () async {
      // TODO
    });

    //Future laundryControllerListV1() async
    test('test laundryControllerListV1', () async {
      // TODO
    });

    //Future laundryControllerRemoveV1(String id) async
    test('test laundryControllerRemoveV1', () async {
      // TODO
    });

  });
}
