// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'create_laundry_dto.dart';

// **************************************************************************
// CopyWithGenerator
// **************************************************************************

abstract class _$CreateLaundryDtoCWProxy {
  CreateLaundryDto name(String name);

  CreateLaundryDto hours(String hours);

  CreateLaundryDto address(String address);

  CreateLaundryDto latitude(String latitude);

  CreateLaundryDto longitude(String longitude);

  CreateLaundryDto personId(String personId);

  CreateLaundryDto machineIds(List<String>? machineIds);

  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `CreateLaundryDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// CreateLaundryDto(...).copyWith(id: 12, name: "My name")
  /// ````
  CreateLaundryDto call({
    String name,
    String hours,
    String address,
    String latitude,
    String longitude,
    String personId,
    List<String>? machineIds,
  });
}

/// Proxy class for `copyWith` functionality. This is a callable class and can be used as follows: `instanceOfCreateLaundryDto.copyWith(...)`. Additionally contains functions for specific fields e.g. `instanceOfCreateLaundryDto.copyWith.fieldName(...)`
class _$CreateLaundryDtoCWProxyImpl implements _$CreateLaundryDtoCWProxy {
  const _$CreateLaundryDtoCWProxyImpl(this._value);

  final CreateLaundryDto _value;

  @override
  CreateLaundryDto name(String name) => this(name: name);

  @override
  CreateLaundryDto hours(String hours) => this(hours: hours);

  @override
  CreateLaundryDto address(String address) => this(address: address);

  @override
  CreateLaundryDto latitude(String latitude) => this(latitude: latitude);

  @override
  CreateLaundryDto longitude(String longitude) => this(longitude: longitude);

  @override
  CreateLaundryDto personId(String personId) => this(personId: personId);

  @override
  CreateLaundryDto machineIds(List<String>? machineIds) =>
      this(machineIds: machineIds);

  @override
  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `CreateLaundryDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// CreateLaundryDto(...).copyWith(id: 12, name: "My name")
  /// ````
  CreateLaundryDto call({
    Object? name = const $CopyWithPlaceholder(),
    Object? hours = const $CopyWithPlaceholder(),
    Object? address = const $CopyWithPlaceholder(),
    Object? latitude = const $CopyWithPlaceholder(),
    Object? longitude = const $CopyWithPlaceholder(),
    Object? personId = const $CopyWithPlaceholder(),
    Object? machineIds = const $CopyWithPlaceholder(),
  }) {
    return CreateLaundryDto(
      name: name == const $CopyWithPlaceholder()
          ? _value.name
          // ignore: cast_nullable_to_non_nullable
          : name as String,
      hours: hours == const $CopyWithPlaceholder()
          ? _value.hours
          // ignore: cast_nullable_to_non_nullable
          : hours as String,
      address: address == const $CopyWithPlaceholder()
          ? _value.address
          // ignore: cast_nullable_to_non_nullable
          : address as String,
      latitude: latitude == const $CopyWithPlaceholder()
          ? _value.latitude
          // ignore: cast_nullable_to_non_nullable
          : latitude as String,
      longitude: longitude == const $CopyWithPlaceholder()
          ? _value.longitude
          // ignore: cast_nullable_to_non_nullable
          : longitude as String,
      personId: personId == const $CopyWithPlaceholder()
          ? _value.personId
          // ignore: cast_nullable_to_non_nullable
          : personId as String,
      machineIds: machineIds == const $CopyWithPlaceholder()
          ? _value.machineIds
          // ignore: cast_nullable_to_non_nullable
          : machineIds as List<String>?,
    );
  }
}

extension $CreateLaundryDtoCopyWith on CreateLaundryDto {
  /// Returns a callable class that can be used as follows: `instanceOfCreateLaundryDto.copyWith(...)` or like so:`instanceOfCreateLaundryDto.copyWith.fieldName(...)`.
  // ignore: library_private_types_in_public_api
  _$CreateLaundryDtoCWProxy get copyWith => _$CreateLaundryDtoCWProxyImpl(this);
}

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

CreateLaundryDto _$CreateLaundryDtoFromJson(Map<String, dynamic> json) =>
    $checkedCreate('CreateLaundryDto', json, ($checkedConvert) {
      $checkKeys(
        json,
        requiredKeys: const [
          'name',
          'hours',
          'address',
          'latitude',
          'longitude',
          'personId',
        ],
      );
      final val = CreateLaundryDto(
        name: $checkedConvert('name', (v) => v as String),
        hours: $checkedConvert('hours', (v) => v as String),
        address: $checkedConvert('address', (v) => v as String),
        latitude: $checkedConvert('latitude', (v) => v as String),
        longitude: $checkedConvert('longitude', (v) => v as String),
        personId: $checkedConvert('personId', (v) => v as String),
        machineIds: $checkedConvert(
          'machineIds',
          (v) => (v as List<dynamic>?)?.map((e) => e as String).toList(),
        ),
      );
      return val;
    });

Map<String, dynamic> _$CreateLaundryDtoToJson(CreateLaundryDto instance) =>
    <String, dynamic>{
      'name': instance.name,
      'hours': instance.hours,
      'address': instance.address,
      'latitude': instance.latitude,
      'longitude': instance.longitude,
      'personId': instance.personId,
      'machineIds': ?instance.machineIds,
    };
