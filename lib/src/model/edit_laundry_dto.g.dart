// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'edit_laundry_dto.dart';

// **************************************************************************
// CopyWithGenerator
// **************************************************************************

abstract class _$EditLaundryDtoCWProxy {
  EditLaundryDto name(String? name);

  EditLaundryDto hours(String? hours);

  EditLaundryDto address(String? address);

  EditLaundryDto latitude(String? latitude);

  EditLaundryDto longitude(String? longitude);

  EditLaundryDto personId(String? personId);

  EditLaundryDto machineIds(List<String>? machineIds);

  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `EditLaundryDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// EditLaundryDto(...).copyWith(id: 12, name: "My name")
  /// ````
  EditLaundryDto call({
    String? name,
    String? hours,
    String? address,
    String? latitude,
    String? longitude,
    String? personId,
    List<String>? machineIds,
  });
}

/// Proxy class for `copyWith` functionality. This is a callable class and can be used as follows: `instanceOfEditLaundryDto.copyWith(...)`. Additionally contains functions for specific fields e.g. `instanceOfEditLaundryDto.copyWith.fieldName(...)`
class _$EditLaundryDtoCWProxyImpl implements _$EditLaundryDtoCWProxy {
  const _$EditLaundryDtoCWProxyImpl(this._value);

  final EditLaundryDto _value;

  @override
  EditLaundryDto name(String? name) => this(name: name);

  @override
  EditLaundryDto hours(String? hours) => this(hours: hours);

  @override
  EditLaundryDto address(String? address) => this(address: address);

  @override
  EditLaundryDto latitude(String? latitude) => this(latitude: latitude);

  @override
  EditLaundryDto longitude(String? longitude) => this(longitude: longitude);

  @override
  EditLaundryDto personId(String? personId) => this(personId: personId);

  @override
  EditLaundryDto machineIds(List<String>? machineIds) =>
      this(machineIds: machineIds);

  @override
  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `EditLaundryDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// EditLaundryDto(...).copyWith(id: 12, name: "My name")
  /// ````
  EditLaundryDto call({
    Object? name = const $CopyWithPlaceholder(),
    Object? hours = const $CopyWithPlaceholder(),
    Object? address = const $CopyWithPlaceholder(),
    Object? latitude = const $CopyWithPlaceholder(),
    Object? longitude = const $CopyWithPlaceholder(),
    Object? personId = const $CopyWithPlaceholder(),
    Object? machineIds = const $CopyWithPlaceholder(),
  }) {
    return EditLaundryDto(
      name: name == const $CopyWithPlaceholder()
          ? _value.name
          // ignore: cast_nullable_to_non_nullable
          : name as String?,
      hours: hours == const $CopyWithPlaceholder()
          ? _value.hours
          // ignore: cast_nullable_to_non_nullable
          : hours as String?,
      address: address == const $CopyWithPlaceholder()
          ? _value.address
          // ignore: cast_nullable_to_non_nullable
          : address as String?,
      latitude: latitude == const $CopyWithPlaceholder()
          ? _value.latitude
          // ignore: cast_nullable_to_non_nullable
          : latitude as String?,
      longitude: longitude == const $CopyWithPlaceholder()
          ? _value.longitude
          // ignore: cast_nullable_to_non_nullable
          : longitude as String?,
      personId: personId == const $CopyWithPlaceholder()
          ? _value.personId
          // ignore: cast_nullable_to_non_nullable
          : personId as String?,
      machineIds: machineIds == const $CopyWithPlaceholder()
          ? _value.machineIds
          // ignore: cast_nullable_to_non_nullable
          : machineIds as List<String>?,
    );
  }
}

extension $EditLaundryDtoCopyWith on EditLaundryDto {
  /// Returns a callable class that can be used as follows: `instanceOfEditLaundryDto.copyWith(...)` or like so:`instanceOfEditLaundryDto.copyWith.fieldName(...)`.
  // ignore: library_private_types_in_public_api
  _$EditLaundryDtoCWProxy get copyWith => _$EditLaundryDtoCWProxyImpl(this);
}

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

EditLaundryDto _$EditLaundryDtoFromJson(Map<String, dynamic> json) =>
    $checkedCreate('EditLaundryDto', json, ($checkedConvert) {
      final val = EditLaundryDto(
        name: $checkedConvert('name', (v) => v as String?),
        hours: $checkedConvert('hours', (v) => v as String?),
        address: $checkedConvert('address', (v) => v as String?),
        latitude: $checkedConvert('latitude', (v) => v as String?),
        longitude: $checkedConvert('longitude', (v) => v as String?),
        personId: $checkedConvert('personId', (v) => v as String?),
        machineIds: $checkedConvert(
          'machineIds',
          (v) => (v as List<dynamic>?)?.map((e) => e as String).toList(),
        ),
      );
      return val;
    });

Map<String, dynamic> _$EditLaundryDtoToJson(EditLaundryDto instance) =>
    <String, dynamic>{
      'name': ?instance.name,
      'hours': ?instance.hours,
      'address': ?instance.address,
      'latitude': ?instance.latitude,
      'longitude': ?instance.longitude,
      'personId': ?instance.personId,
      'machineIds': ?instance.machineIds,
    };
