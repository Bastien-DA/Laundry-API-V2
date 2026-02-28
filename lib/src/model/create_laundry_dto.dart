//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:copy_with_extension/copy_with_extension.dart';
import 'package:json_annotation/json_annotation.dart';

part 'create_laundry_dto.g.dart';


@CopyWith()
@JsonSerializable(
  checked: true,
  createToJson: true,
  disallowUnrecognizedKeys: false,
  explicitToJson: true,
)
class CreateLaundryDto {
  /// Returns a new [CreateLaundryDto] instance.
  CreateLaundryDto({

    required  this.name,

    required  this.hours,

    required  this.address,

    required  this.latitude,

    required  this.longitude,

    required  this.personId,

     this.machineIds,
  });

  @JsonKey(
    
    name: r'name',
    required: true,
    includeIfNull: false,
  )


  final String name;



  @JsonKey(
    
    name: r'hours',
    required: true,
    includeIfNull: false,
  )


  final String hours;



  @JsonKey(
    
    name: r'address',
    required: true,
    includeIfNull: false,
  )


  final String address;



  @JsonKey(
    
    name: r'latitude',
    required: true,
    includeIfNull: false,
  )


  final String latitude;



  @JsonKey(
    
    name: r'longitude',
    required: true,
    includeIfNull: false,
  )


  final String longitude;



  @JsonKey(
    
    name: r'personId',
    required: true,
    includeIfNull: false,
  )


  final String personId;



  @JsonKey(
    
    name: r'machineIds',
    required: false,
    includeIfNull: false,
  )


  final List<String>? machineIds;





    @override
    bool operator ==(Object other) => identical(this, other) || other is CreateLaundryDto &&
      other.name == name &&
      other.hours == hours &&
      other.address == address &&
      other.latitude == latitude &&
      other.longitude == longitude &&
      other.personId == personId &&
      other.machineIds == machineIds;

    @override
    int get hashCode =>
        name.hashCode +
        hours.hashCode +
        address.hashCode +
        latitude.hashCode +
        longitude.hashCode +
        personId.hashCode +
        machineIds.hashCode;

  factory CreateLaundryDto.fromJson(Map<String, dynamic> json) => _$CreateLaundryDtoFromJson(json);

  Map<String, dynamic> toJson() => _$CreateLaundryDtoToJson(this);

  @override
  String toString() {
    return toJson().toString();
  }

}

