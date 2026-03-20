import 'package:test/test.dart';
import 'package:laundry_api_sdk/laundry_api_sdk.dart';


/// tests for MachineApi
void main() {
  final instance = LaundryApiSdk().getMachineApi();

  group(MachineApi, () {
    // Mark machine as available (from OUT_OF_ORDER)
    //
    //Future machineControllerAvailableV1(String id) async
    test('test machineControllerAvailableV1', () async {
      // TODO
    });

    // Create a machine
    //
    //Future<MachineDto> machineControllerCreateV1(CreateMachineDto createMachineDto) async
    test('test machineControllerCreateV1', () async {
      // TODO
    });

    // Edit a machine
    //
    //Future<MachineDto> machineControllerEditV1(String id, EditMachineDto editMachineDto) async
    test('test machineControllerEditV1', () async {
      // TODO
    });

    // Get a machine by id
    //
    //Future<MachineDto> machineControllerGetByIdV1(String id) async
    test('test machineControllerGetByIdV1', () async {
      // TODO
    });

    // List machines (no pagination)
    //
    //Future<List<MachineDto>> machineControllerListV1({ String laundryId, String personId, String type, String programId }) async
    test('test machineControllerListV1', () async {
      // TODO
    });

    // Set machine as out of order
    //
    //Future machineControllerOutOfOrderV1(String id) async
    test('test machineControllerOutOfOrderV1', () async {
      // TODO
    });

    // Pause current program
    //
    //Future machineControllerPauseV1(String id) async
    test('test machineControllerPauseV1', () async {
      // TODO
    });

    // Delete a machine
    //
    //Future machineControllerRemoveV1(String id) async
    test('test machineControllerRemoveV1', () async {
      // TODO
    });

    // Resume paused program
    //
    //Future machineControllerResumeV1(String id) async
    test('test machineControllerResumeV1', () async {
      // TODO
    });

    // Start a program on a machine
    //
    //Future machineControllerStartV1(String id, String programId) async
    test('test machineControllerStartV1', () async {
      // TODO
    });

    // Stop program and mark machine as available
    //
    //Future machineControllerStopV1(String id) async
    test('test machineControllerStopV1', () async {
      // TODO
    });

  });
}
