//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:copy_with_extension/copy_with_extension.dart';
import 'package:json_annotation/json_annotation.dart';

part 'create_program_dto.g.dart';


@CopyWith()
@JsonSerializable(
  checked: true,
  createToJson: true,
  disallowUnrecognizedKeys: false,
  explicitToJson: true,
)
class CreateProgramDto {
  /// Returns a new [CreateProgramDto] instance.
  CreateProgramDto({

    required  this.name,

    required  this.temperature,

    required  this.speed,

    required  this.duration,

     this.machineIds,
  });

  @JsonKey(
    
    name: r'name',
    required: true,
    includeIfNull: false,
  )


  final String name;



  @JsonKey(
    
    name: r'temperature',
    required: true,
    includeIfNull: false,
  )


  final num temperature;



  @JsonKey(
    
    name: r'speed',
    required: true,
    includeIfNull: false,
  )


  final num speed;



  @JsonKey(
    
    name: r'duration',
    required: true,
    includeIfNull: false,
  )


  final num duration;



  @JsonKey(
    
    name: r'machineIds',
    required: false,
    includeIfNull: false,
  )


  final List<String>? machineIds;





    @override
    bool operator ==(Object other) => identical(this, other) || other is CreateProgramDto &&
      other.name == name &&
      other.temperature == temperature &&
      other.speed == speed &&
      other.duration == duration &&
      other.machineIds == machineIds;

    @override
    int get hashCode =>
        name.hashCode +
        temperature.hashCode +
        speed.hashCode +
        duration.hashCode +
        machineIds.hashCode;

  factory CreateProgramDto.fromJson(Map<String, dynamic> json) => _$CreateProgramDtoFromJson(json);

  Map<String, dynamic> toJson() => _$CreateProgramDtoToJson(this);

  @override
  String toString() {
    return toJson().toString();
  }

}

