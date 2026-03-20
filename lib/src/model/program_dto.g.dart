// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'program_dto.dart';

// **************************************************************************
// CopyWithGenerator
// **************************************************************************

abstract class _$ProgramDtoCWProxy {
  ProgramDto id(String id);

  ProgramDto name(String name);

  ProgramDto temperature(num temperature);

  ProgramDto speed(num speed);

  ProgramDto duration(num duration);

  ProgramDto machineIds(List<String> machineIds);

  ProgramDto machineStatusIds(List<String> machineStatusIds);

  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `ProgramDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// ProgramDto(...).copyWith(id: 12, name: "My name")
  /// ````
  ProgramDto call({
    String id,
    String name,
    num temperature,
    num speed,
    num duration,
    List<String> machineIds,
    List<String> machineStatusIds,
  });
}

/// Proxy class for `copyWith` functionality. This is a callable class and can be used as follows: `instanceOfProgramDto.copyWith(...)`. Additionally contains functions for specific fields e.g. `instanceOfProgramDto.copyWith.fieldName(...)`
class _$ProgramDtoCWProxyImpl implements _$ProgramDtoCWProxy {
  const _$ProgramDtoCWProxyImpl(this._value);

  final ProgramDto _value;

  @override
  ProgramDto id(String id) => this(id: id);

  @override
  ProgramDto name(String name) => this(name: name);

  @override
  ProgramDto temperature(num temperature) => this(temperature: temperature);

  @override
  ProgramDto speed(num speed) => this(speed: speed);

  @override
  ProgramDto duration(num duration) => this(duration: duration);

  @override
  ProgramDto machineIds(List<String> machineIds) =>
      this(machineIds: machineIds);

  @override
  ProgramDto machineStatusIds(List<String> machineStatusIds) =>
      this(machineStatusIds: machineStatusIds);

  @override
  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `ProgramDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// ProgramDto(...).copyWith(id: 12, name: "My name")
  /// ````
  ProgramDto call({
    Object? id = const $CopyWithPlaceholder(),
    Object? name = const $CopyWithPlaceholder(),
    Object? temperature = const $CopyWithPlaceholder(),
    Object? speed = const $CopyWithPlaceholder(),
    Object? duration = const $CopyWithPlaceholder(),
    Object? machineIds = const $CopyWithPlaceholder(),
    Object? machineStatusIds = const $CopyWithPlaceholder(),
  }) {
    return ProgramDto(
      id: id == const $CopyWithPlaceholder()
          ? _value.id
          // ignore: cast_nullable_to_non_nullable
          : id as String,
      name: name == const $CopyWithPlaceholder()
          ? _value.name
          // ignore: cast_nullable_to_non_nullable
          : name as String,
      temperature: temperature == const $CopyWithPlaceholder()
          ? _value.temperature
          // ignore: cast_nullable_to_non_nullable
          : temperature as num,
      speed: speed == const $CopyWithPlaceholder()
          ? _value.speed
          // ignore: cast_nullable_to_non_nullable
          : speed as num,
      duration: duration == const $CopyWithPlaceholder()
          ? _value.duration
          // ignore: cast_nullable_to_non_nullable
          : duration as num,
      machineIds: machineIds == const $CopyWithPlaceholder()
          ? _value.machineIds
          // ignore: cast_nullable_to_non_nullable
          : machineIds as List<String>,
      machineStatusIds: machineStatusIds == const $CopyWithPlaceholder()
          ? _value.machineStatusIds
          // ignore: cast_nullable_to_non_nullable
          : machineStatusIds as List<String>,
    );
  }
}

extension $ProgramDtoCopyWith on ProgramDto {
  /// Returns a callable class that can be used as follows: `instanceOfProgramDto.copyWith(...)` or like so:`instanceOfProgramDto.copyWith.fieldName(...)`.
  // ignore: library_private_types_in_public_api
  _$ProgramDtoCWProxy get copyWith => _$ProgramDtoCWProxyImpl(this);
}

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

ProgramDto _$ProgramDtoFromJson(Map<String, dynamic> json) =>
    $checkedCreate('ProgramDto', json, ($checkedConvert) {
      $checkKeys(
        json,
        requiredKeys: const [
          'id',
          'name',
          'temperature',
          'speed',
          'duration',
          'machineIds',
          'machineStatusIds',
        ],
      );
      final val = ProgramDto(
        id: $checkedConvert('id', (v) => v as String),
        name: $checkedConvert('name', (v) => v as String),
        temperature: $checkedConvert('temperature', (v) => v as num),
        speed: $checkedConvert('speed', (v) => v as num),
        duration: $checkedConvert('duration', (v) => v as num),
        machineIds: $checkedConvert(
          'machineIds',
          (v) => (v as List<dynamic>).map((e) => e as String).toList(),
        ),
        machineStatusIds: $checkedConvert(
          'machineStatusIds',
          (v) => (v as List<dynamic>).map((e) => e as String).toList(),
        ),
      );
      return val;
    });

Map<String, dynamic> _$ProgramDtoToJson(ProgramDto instance) =>
    <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'temperature': instance.temperature,
      'speed': instance.speed,
      'duration': instance.duration,
      'machineIds': instance.machineIds,
      'machineStatusIds': instance.machineStatusIds,
    };
