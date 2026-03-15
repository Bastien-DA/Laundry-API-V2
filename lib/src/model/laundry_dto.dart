//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:copy_with_extension/copy_with_extension.dart';
import 'package:json_annotation/json_annotation.dart';

part 'laundry_dto.g.dart';


@CopyWith()
@JsonSerializable(
  checked: true,
  createToJson: true,
  disallowUnrecognizedKeys: false,
  explicitToJson: true,
)
class LaundryDto {
  /// Returns a new [LaundryDto] instance.
  LaundryDto({

    required  this.id,

    required  this.name,

    required  this.hours,

    required  this.address,

    required  this.latitude,

    required  this.longitude,

    required  this.createdAt,

    required  this.personId,

    required  this.machineIds,
  });

      /// Unique identifier of the laundry
  @JsonKey(
    
    name: r'id',
    required: true,
    includeIfNull: false,
  )


  final String id;



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



      /// Latitude stored as string (Decimal)
  @JsonKey(
    
    name: r'latitude',
    required: true,
    includeIfNull: false,
  )


  final String latitude;



      /// Longitude stored as string (Decimal)
  @JsonKey(
    
    name: r'longitude',
    required: true,
    includeIfNull: false,
  )


  final String longitude;



      /// Creation timestamp in milliseconds
  @JsonKey(
    
    name: r'createdAt',
    required: true,
    includeIfNull: false,
  )


  final num createdAt;



      /// Owner person id
  @JsonKey(
    
    name: r'personId',
    required: true,
    includeIfNull: false,
  )


  final String personId;



      /// List of machine ids attached to the laundry
  @JsonKey(
    
    name: r'machineIds',
    required: true,
    includeIfNull: false,
  )


  final List<String> machineIds;





    @override
    bool operator ==(Object other) => identical(this, other) || other is LaundryDto &&
      other.id == id &&
      other.name == name &&
      other.hours == hours &&
      other.address == address &&
      other.latitude == latitude &&
      other.longitude == longitude &&
      other.createdAt == createdAt &&
      other.personId == personId &&
      other.machineIds == machineIds;

    @override
    int get hashCode =>
        id.hashCode +
        name.hashCode +
        hours.hashCode +
        address.hashCode +
        latitude.hashCode +
        longitude.hashCode +
        createdAt.hashCode +
        personId.hashCode +
        machineIds.hashCode;

  factory LaundryDto.fromJson(Map<String, dynamic> json) => _$LaundryDtoFromJson(json);

  Map<String, dynamic> toJson() => _$LaundryDtoToJson(this);

  @override
  String toString() {
    return toJson().toString();
  }

}

