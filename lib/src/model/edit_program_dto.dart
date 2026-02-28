//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:copy_with_extension/copy_with_extension.dart';
import 'package:json_annotation/json_annotation.dart';

part 'edit_program_dto.g.dart';


@CopyWith()
@JsonSerializable(
  checked: true,
  createToJson: true,
  disallowUnrecognizedKeys: false,
  explicitToJson: true,
)
class EditProgramDto {
  /// Returns a new [EditProgramDto] instance.
  EditProgramDto({

     this.name,

     this.temperature,

     this.speed,

     this.duration,

     this.machineIds,
  });

  @JsonKey(
    
    name: r'name',
    required: false,
    includeIfNull: false,
  )


  final String? name;



  @JsonKey(
    
    name: r'temperature',
    required: false,
    includeIfNull: false,
  )


  final num? temperature;



  @JsonKey(
    
    name: r'speed',
    required: false,
    includeIfNull: false,
  )


  final num? speed;



  @JsonKey(
    
    name: r'duration',
    required: false,
    includeIfNull: false,
  )


  final num? duration;



  @JsonKey(
    
    name: r'machineIds',
    required: false,
    includeIfNull: false,
  )


  final List<String>? machineIds;





    @override
    bool operator ==(Object other) => identical(this, other) || other is EditProgramDto &&
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

  factory EditProgramDto.fromJson(Map<String, dynamic> json) => _$EditProgramDtoFromJson(json);

  Map<String, dynamic> toJson() => _$EditProgramDtoToJson(this);

  @override
  String toString() {
    return toJson().toString();
  }

}

