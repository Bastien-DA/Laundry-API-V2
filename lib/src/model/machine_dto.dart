//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:copy_with_extension/copy_with_extension.dart';
import 'package:json_annotation/json_annotation.dart';

part 'machine_dto.g.dart';


@CopyWith()
@JsonSerializable(
  checked: true,
  createToJson: true,
  disallowUnrecognizedKeys: false,
  explicitToJson: true,
)
class MachineDto {
  /// Returns a new [MachineDto] instance.
  MachineDto({

    required  this.id,

    required  this.name,

    required  this.type,

    required  this.price,

    required  this.laundryId,

    required  this.personId,

    required  this.machineStatusId,

    required  this.status,

    required  this.currentProgramId,

    required  this.programIds,
  });

      /// Unique identifier of the machine
  @JsonKey(
    
    name: r'id',
    required: true,
    includeIfNull: false,
  )


  final String id;



      /// Display name of the machine
  @JsonKey(
    
    name: r'name',
    required: true,
    includeIfNull: false,
  )


  final String name;



      /// Type of machine
  @JsonKey(
    
    name: r'type',
    required: true,
    includeIfNull: false,
  )


  final MachineDtoTypeEnum type;



      /// Price stored as string (Decimal)
  @JsonKey(
    
    name: r'price',
    required: true,
    includeIfNull: false,
  )


  final String price;



      /// Laundry owning this machine
  @JsonKey(
    
    name: r'laundryId',
    required: true,
    includeIfNull: false,
  )


  final String laundryId;



      /// Assigned technician (0..1)
  @JsonKey(
    
    name: r'personId',
    required: true,
    includeIfNull: true,
  )


  final Object? personId;



      /// MachineStatus id (1–1 optional)
  @JsonKey(
    
    name: r'machineStatusId',
    required: true,
    includeIfNull: true,
  )


  final Object? machineStatusId;



      /// Current machine status
  @JsonKey(
    
    name: r'status',
    required: true,
    includeIfNull: true,
  )


  final MachineDtoStatusEnum? status;



      /// Current running program (if any)
  @JsonKey(
    
    name: r'currentProgramId',
    required: true,
    includeIfNull: true,
  )


  final Object? currentProgramId;



      /// Compatible programs
  @JsonKey(
    
    name: r'programIds',
    required: true,
    includeIfNull: false,
  )


  final List<String> programIds;





    @override
    bool operator ==(Object other) => identical(this, other) || other is MachineDto &&
      other.id == id &&
      other.name == name &&
      other.type == type &&
      other.price == price &&
      other.laundryId == laundryId &&
      other.personId == personId &&
      other.machineStatusId == machineStatusId &&
      other.status == status &&
      other.currentProgramId == currentProgramId &&
      other.programIds == programIds;

    @override
    int get hashCode =>
        id.hashCode +
        name.hashCode +
        type.hashCode +
        price.hashCode +
        laundryId.hashCode +
        (personId == null ? 0 : personId.hashCode) +
        (machineStatusId == null ? 0 : machineStatusId.hashCode) +
        (status == null ? 0 : status.hashCode) +
        (currentProgramId == null ? 0 : currentProgramId.hashCode) +
        programIds.hashCode;

  factory MachineDto.fromJson(Map<String, dynamic> json) => _$MachineDtoFromJson(json);

  Map<String, dynamic> toJson() => _$MachineDtoToJson(this);

  @override
  String toString() {
    return toJson().toString();
  }

}

/// Type of machine
enum MachineDtoTypeEnum {
    /// Type of machine
@JsonValue(r'WASHER')
WASHER(r'WASHER'),
    /// Type of machine
@JsonValue(r'DRYER')
DRYER(r'DRYER');

const MachineDtoTypeEnum(this.value);

final String value;

@override
String toString() => value;
}


/// Current machine status
enum MachineDtoStatusEnum {
    /// Current machine status
@JsonValue(r'AVAILABLE')
AVAILABLE(r'AVAILABLE'),
    /// Current machine status
@JsonValue(r'RUNNING')
RUNNING(r'RUNNING'),
    /// Current machine status
@JsonValue(r'PAUSED')
PAUSED(r'PAUSED'),
    /// Current machine status
@JsonValue(r'OUT_OF_ORDER')
OUT_OF_ORDER(r'OUT_OF_ORDER');

const MachineDtoStatusEnum(this.value);

final String value;

@override
String toString() => value;
}


