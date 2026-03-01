// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'user_dto.dart';

// **************************************************************************
// CopyWithGenerator
// **************************************************************************

abstract class _$UserDtoCWProxy {
  UserDto id(String id);

  UserDto email(String email);

  UserDto createdAt(num createdAt);

  UserDto personId(Object? personId);

  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `UserDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// UserDto(...).copyWith(id: 12, name: "My name")
  /// ````
  UserDto call({String id, String email, num createdAt, Object? personId});
}

/// Proxy class for `copyWith` functionality. This is a callable class and can be used as follows: `instanceOfUserDto.copyWith(...)`. Additionally contains functions for specific fields e.g. `instanceOfUserDto.copyWith.fieldName(...)`
class _$UserDtoCWProxyImpl implements _$UserDtoCWProxy {
  const _$UserDtoCWProxyImpl(this._value);

  final UserDto _value;

  @override
  UserDto id(String id) => this(id: id);

  @override
  UserDto email(String email) => this(email: email);

  @override
  UserDto createdAt(num createdAt) => this(createdAt: createdAt);

  @override
  UserDto personId(Object? personId) => this(personId: personId);

  @override
  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `UserDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// UserDto(...).copyWith(id: 12, name: "My name")
  /// ````
  UserDto call({
    Object? id = const $CopyWithPlaceholder(),
    Object? email = const $CopyWithPlaceholder(),
    Object? createdAt = const $CopyWithPlaceholder(),
    Object? personId = const $CopyWithPlaceholder(),
  }) {
    return UserDto(
      id: id == const $CopyWithPlaceholder()
          ? _value.id
          // ignore: cast_nullable_to_non_nullable
          : id as String,
      email: email == const $CopyWithPlaceholder()
          ? _value.email
          // ignore: cast_nullable_to_non_nullable
          : email as String,
      createdAt: createdAt == const $CopyWithPlaceholder()
          ? _value.createdAt
          // ignore: cast_nullable_to_non_nullable
          : createdAt as num,
      personId: personId == const $CopyWithPlaceholder()
          ? _value.personId
          // ignore: cast_nullable_to_non_nullable
          : personId as Object?,
    );
  }
}

extension $UserDtoCopyWith on UserDto {
  /// Returns a callable class that can be used as follows: `instanceOfUserDto.copyWith(...)` or like so:`instanceOfUserDto.copyWith.fieldName(...)`.
  // ignore: library_private_types_in_public_api
  _$UserDtoCWProxy get copyWith => _$UserDtoCWProxyImpl(this);
}

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

UserDto _$UserDtoFromJson(Map<String, dynamic> json) =>
    $checkedCreate('UserDto', json, ($checkedConvert) {
      $checkKeys(
        json,
        requiredKeys: const ['id', 'email', 'createdAt', 'personId'],
      );
      final val = UserDto(
        id: $checkedConvert('id', (v) => v as String),
        email: $checkedConvert('email', (v) => v as String),
        createdAt: $checkedConvert('createdAt', (v) => v as num),
        personId: $checkedConvert('personId', (v) => v),
      );
      return val;
    });

Map<String, dynamic> _$UserDtoToJson(UserDto instance) => <String, dynamic>{
  'id': instance.id,
  'email': instance.email,
  'createdAt': instance.createdAt,
  'personId': instance.personId,
};
