// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'person_dto.dart';

// **************************************************************************
// CopyWithGenerator
// **************************************************************************

abstract class _$PersonDtoCWProxy {
  PersonDto id(String id);

  PersonDto username(String username);

  PersonDto personType(PersonDtoPersonTypeEnum personType);

  PersonDto laundryIds(List<String> laundryIds);

  PersonDto machineIds(List<String> machineIds);

  PersonDto userId(Object? userId);

  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `PersonDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// PersonDto(...).copyWith(id: 12, name: "My name")
  /// ````
  PersonDto call({
    String id,
    String username,
    PersonDtoPersonTypeEnum personType,
    List<String> laundryIds,
    List<String> machineIds,
    Object? userId,
  });
}

/// Proxy class for `copyWith` functionality. This is a callable class and can be used as follows: `instanceOfPersonDto.copyWith(...)`. Additionally contains functions for specific fields e.g. `instanceOfPersonDto.copyWith.fieldName(...)`
class _$PersonDtoCWProxyImpl implements _$PersonDtoCWProxy {
  const _$PersonDtoCWProxyImpl(this._value);

  final PersonDto _value;

  @override
  PersonDto id(String id) => this(id: id);

  @override
  PersonDto username(String username) => this(username: username);

  @override
  PersonDto personType(PersonDtoPersonTypeEnum personType) =>
      this(personType: personType);

  @override
  PersonDto laundryIds(List<String> laundryIds) => this(laundryIds: laundryIds);

  @override
  PersonDto machineIds(List<String> machineIds) => this(machineIds: machineIds);

  @override
  PersonDto userId(Object? userId) => this(userId: userId);

  @override
  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `PersonDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// PersonDto(...).copyWith(id: 12, name: "My name")
  /// ````
  PersonDto call({
    Object? id = const $CopyWithPlaceholder(),
    Object? username = const $CopyWithPlaceholder(),
    Object? personType = const $CopyWithPlaceholder(),
    Object? laundryIds = const $CopyWithPlaceholder(),
    Object? machineIds = const $CopyWithPlaceholder(),
    Object? userId = const $CopyWithPlaceholder(),
  }) {
    return PersonDto(
      id: id == const $CopyWithPlaceholder()
          ? _value.id
          // ignore: cast_nullable_to_non_nullable
          : id as String,
      username: username == const $CopyWithPlaceholder()
          ? _value.username
          // ignore: cast_nullable_to_non_nullable
          : username as String,
      personType: personType == const $CopyWithPlaceholder()
          ? _value.personType
          // ignore: cast_nullable_to_non_nullable
          : personType as PersonDtoPersonTypeEnum,
      laundryIds: laundryIds == const $CopyWithPlaceholder()
          ? _value.laundryIds
          // ignore: cast_nullable_to_non_nullable
          : laundryIds as List<String>,
      machineIds: machineIds == const $CopyWithPlaceholder()
          ? _value.machineIds
          // ignore: cast_nullable_to_non_nullable
          : machineIds as List<String>,
      userId: userId == const $CopyWithPlaceholder()
          ? _value.userId
          // ignore: cast_nullable_to_non_nullable
          : userId as Object?,
    );
  }
}

extension $PersonDtoCopyWith on PersonDto {
  /// Returns a callable class that can be used as follows: `instanceOfPersonDto.copyWith(...)` or like so:`instanceOfPersonDto.copyWith.fieldName(...)`.
  // ignore: library_private_types_in_public_api
  _$PersonDtoCWProxy get copyWith => _$PersonDtoCWProxyImpl(this);
}

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

PersonDto _$PersonDtoFromJson(Map<String, dynamic> json) =>
    $checkedCreate('PersonDto', json, ($checkedConvert) {
      $checkKeys(
        json,
        requiredKeys: const [
          'id',
          'username',
          'personType',
          'laundryIds',
          'machineIds',
          'userId',
        ],
      );
      final val = PersonDto(
        id: $checkedConvert('id', (v) => v as String),
        username: $checkedConvert('username', (v) => v as String),
        personType: $checkedConvert(
          'personType',
          (v) => $enumDecode(_$PersonDtoPersonTypeEnumEnumMap, v),
        ),
        laundryIds: $checkedConvert(
          'laundryIds',
          (v) => (v as List<dynamic>).map((e) => e as String).toList(),
        ),
        machineIds: $checkedConvert(
          'machineIds',
          (v) => (v as List<dynamic>).map((e) => e as String).toList(),
        ),
        userId: $checkedConvert('userId', (v) => v),
      );
      return val;
    });

Map<String, dynamic> _$PersonDtoToJson(PersonDto instance) => <String, dynamic>{
  'id': instance.id,
  'username': instance.username,
  'personType': _$PersonDtoPersonTypeEnumEnumMap[instance.personType]!,
  'laundryIds': instance.laundryIds,
  'machineIds': instance.machineIds,
  'userId': instance.userId,
};

const _$PersonDtoPersonTypeEnumEnumMap = {
  PersonDtoPersonTypeEnum.ADMIN: 'ADMIN',
  PersonDtoPersonTypeEnum.CUSTOMER: 'CUSTOMER',
  PersonDtoPersonTypeEnum.TECHNICIAN: 'TECHNICIAN',
};
