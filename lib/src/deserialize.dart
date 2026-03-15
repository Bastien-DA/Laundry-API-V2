import 'package:laundry_api_sdk/src/model/create_laundry_dto.dart';
import 'package:laundry_api_sdk/src/model/create_machine_dto.dart';
import 'package:laundry_api_sdk/src/model/create_person_dto.dart';
import 'package:laundry_api_sdk/src/model/create_program_dto.dart';
import 'package:laundry_api_sdk/src/model/edit_laundry_dto.dart';
import 'package:laundry_api_sdk/src/model/edit_machine_dto.dart';
import 'package:laundry_api_sdk/src/model/edit_person_dto.dart';
import 'package:laundry_api_sdk/src/model/edit_program_dto.dart';
import 'package:laundry_api_sdk/src/model/edit_user_dto.dart';
import 'package:laundry_api_sdk/src/model/laundry_dto.dart';
import 'package:laundry_api_sdk/src/model/login_dto.dart';
import 'package:laundry_api_sdk/src/model/machine_dto.dart';
import 'package:laundry_api_sdk/src/model/person_dto.dart';
import 'package:laundry_api_sdk/src/model/program_dto.dart';
import 'package:laundry_api_sdk/src/model/register_dto.dart';
import 'package:laundry_api_sdk/src/model/user_dto.dart';

final _regList = RegExp(r'^List<(.*)>$');
final _regSet = RegExp(r'^Set<(.*)>$');
final _regMap = RegExp(r'^Map<String,(.*)>$');

  ReturnType deserialize<ReturnType, BaseType>(dynamic value, String targetType, {bool growable= true}) {
      switch (targetType) {
        case 'String':
          return '$value' as ReturnType;
        case 'int':
          return (value is int ? value : int.parse('$value')) as ReturnType;
        case 'bool':
          if (value is bool) {
            return value as ReturnType;
          }
          final valueString = '$value'.toLowerCase();
          return (valueString == 'true' || valueString == '1') as ReturnType;
        case 'double':
          return (value is double ? value : double.parse('$value')) as ReturnType;
        case 'CreateLaundryDto':
          return CreateLaundryDto.fromJson(value as Map<String, dynamic>) as ReturnType;
        case 'CreateMachineDto':
          return CreateMachineDto.fromJson(value as Map<String, dynamic>) as ReturnType;
        case 'CreatePersonDto':
          return CreatePersonDto.fromJson(value as Map<String, dynamic>) as ReturnType;
        case 'CreateProgramDto':
          return CreateProgramDto.fromJson(value as Map<String, dynamic>) as ReturnType;
        case 'EditLaundryDto':
          return EditLaundryDto.fromJson(value as Map<String, dynamic>) as ReturnType;
        case 'EditMachineDto':
          return EditMachineDto.fromJson(value as Map<String, dynamic>) as ReturnType;
        case 'EditPersonDto':
          return EditPersonDto.fromJson(value as Map<String, dynamic>) as ReturnType;
        case 'EditProgramDto':
          return EditProgramDto.fromJson(value as Map<String, dynamic>) as ReturnType;
        case 'EditUserDto':
          return EditUserDto.fromJson(value as Map<String, dynamic>) as ReturnType;
        case 'LaundryDto':
          return LaundryDto.fromJson(value as Map<String, dynamic>) as ReturnType;
        case 'LoginDto':
          return LoginDto.fromJson(value as Map<String, dynamic>) as ReturnType;
        case 'MachineDto':
          return MachineDto.fromJson(value as Map<String, dynamic>) as ReturnType;
        case 'PersonDto':
          return PersonDto.fromJson(value as Map<String, dynamic>) as ReturnType;
        case 'ProgramDto':
          return ProgramDto.fromJson(value as Map<String, dynamic>) as ReturnType;
        case 'RegisterDto':
          return RegisterDto.fromJson(value as Map<String, dynamic>) as ReturnType;
        case 'UserDto':
          return UserDto.fromJson(value as Map<String, dynamic>) as ReturnType;
        default:
          RegExpMatch? match;

          if (value is List && (match = _regList.firstMatch(targetType)) != null) {
            targetType = match![1]!; // ignore: parameter_assignments
            return value
              .map<BaseType>((dynamic v) => deserialize<BaseType, BaseType>(v, targetType, growable: growable))
              .toList(growable: growable) as ReturnType;
          }
          if (value is Set && (match = _regSet.firstMatch(targetType)) != null) {
            targetType = match![1]!; // ignore: parameter_assignments
            return value
              .map<BaseType>((dynamic v) => deserialize<BaseType, BaseType>(v, targetType, growable: growable))
              .toSet() as ReturnType;
          }
          if (value is Map && (match = _regMap.firstMatch(targetType)) != null) {
            targetType = match![1]!.trim(); // ignore: parameter_assignments
            return Map<String, BaseType>.fromIterables(
              value.keys as Iterable<String>,
              value.values.map((dynamic v) => deserialize<BaseType, BaseType>(v, targetType, growable: growable)),
            ) as ReturnType;
          }
          break;
    }
    throw Exception('Cannot deserialize');
  }