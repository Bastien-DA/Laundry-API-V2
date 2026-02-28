import 'package:test/test.dart';
import 'package:laundry_api_sdk/laundry_api_sdk.dart';


/// tests for ProgramApi
void main() {
  final instance = LaundryApiSdk().getProgramApi();

  group(ProgramApi, () {
    //Future programControllerCreateV1(CreateProgramDto createProgramDto) async
    test('test programControllerCreateV1', () async {
      // TODO
    });

    //Future programControllerEditV1(String id, EditProgramDto editProgramDto) async
    test('test programControllerEditV1', () async {
      // TODO
    });

    //Future programControllerGetByIdV1(String id) async
    test('test programControllerGetByIdV1', () async {
      // TODO
    });

    //Future programControllerListV1({ String nameContains, String machineId }) async
    test('test programControllerListV1', () async {
      // TODO
    });

    //Future programControllerRemoveV1(String id) async
    test('test programControllerRemoveV1', () async {
      // TODO
    });

  });
}
