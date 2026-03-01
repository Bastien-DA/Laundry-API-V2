// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'machine_dto.dart';

// **************************************************************************
// CopyWithGenerator
// **************************************************************************

abstract class _$MachineDtoCWProxy {
  MachineDto id(String id);

  MachineDto name(String name);

  MachineDto type(MachineDtoTypeEnum type);

  MachineDto price(String price);

  MachineDto laundryId(String laundryId);

  MachineDto personId(Object? personId);

  MachineDto machineStatusId(Object? machineStatusId);

  MachineDto status(MachineDtoStatusEnum? status);

  MachineDto currentProgramId(Object? currentProgramId);

  MachineDto programIds(List<String> programIds);

  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `MachineDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// MachineDto(...).copyWith(id: 12, name: "My name")
  /// ````
  MachineDto call({
    String id,
    String name,
    MachineDtoTypeEnum type,
    String price,
    String laundryId,
    Object? personId,
    Object? machineStatusId,
    MachineDtoStatusEnum? status,
    Object? currentProgramId,
    List<String> programIds,
  });
}

/// Proxy class for `copyWith` functionality. This is a callable class and can be used as follows: `instanceOfMachineDto.copyWith(...)`. Additionally contains functions for specific fields e.g. `instanceOfMachineDto.copyWith.fieldName(...)`
class _$MachineDtoCWProxyImpl implements _$MachineDtoCWProxy {
  const _$MachineDtoCWProxyImpl(this._value);

  final MachineDto _value;

  @override
  MachineDto id(String id) => this(id: id);

  @override
  MachineDto name(String name) => this(name: name);

  @override
  MachineDto type(MachineDtoTypeEnum type) => this(type: type);

  @override
  MachineDto price(String price) => this(price: price);

  @override
  MachineDto laundryId(String laundryId) => this(laundryId: laundryId);

  @override
  MachineDto personId(Object? personId) => this(personId: personId);

  @override
  MachineDto machineStatusId(Object? machineStatusId) =>
      this(machineStatusId: machineStatusId);

  @override
  MachineDto status(MachineDtoStatusEnum? status) => this(status: status);

  @override
  MachineDto currentProgramId(Object? currentProgramId) =>
      this(currentProgramId: currentProgramId);

  @override
  MachineDto programIds(List<String> programIds) =>
      this(programIds: programIds);

  @override
  /// This function **does support** nullification of nullable fields. All `null` values passed to `non-nullable` fields will be ignored. You can also use `MachineDto(...).copyWith.fieldName(...)` to override fields one at a time with nullification support.
  ///
  /// Usage
  /// ```dart
  /// MachineDto(...).copyWith(id: 12, name: "My name")
  /// ````
  MachineDto call({
    Object? id = const $CopyWithPlaceholder(),
    Object? name = const $CopyWithPlaceholder(),
    Object? type = const $CopyWithPlaceholder(),
    Object? price = const $CopyWithPlaceholder(),
    Object? laundryId = const $CopyWithPlaceholder(),
    Object? personId = const $CopyWithPlaceholder(),
    Object? machineStatusId = const $CopyWithPlaceholder(),
    Object? status = const $CopyWithPlaceholder(),
    Object? currentProgramId = const $CopyWithPlaceholder(),
    Object? programIds = const $CopyWithPlaceholder(),
  }) {
    return MachineDto(
      id: id == const $CopyWithPlaceholder()
          ? _value.id
          // ignore: cast_nullable_to_non_nullable
          : id as String,
      name: name == const $CopyWithPlaceholder()
          ? _value.name
          // ignore: cast_nullable_to_non_nullable
          : name as String,
      type: type == const $CopyWithPlaceholder()
          ? _value.type
          // ignore: cast_nullable_to_non_nullable
          : type as MachineDtoTypeEnum,
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
      machineStatusId: machineStatusId == const $CopyWithPlaceholder()
          ? _value.machineStatusId
          // ignore: cast_nullable_to_non_nullable
          : machineStatusId as Object?,
      status: status == const $CopyWithPlaceholder()
          ? _value.status
          // ignore: cast_nullable_to_non_nullable
          : status as MachineDtoStatusEnum?,
      currentProgramId: currentProgramId == const $CopyWithPlaceholder()
          ? _value.currentProgramId
          // ignore: cast_nullable_to_non_nullable
          : currentProgramId as Object?,
      programIds: programIds == const $CopyWithPlaceholder()
          ? _value.programIds
          // ignore: cast_nullable_to_non_nullable
          : programIds as List<String>,
    );
  }
}

extension $MachineDtoCopyWith on MachineDto {
  /// Returns a callable class that can be used as follows: `instanceOfMachineDto.copyWith(...)` or like so:`instanceOfMachineDto.copyWith.fieldName(...)`.
  // ignore: library_private_types_in_public_api
  _$MachineDtoCWProxy get copyWith => _$MachineDtoCWProxyImpl(this);
}

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

MachineDto _$MachineDtoFromJson(Map<String, dynamic> json) =>
    $checkedCreate('MachineDto', json, ($checkedConvert) {
      $checkKeys(
        json,
        requiredKeys: const [
          'id',
          'name',
          'type',
          'price',
          'laundryId',
          'personId',
          'machineStatusId',
          'status',
          'currentProgramId',
          'programIds',
        ],
      );
      final val = MachineDto(
        id: $checkedConvert('id', (v) => v as String),
        name: $checkedConvert('name', (v) => v as String),
        type: $checkedConvert(
          'type',
          (v) => $enumDecode(_$MachineDtoTypeEnumEnumMap, v),
        ),
        price: $checkedConvert('price', (v) => v as String),
        laundryId: $checkedConvert('laundryId', (v) => v as String),
        personId: $checkedConvert('personId', (v) => v),
        machineStatusId: $checkedConvert('machineStatusId', (v) => v),
        status: $checkedConvert(
          'status',
          (v) => $enumDecodeNullable(_$MachineDtoStatusEnumEnumMap, v),
        ),
        currentProgramId: $checkedConvert('currentProgramId', (v) => v),
        programIds: $checkedConvert(
          'programIds',
          (v) => (v as List<dynamic>).map((e) => e as String).toList(),
        ),
      );
      return val;
    });

Map<String, dynamic> _$MachineDtoToJson(MachineDto instance) =>
    <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'type': _$MachineDtoTypeEnumEnumMap[instance.type]!,
      'price': instance.price,
      'laundryId': instance.laundryId,
      'personId': instance.personId,
      'machineStatusId': instance.machineStatusId,
      'status': _$MachineDtoStatusEnumEnumMap[instance.status],
      'currentProgramId': instance.currentProgramId,
      'programIds': instance.programIds,
    };

const _$MachineDtoTypeEnumEnumMap = {
  MachineDtoTypeEnum.WASHER: 'WASHER',
  MachineDtoTypeEnum.DRYER: 'DRYER',
};

const _$MachineDtoStatusEnumEnumMap = {
  MachineDtoStatusEnum.AVAILABLE: 'AVAILABLE',
  MachineDtoStatusEnum.RUNNING: 'RUNNING',
  MachineDtoStatusEnum.PAUSED: 'PAUSED',
  MachineDtoStatusEnum.OUT_OF_ORDER: 'OUT_OF_ORDER',
};
