// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'edit_person_dto.dart';

// **************************************************************************
// CopyWithGenerator
// **************************************************************************

abstract class _$EditPersonDtoCWProxy {
  EditPersonDto username(String? username);

  EditPersonDto personType(String personType);

  EditPersonDto laundryIds(List<String>? laundryIds);

  EditPersonDto machineIds(List<String>? machineIds);

  EditPersonDto userId(Object? userId);

  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `EditPersonDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// EditPersonDto(...).copyWith(id: 12, name: "My name")
  /// ````
  EditPersonDto call({
    String? username,
    String personType,
    List<String>? laundryIds,
    List<String>? machineIds,
    Object? userId,
  });
}

/// Proxy class for `copyWith` functionality. This is a callable class and can be used as follows: `instanceOfEditPersonDto.copyWith(...)`. Additionally contains functions for specific fields e.g. `instanceOfEditPersonDto.copyWith.fieldName(...)`
class _$EditPersonDtoCWProxyImpl implements _$EditPersonDtoCWProxy {
  const _$EditPersonDtoCWProxyImpl(this._value);

  final EditPersonDto _value;

  @override
  EditPersonDto username(String? username) => this(username: username);

  @override
  EditPersonDto personType(String personType) => this(personType: personType);

  @override
  EditPersonDto laundryIds(List<String>? laundryIds) =>
      this(laundryIds: laundryIds);

  @override
  EditPersonDto machineIds(List<String>? machineIds) =>
      this(machineIds: machineIds);

  @override
  EditPersonDto userId(Object? userId) => this(userId: userId);

  @override
  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `EditPersonDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// EditPersonDto(...).copyWith(id: 12, name: "My name")
  /// ````
  EditPersonDto call({
    Object? username = const $CopyWithPlaceholder(),
    Object? personType = const $CopyWithPlaceholder(),
    Object? laundryIds = const $CopyWithPlaceholder(),
    Object? machineIds = const $CopyWithPlaceholder(),
    Object? userId = const $CopyWithPlaceholder(),
  }) {
    return EditPersonDto(
      username: username == const $CopyWithPlaceholder()
          ? _value.username
          // ignore: cast_nullable_to_non_nullable
          : username as String?,
      personType: personType == const $CopyWithPlaceholder()
          ? _value.personType
          // ignore: cast_nullable_to_non_nullable
          : personType as String,
      laundryIds: laundryIds == const $CopyWithPlaceholder()
          ? _value.laundryIds
          // ignore: cast_nullable_to_non_nullable
          : laundryIds as List<String>?,
      machineIds: machineIds == const $CopyWithPlaceholder()
          ? _value.machineIds
          // ignore: cast_nullable_to_non_nullable
          : machineIds as List<String>?,
      userId: userId == const $CopyWithPlaceholder()
          ? _value.userId
          // ignore: cast_nullable_to_non_nullable
          : userId as Object?,
    );
  }
}

extension $EditPersonDtoCopyWith on EditPersonDto {
  /// Returns a callable class that can be used as follows: `instanceOfEditPersonDto.copyWith(...)` or like so:`instanceOfEditPersonDto.copyWith.fieldName(...)`.
  // ignore: library_private_types_in_public_api
  _$EditPersonDtoCWProxy get copyWith => _$EditPersonDtoCWProxyImpl(this);
}

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

EditPersonDto _$EditPersonDtoFromJson(Map<String, dynamic> json) =>
    $checkedCreate('EditPersonDto', json, ($checkedConvert) {
      $checkKeys(json, requiredKeys: const ['personType']);
      final val = EditPersonDto(
        username: $checkedConvert('username', (v) => v as String?),
        personType: $checkedConvert('personType', (v) => v as String),
        laundryIds: $checkedConvert(
          'laundryIds',
          (v) => (v as List<dynamic>?)?.map((e) => e as String).toList(),
        ),
        machineIds: $checkedConvert(
          'machineIds',
          (v) => (v as List<dynamic>?)?.map((e) => e as String).toList(),
        ),
        userId: $checkedConvert('userId', (v) => v),
      );
      return val;
    });

Map<String, dynamic> _$EditPersonDtoToJson(EditPersonDto instance) =>
    <String, dynamic>{
      'username': ?instance.username,
      'personType': instance.personType,
      'laundryIds': ?instance.laundryIds,
      'machineIds': ?instance.machineIds,
      'userId': ?instance.userId,
    };
