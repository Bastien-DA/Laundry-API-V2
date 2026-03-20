// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'create_program_dto.dart';

// **************************************************************************
// CopyWithGenerator
// **************************************************************************

abstract class _$CreateProgramDtoCWProxy {
  CreateProgramDto name(String name);

  CreateProgramDto temperature(num temperature);

  CreateProgramDto speed(num speed);

  CreateProgramDto duration(num duration);

  CreateProgramDto machineIds(List<String>? machineIds);

  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `CreateProgramDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// CreateProgramDto(...).copyWith(id: 12, name: "My name")
  /// ````
  CreateProgramDto call({
    String name,
    num temperature,
    num speed,
    num duration,
    List<String>? machineIds,
  });
}

/// Proxy class for `copyWith` functionality. This is a callable class and can be used as follows: `instanceOfCreateProgramDto.copyWith(...)`. Additionally contains functions for specific fields e.g. `instanceOfCreateProgramDto.copyWith.fieldName(...)`
class _$CreateProgramDtoCWProxyImpl implements _$CreateProgramDtoCWProxy {
  const _$CreateProgramDtoCWProxyImpl(this._value);

  final CreateProgramDto _value;

  @override
  CreateProgramDto name(String name) => this(name: name);

  @override
  CreateProgramDto temperature(num temperature) =>
      this(temperature: temperature);

  @override
  CreateProgramDto speed(num speed) => this(speed: speed);

  @override
  CreateProgramDto duration(num duration) => this(duration: duration);

  @override
  CreateProgramDto machineIds(List<String>? machineIds) =>
      this(machineIds: machineIds);

  @override
  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `CreateProgramDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// CreateProgramDto(...).copyWith(id: 12, name: "My name")
  /// ````
  CreateProgramDto call({
    Object? name = const $CopyWithPlaceholder(),
    Object? temperature = const $CopyWithPlaceholder(),
    Object? speed = const $CopyWithPlaceholder(),
    Object? duration = const $CopyWithPlaceholder(),
    Object? machineIds = const $CopyWithPlaceholder(),
  }) {
    return CreateProgramDto(
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
          : machineIds as List<String>?,
    );
  }
}

extension $CreateProgramDtoCopyWith on CreateProgramDto {
  /// Returns a callable class that can be used as follows: `instanceOfCreateProgramDto.copyWith(...)` or like so:`instanceOfCreateProgramDto.copyWith.fieldName(...)`.
  // ignore: library_private_types_in_public_api
  _$CreateProgramDtoCWProxy get copyWith => _$CreateProgramDtoCWProxyImpl(this);
}

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

CreateProgramDto _$CreateProgramDtoFromJson(Map<String, dynamic> json) =>
    $checkedCreate('CreateProgramDto', json, ($checkedConvert) {
      $checkKeys(
        json,
        requiredKeys: const ['name', 'temperature', 'speed', 'duration'],
      );
      final val = CreateProgramDto(
        name: $checkedConvert('name', (v) => v as String),
        temperature: $checkedConvert('temperature', (v) => v as num),
        speed: $checkedConvert('speed', (v) => v as num),
        duration: $checkedConvert('duration', (v) => v as num),
        machineIds: $checkedConvert(
          'machineIds',
          (v) => (v as List<dynamic>?)?.map((e) => e as String).toList(),
        ),
      );
      return val;
    });

Map<String, dynamic> _$CreateProgramDtoToJson(CreateProgramDto instance) =>
    <String, dynamic>{
      'name': instance.name,
      'temperature': instance.temperature,
      'speed': instance.speed,
      'duration': instance.duration,
      'machineIds': ?instance.machineIds,
    };
