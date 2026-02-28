// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'create_person_dto.dart';

// **************************************************************************
// CopyWithGenerator
// **************************************************************************

abstract class _$CreatePersonDtoCWProxy {
  CreatePersonDto username(String username);

  CreatePersonDto personType(String personType);

  CreatePersonDto laundryIds(List<String>? laundryIds);

  CreatePersonDto machineIds(List<String>? machineIds);

  CreatePersonDto userId(String? userId);

  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `CreatePersonDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// CreatePersonDto(...).copyWith(id: 12, name: "My name")
  /// ````
  CreatePersonDto call({
    String username,
    String personType,
    List<String>? laundryIds,
    List<String>? machineIds,
    String? userId,
  });
}

/// Proxy class for `copyWith` functionality. This is a callable class and can be used as follows: `instanceOfCreatePersonDto.copyWith(...)`. Additionally contains functions for specific fields e.g. `instanceOfCreatePersonDto.copyWith.fieldName(...)`
class _$CreatePersonDtoCWProxyImpl implements _$CreatePersonDtoCWProxy {
  const _$CreatePersonDtoCWProxyImpl(this._value);

  final CreatePersonDto _value;

  @override
  CreatePersonDto username(String username) => this(username: username);

  @override
  CreatePersonDto personType(String personType) => this(personType: personType);

  @override
  CreatePersonDto laundryIds(List<String>? laundryIds) =>
      this(laundryIds: laundryIds);

  @override
  CreatePersonDto machineIds(List<String>? machineIds) =>
      this(machineIds: machineIds);

  @override
  CreatePersonDto userId(String? userId) => this(userId: userId);

  @override
  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `CreatePersonDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// CreatePersonDto(...).copyWith(id: 12, name: "My name")
  /// ````
  CreatePersonDto call({
    Object? username = const $CopyWithPlaceholder(),
    Object? personType = const $CopyWithPlaceholder(),
    Object? laundryIds = const $CopyWithPlaceholder(),
    Object? machineIds = const $CopyWithPlaceholder(),
    Object? userId = const $CopyWithPlaceholder(),
  }) {
    return CreatePersonDto(
      username: username == const $CopyWithPlaceholder()
          ? _value.username
          // ignore: cast_nullable_to_non_nullable
          : username as String,
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
          : userId as String?,
    );
  }
}

extension $CreatePersonDtoCopyWith on CreatePersonDto {
  /// Returns a callable class that can be used as follows: `instanceOfCreatePersonDto.copyWith(...)` or like so:`instanceOfCreatePersonDto.copyWith.fieldName(...)`.
  // ignore: library_private_types_in_public_api
  _$CreatePersonDtoCWProxy get copyWith => _$CreatePersonDtoCWProxyImpl(this);
}

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

CreatePersonDto _$CreatePersonDtoFromJson(Map<String, dynamic> json) =>
    $checkedCreate('CreatePersonDto', json, ($checkedConvert) {
      $checkKeys(json, requiredKeys: const ['username', 'personType']);
      final val = CreatePersonDto(
        username: $checkedConvert('username', (v) => v as String),
        personType: $checkedConvert('personType', (v) => v as String),
        laundryIds: $checkedConvert(
          'laundryIds',
          (v) => (v as List<dynamic>?)?.map((e) => e as String).toList(),
        ),
        machineIds: $checkedConvert(
          'machineIds',
          (v) => (v as List<dynamic>?)?.map((e) => e as String).toList(),
        ),
        userId: $checkedConvert('userId', (v) => v as String?),
      );
      return val;
    });

Map<String, dynamic> _$CreatePersonDtoToJson(CreatePersonDto instance) =>
    <String, dynamic>{
      'username': instance.username,
      'personType': instance.personType,
      'laundryIds': ?instance.laundryIds,
      'machineIds': ?instance.machineIds,
      'userId': ?instance.userId,
    };
