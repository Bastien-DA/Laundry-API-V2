// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'edit_user_dto.dart';

// **************************************************************************
// CopyWithGenerator
// **************************************************************************

abstract class _$EditUserDtoCWProxy {
  EditUserDto email(String? email);

  EditUserDto personId(Object? personId);

  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `EditUserDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// EditUserDto(...).copyWith(id: 12, name: "My name")
  /// ````
  EditUserDto call({String? email, Object? personId});
}

/// Proxy class for `copyWith` functionality. This is a callable class and can be used as follows: `instanceOfEditUserDto.copyWith(...)`. Additionally contains functions for specific fields e.g. `instanceOfEditUserDto.copyWith.fieldName(...)`
class _$EditUserDtoCWProxyImpl implements _$EditUserDtoCWProxy {
  const _$EditUserDtoCWProxyImpl(this._value);

  final EditUserDto _value;

  @override
  EditUserDto email(String? email) => this(email: email);

  @override
  EditUserDto personId(Object? personId) => this(personId: personId);

  @override
  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `EditUserDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// EditUserDto(...).copyWith(id: 12, name: "My name")
  /// ````
  EditUserDto call({
    Object? email = const $CopyWithPlaceholder(),
    Object? personId = const $CopyWithPlaceholder(),
  }) {
    return EditUserDto(
      email: email == const $CopyWithPlaceholder()
          ? _value.email
          // ignore: cast_nullable_to_non_nullable
          : email as String?,
      personId: personId == const $CopyWithPlaceholder()
          ? _value.personId
          // ignore: cast_nullable_to_non_nullable
          : personId as Object?,
    );
  }
}

extension $EditUserDtoCopyWith on EditUserDto {
  /// Returns a callable class that can be used as follows: `instanceOfEditUserDto.copyWith(...)` or like so:`instanceOfEditUserDto.copyWith.fieldName(...)`.
  // ignore: library_private_types_in_public_api
  _$EditUserDtoCWProxy get copyWith => _$EditUserDtoCWProxyImpl(this);
}

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

EditUserDto _$EditUserDtoFromJson(Map<String, dynamic> json) =>
    $checkedCreate('EditUserDto', json, ($checkedConvert) {
      final val = EditUserDto(
        email: $checkedConvert('email', (v) => v as String?),
        personId: $checkedConvert('personId', (v) => v),
      );
      return val;
    });

Map<String, dynamic> _$EditUserDtoToJson(EditUserDto instance) =>
    <String, dynamic>{'email': ?instance.email, 'personId': ?instance.personId};
