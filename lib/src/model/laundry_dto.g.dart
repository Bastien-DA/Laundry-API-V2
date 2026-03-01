// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'laundry_dto.dart';

// **************************************************************************
// CopyWithGenerator
// **************************************************************************

abstract class _$LaundryDtoCWProxy {
  LaundryDto id(String id);

  LaundryDto name(String name);

  LaundryDto hours(String hours);

  LaundryDto address(String address);

  LaundryDto latitude(String latitude);

  LaundryDto longitude(String longitude);

  LaundryDto createdAt(num createdAt);

  LaundryDto personId(String personId);

  LaundryDto machineIds(List<String> machineIds);

  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `LaundryDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// LaundryDto(...).copyWith(id: 12, name: "My name")
  /// ````
  LaundryDto call({
    String id,
    String name,
    String hours,
    String address,
    String latitude,
    String longitude,
    num createdAt,
    String personId,
    List<String> machineIds,
  });
}

/// Proxy class for `copyWith` functionality. This is a callable class and can be used as follows: `instanceOfLaundryDto.copyWith(...)`. Additionally contains functions for specific fields e.g. `instanceOfLaundryDto.copyWith.fieldName(...)`
class _$LaundryDtoCWProxyImpl implements _$LaundryDtoCWProxy {
  const _$LaundryDtoCWProxyImpl(this._value);

  final LaundryDto _value;

  @override
  LaundryDto id(String id) => this(id: id);

  @override
  LaundryDto name(String name) => this(name: name);

  @override
  LaundryDto hours(String hours) => this(hours: hours);

  @override
  LaundryDto address(String address) => this(address: address);

  @override
  LaundryDto latitude(String latitude) => this(latitude: latitude);

  @override
  LaundryDto longitude(String longitude) => this(longitude: longitude);

  @override
  LaundryDto createdAt(num createdAt) => this(createdAt: createdAt);

  @override
  LaundryDto personId(String personId) => this(personId: personId);

  @override
  LaundryDto machineIds(List<String> machineIds) =>
      this(machineIds: machineIds);

  @override
  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `LaundryDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// LaundryDto(...).copyWith(id: 12, name: "My name")
  /// ````
  LaundryDto call({
    Object? id = const $CopyWithPlaceholder(),
    Object? name = const $CopyWithPlaceholder(),
    Object? hours = const $CopyWithPlaceholder(),
    Object? address = const $CopyWithPlaceholder(),
    Object? latitude = const $CopyWithPlaceholder(),
    Object? longitude = const $CopyWithPlaceholder(),
    Object? createdAt = const $CopyWithPlaceholder(),
    Object? personId = const $CopyWithPlaceholder(),
    Object? machineIds = const $CopyWithPlaceholder(),
  }) {
    return LaundryDto(
      id: id == const $CopyWithPlaceholder()
          ? _value.id
          // ignore: cast_nullable_to_non_nullable
          : id as String,
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
      createdAt: createdAt == const $CopyWithPlaceholder()
          ? _value.createdAt
          // ignore: cast_nullable_to_non_nullable
          : createdAt as num,
      personId: personId == const $CopyWithPlaceholder()
          ? _value.personId
          // ignore: cast_nullable_to_non_nullable
          : personId as String,
      machineIds: machineIds == const $CopyWithPlaceholder()
          ? _value.machineIds
          // ignore: cast_nullable_to_non_nullable
          : machineIds as List<String>,
    );
  }
}

extension $LaundryDtoCopyWith on LaundryDto {
  /// Returns a callable class that can be used as follows: `instanceOfLaundryDto.copyWith(...)` or like so:`instanceOfLaundryDto.copyWith.fieldName(...)`.
  // ignore: library_private_types_in_public_api
  _$LaundryDtoCWProxy get copyWith => _$LaundryDtoCWProxyImpl(this);
}

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

LaundryDto _$LaundryDtoFromJson(Map<String, dynamic> json) =>
    $checkedCreate('LaundryDto', json, ($checkedConvert) {
      $checkKeys(
        json,
        requiredKeys: const [
          'id',
          'name',
          'hours',
          'address',
          'latitude',
          'longitude',
          'createdAt',
          'personId',
          'machineIds',
        ],
      );
      final val = LaundryDto(
        id: $checkedConvert('id', (v) => v as String),
        name: $checkedConvert('name', (v) => v as String),
        hours: $checkedConvert('hours', (v) => v as String),
        address: $checkedConvert('address', (v) => v as String),
        latitude: $checkedConvert('latitude', (v) => v as String),
        longitude: $checkedConvert('longitude', (v) => v as String),
        createdAt: $checkedConvert('createdAt', (v) => v as num),
        personId: $checkedConvert('personId', (v) => v as String),
        machineIds: $checkedConvert(
          'machineIds',
          (v) => (v as List<dynamic>).map((e) => e as String).toList(),
        ),
      );
      return val;
    });

Map<String, dynamic> _$LaundryDtoToJson(LaundryDto instance) =>
    <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'hours': instance.hours,
      'address': instance.address,
      'latitude': instance.latitude,
      'longitude': instance.longitude,
      'createdAt': instance.createdAt,
      'personId': instance.personId,
      'machineIds': instance.machineIds,
    };
