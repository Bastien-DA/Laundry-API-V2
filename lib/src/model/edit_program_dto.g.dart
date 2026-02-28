// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'edit_program_dto.dart';

// **************************************************************************
// CopyWithGenerator
// **************************************************************************

abstract class _$EditProgramDtoCWProxy {
  EditProgramDto name(String? name);

  EditProgramDto temperature(num? temperature);

  EditProgramDto speed(num? speed);

  EditProgramDto duration(num? duration);

  EditProgramDto machineIds(List<String>? machineIds);

  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `EditProgramDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// EditProgramDto(...).copyWith(id: 12, name: "My name")
  /// ````
  EditProgramDto call({
    String? name,
    num? temperature,
    num? speed,
    num? duration,
    List<String>? machineIds,
  });
}

/// Proxy class for `copyWith` functionality. This is a callable class and can be used as follows: `instanceOfEditProgramDto.copyWith(...)`. Additionally contains functions for specific fields e.g. `instanceOfEditProgramDto.copyWith.fieldName(...)`
class _$EditProgramDtoCWProxyImpl implements _$EditProgramDtoCWProxy {
  const _$EditProgramDtoCWProxyImpl(this._value);

  final EditProgramDto _value;

  @override
  EditProgramDto name(String? name) => this(name: name);

  @override
  EditProgramDto temperature(num? temperature) =>
      this(temperature: temperature);

  @override
  EditProgramDto speed(num? speed) => this(speed: speed);

  @override
  EditProgramDto duration(num? duration) => this(duration: duration);

  @override
  EditProgramDto machineIds(List<String>? machineIds) =>
      this(machineIds: machineIds);

  @override
  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `EditProgramDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// EditProgramDto(...).copyWith(id: 12, name: "My name")
  /// ````
  EditProgramDto call({
    Object? name = const $CopyWithPlaceholder(),
    Object? temperature = const $CopyWithPlaceholder(),
    Object? speed = const $CopyWithPlaceholder(),
    Object? duration = const $CopyWithPlaceholder(),
    Object? machineIds = const $CopyWithPlaceholder(),
  }) {
    return EditProgramDto(
      name: name == const $CopyWithPlaceholder()
          ? _value.name
          // ignore: cast_nullable_to_non_nullable
          : name as String?,
      temperature: temperature == const $CopyWithPlaceholder()
          ? _value.temperature
          // ignore: cast_nullable_to_non_nullable
          : temperature as num?,
      speed: speed == const $CopyWithPlaceholder()
          ? _value.speed
          // ignore: cast_nullable_to_non_nullable
          : speed as num?,
      duration: duration == const $CopyWithPlaceholder()
          ? _value.duration
          // ignore: cast_nullable_to_non_nullable
          : duration as num?,
      machineIds: machineIds == const $CopyWithPlaceholder()
          ? _value.machineIds
          // ignore: cast_nullable_to_non_nullable
          : machineIds as List<String>?,
    );
  }
}

extension $EditProgramDtoCopyWith on EditProgramDto {
  /// Returns a callable class that can be used as follows: `instanceOfEditProgramDto.copyWith(...)` or like so:`instanceOfEditProgramDto.copyWith.fieldName(...)`.
  // ignore: library_private_types_in_public_api
  _$EditProgramDtoCWProxy get copyWith => _$EditProgramDtoCWProxyImpl(this);
}

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

EditProgramDto _$EditProgramDtoFromJson(Map<String, dynamic> json) =>
    $checkedCreate('EditProgramDto', json, ($checkedConvert) {
      final val = EditProgramDto(
        name: $checkedConvert('name', (v) => v as String?),
        temperature: $checkedConvert('temperature', (v) => v as num?),
        speed: $checkedConvert('speed', (v) => v as num?),
        duration: $checkedConvert('duration', (v) => v as num?),
        machineIds: $checkedConvert(
          'machineIds',
          (v) => (v as List<dynamic>?)?.map((e) => e as String).toList(),
        ),
      );
      return val;
    });

Map<String, dynamic> _$EditProgramDtoToJson(EditProgramDto instance) =>
    <String, dynamic>{
      'name': ?instance.name,
      'temperature': ?instance.temperature,
      'speed': ?instance.speed,
      'duration': ?instance.duration,
      'machineIds': ?instance.machineIds,
    };
