// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'create_machine_dto.dart';

// **************************************************************************
// CopyWithGenerator
// **************************************************************************

abstract class _$CreateMachineDtoCWProxy {
  CreateMachineDto name(String name);

  CreateMachineDto type(String type);

  CreateMachineDto price(String price);

  CreateMachineDto laundryId(String laundryId);

  CreateMachineDto personId(Object? personId);

  CreateMachineDto programIds(List<String>? programIds);

  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `CreateMachineDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// CreateMachineDto(...).copyWith(id: 12, name: "My name")
  /// ````
  CreateMachineDto call({
    String name,
    String type,
    String price,
    String laundryId,
    Object? personId,
    List<String>? programIds,
  });
}

/// Proxy class for `copyWith` functionality. This is a callable class and can be used as follows: `instanceOfCreateMachineDto.copyWith(...)`. Additionally contains functions for specific fields e.g. `instanceOfCreateMachineDto.copyWith.fieldName(...)`
class _$CreateMachineDtoCWProxyImpl implements _$CreateMachineDtoCWProxy {
  const _$CreateMachineDtoCWProxyImpl(this._value);

  final CreateMachineDto _value;

  @override
  CreateMachineDto name(String name) => this(name: name);

  @override
  CreateMachineDto type(String type) => this(type: type);

  @override
  CreateMachineDto price(String price) => this(price: price);

  @override
  CreateMachineDto laundryId(String laundryId) => this(laundryId: laundryId);

  @override
  CreateMachineDto personId(Object? personId) => this(personId: personId);

  @override
  CreateMachineDto programIds(List<String>? programIds) =>
      this(programIds: programIds);

  @override
  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `CreateMachineDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// CreateMachineDto(...).copyWith(id: 12, name: "My name")
  /// ````
  CreateMachineDto call({
    Object? name = const $CopyWithPlaceholder(),
    Object? type = const $CopyWithPlaceholder(),
    Object? price = const $CopyWithPlaceholder(),
    Object? laundryId = const $CopyWithPlaceholder(),
    Object? personId = const $CopyWithPlaceholder(),
    Object? programIds = const $CopyWithPlaceholder(),
  }) {
    return CreateMachineDto(
      name: name == const $CopyWithPlaceholder()
          ? _value.name
          // ignore: cast_nullable_to_non_nullable
          : name as String,
      type: type == const $CopyWithPlaceholder()
          ? _value.type
          // ignore: cast_nullable_to_non_nullable
          : type as String,
      price: price == const $CopyWithPlaceholder()
          ? _value.price
          // ignore: cast_nullable_to_non_nullable
          : price as String,
      laundryId: laundryId == const $CopyWithPlaceholder()
          ? _value.laundryId
          // ignore: cast_nullable_to_non_nullable
          : laundryId as String,
      personId: personId == const $CopyWithPlaceholder()
          ? _value.personId
          // ignore: cast_nullable_to_non_nullable
          : personId as Object?,
      programIds: programIds == const $CopyWithPlaceholder()
          ? _value.programIds
          // ignore: cast_nullable_to_non_nullable
          : programIds as List<String>?,
    );
  }
}

extension $CreateMachineDtoCopyWith on CreateMachineDto {
  /// Returns a callable class that can be used as follows: `instanceOfCreateMachineDto.copyWith(...)` or like so:`instanceOfCreateMachineDto.copyWith.fieldName(...)`.
  // ignore: library_private_types_in_public_api
  _$CreateMachineDtoCWProxy get copyWith => _$CreateMachineDtoCWProxyImpl(this);
}

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

CreateMachineDto _$CreateMachineDtoFromJson(Map<String, dynamic> json) =>
    $checkedCreate('CreateMachineDto', json, ($checkedConvert) {
      $checkKeys(
        json,
        requiredKeys: const ['name', 'type', 'price', 'laundryId'],
      );
      final val = CreateMachineDto(
        name: $checkedConvert('name', (v) => v as String),
        type: $checkedConvert('type', (v) => v as String),
        price: $checkedConvert('price', (v) => v as String),
        laundryId: $checkedConvert('laundryId', (v) => v as String),
        personId: $checkedConvert('personId', (v) => v),
        programIds: $checkedConvert(
          'programIds',
          (v) => (v as List<dynamic>?)?.map((e) => e as String).toList(),
        ),
      );
      return val;
    });

Map<String, dynamic> _$CreateMachineDtoToJson(CreateMachineDto instance) =>
    <String, dynamic>{
      'name': instance.name,
      'type': instance.type,
      'price': instance.price,
      'laundryId': instance.laundryId,
      'personId': ?instance.personId,
      'programIds': ?instance.programIds,
    };
