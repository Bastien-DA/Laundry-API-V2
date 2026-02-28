// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'edit_machine_dto.dart';

// **************************************************************************
// CopyWithGenerator
// **************************************************************************

abstract class _$EditMachineDtoCWProxy {
  EditMachineDto name(String? name);

  EditMachineDto type(String? type);

  EditMachineDto price(String? price);

  EditMachineDto personId(Object? personId);

  EditMachineDto programIds(List<String>? programIds);

  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `EditMachineDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// EditMachineDto(...).copyWith(id: 12, name: "My name")
  /// ````
  EditMachineDto call({
    String? name,
    String? type,
    String? price,
    Object? personId,
    List<String>? programIds,
  });
}

/// Proxy class for `copyWith` functionality. This is a callable class and can be used as follows: `instanceOfEditMachineDto.copyWith(...)`. Additionally contains functions for specific fields e.g. `instanceOfEditMachineDto.copyWith.fieldName(...)`
class _$EditMachineDtoCWProxyImpl implements _$EditMachineDtoCWProxy {
  const _$EditMachineDtoCWProxyImpl(this._value);

  final EditMachineDto _value;

  @override
  EditMachineDto name(String? name) => this(name: name);

  @override
  EditMachineDto type(String? type) => this(type: type);

  @override
  EditMachineDto price(String? price) => this(price: price);

  @override
  EditMachineDto personId(Object? personId) => this(personId: personId);

  @override
  EditMachineDto programIds(List<String>? programIds) =>
      this(programIds: programIds);

  @override
  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `EditMachineDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// EditMachineDto(...).copyWith(id: 12, name: "My name")
  /// ````
  EditMachineDto call({
    Object? name = const $CopyWithPlaceholder(),
    Object? type = const $CopyWithPlaceholder(),
    Object? price = const $CopyWithPlaceholder(),
    Object? personId = const $CopyWithPlaceholder(),
    Object? programIds = const $CopyWithPlaceholder(),
  }) {
    return EditMachineDto(
      name: name == const $CopyWithPlaceholder()
          ? _value.name
          // ignore: cast_nullable_to_non_nullable
          : name as String?,
      type: type == const $CopyWithPlaceholder()
          ? _value.type
          // ignore: cast_nullable_to_non_nullable
          : type as String?,
      price: price == const $CopyWithPlaceholder()
          ? _value.price
          // ignore: cast_nullable_to_non_nullable
          : price as String?,
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

extension $EditMachineDtoCopyWith on EditMachineDto {
  /// Returns a callable class that can be used as follows: `instanceOfEditMachineDto.copyWith(...)` or like so:`instanceOfEditMachineDto.copyWith.fieldName(...)`.
  // ignore: library_private_types_in_public_api
  _$EditMachineDtoCWProxy get copyWith => _$EditMachineDtoCWProxyImpl(this);
}

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

EditMachineDto _$EditMachineDtoFromJson(Map<String, dynamic> json) =>
    $checkedCreate('EditMachineDto', json, ($checkedConvert) {
      final val = EditMachineDto(
        name: $checkedConvert('name', (v) => v as String?),
        type: $checkedConvert('type', (v) => v as String?),
        price: $checkedConvert('price', (v) => v as String?),
        personId: $checkedConvert('personId', (v) => v),
        programIds: $checkedConvert(
          'programIds',
          (v) => (v as List<dynamic>?)?.map((e) => e as String).toList(),
        ),
      );
      return val;
    });

Map<String, dynamic> _$EditMachineDtoToJson(EditMachineDto instance) =>
    <String, dynamic>{
      'name': ?instance.name,
      'type': ?instance.type,
      'price': ?instance.price,
      'personId': ?instance.personId,
      'programIds': ?instance.programIds,
    };
