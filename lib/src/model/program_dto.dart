//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:copy_with_extension/copy_with_extension.dart';
import 'package:json_annotation/json_annotation.dart';

part 'program_dto.g.dart';


@CopyWith()
@JsonSerializable(
  checked: true,
  createToJson: true,
  disallowUnrecognizedKeys: false,
  explicitToJson: true,
)
class ProgramDto {
  /// Returns a new [ProgramDto] instance.
  ProgramDto({

    required  this.id,

    required  this.name,

    required  this.temperature,

    required  this.speed,

    required  this.duration,

    required  this.machineIds,

    required  this.machineStatusIds,
  });

      /// Unique identifier of the program
  @JsonKey(
    
    name: r'id',
    required: true,
    includeIfNull: false,
  )


  final String id;



      /// Program display name
  @JsonKey(
    
    name: r'name',
    required: true,
    includeIfNull: false,
  )


  final String name;



      /// Temperature in °C
  @JsonKey(
    
    name: r'temperature',
    required: true,
    includeIfNull: false,
  )


  final num temperature;



      /// Spin speed in RPM
  @JsonKey(
    
    name: r'speed',
    required: true,
    includeIfNull: false,
  )


  final num speed;



      /// Duration in minutes
  @JsonKey(
    
    name: r'duration',
    required: true,
    includeIfNull: false,
  )


  final num duration;



      /// Machines compatible with this program
  @JsonKey(
    
    name: r'machineIds',
    required: true,
    includeIfNull: false,
  )


  final List<String> machineIds;



      /// MachineStatus entries currently using this program
  @JsonKey(
    
    name: r'machineStatusIds',
    required: true,
    includeIfNull: false,
  )


  final List<String> machineStatusIds;





    @override
    bool operator ==(Object other) => identical(this, other) || other is ProgramDto &&
      other.id == id &&
      other.name == name &&
      other.temperature == temperature &&
      other.speed == speed &&
      other.duration == duration &&
      other.machineIds == machineIds &&
      other.machineStatusIds == machineStatusIds;

    @override
    int get hashCode =>
        id.hashCode +
        name.hashCode +
        temperature.hashCode +
        speed.hashCode +
        duration.hashCode +
        machineIds.hashCode +
        machineStatusIds.hashCode;

  factory ProgramDto.fromJson(Map<String, dynamic> json) => _$ProgramDtoFromJson(json);

  Map<String, dynamic> toJson() => _$ProgramDtoToJson(this);

  @override
  String toString() {
    return toJson().toString();
  }

}

