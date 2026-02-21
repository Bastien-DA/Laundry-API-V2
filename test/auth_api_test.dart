import 'package:test/test.dart';
import 'package:laundry_api_sdk/laundry_api_sdk.dart';


/// tests for AuthApi
void main() {
  final instance = LaundryApiSdk().getAuthApi();

  group(AuthApi, () {
    //Future authControllerLoginV1(Object body) async
    test('test authControllerLoginV1', () async {
      // TODO
    });

    //Future authControllerMeV1() async
    test('test authControllerMeV1', () async {
      // TODO
    });

    //Future authControllerRegisterV1(Object body) async
    test('test authControllerRegisterV1', () async {
      // TODO
    });

  });
}
