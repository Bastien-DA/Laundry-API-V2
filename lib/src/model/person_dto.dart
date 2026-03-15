//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:copy_with_extension/copy_with_extension.dart';
import 'package:json_annotation/json_annotation.dart';

part 'person_dto.g.dart';


@CopyWith()
@JsonSerializable(
  checked: true,
  createToJson: true,
  disallowUnrecognizedKeys: false,
  explicitToJson: true,
)
class PersonDto {
  /// Returns a new [PersonDto] instance.
  PersonDto({

    required  this.id,

    required  this.username,

    required  this.personType,

    required  this.laundryIds,

    required  this.machineIds,

    required  this.userId,
  });

      /// Unique identifier of the person
  @JsonKey(
    
    name: r'id',
    required: true,
    includeIfNull: false,
  )


  final String id;



      /// Public username
  @JsonKey(
    
    name: r'username',
    required: true,
    includeIfNull: false,
  )


  final String username;



      /// Role of the person
  @JsonKey(
    
    name: r'personType',
    required: true,
    includeIfNull: false,
  )


  final PersonDtoPersonTypeEnum personType;



      /// IDs of laundries owned by this person
  @JsonKey(
    
    name: r'laundryIds',
    required: true,
    includeIfNull: false,
  )


  final List<String> laundryIds;



      /// IDs of machines assigned to this person
  @JsonKey(
    
    name: r'machineIds',
    required: true,
    includeIfNull: false,
  )


  final List<String> machineIds;



      /// Linked user account (0..1)
  @JsonKey(
    
    name: r'userId',
    required: true,
    includeIfNull: true,
  )


  final Object? userId;





    @override
    bool operator ==(Object other) => identical(this, other) || other is PersonDto &&
      other.id == id &&
      other.username == username &&
      other.personType == personType &&
      other.laundryIds == laundryIds &&
      other.machineIds == machineIds &&
      other.userId == userId;

    @override
    int get hashCode =>
        id.hashCode +
        username.hashCode +
        personType.hashCode +
        laundryIds.hashCode +
        machineIds.hashCode +
        (userId == null ? 0 : userId.hashCode);

  factory PersonDto.fromJson(Map<String, dynamic> json) => _$PersonDtoFromJson(json);

  Map<String, dynamic> toJson() => _$PersonDtoToJson(this);

  @override
  String toString() {
    return toJson().toString();
  }

}

/// Role of the person
enum PersonDtoPersonTypeEnum {
    /// Role of the person
@JsonValue(r'ADMIN')
ADMIN(r'ADMIN'),
    /// Role of the person
@JsonValue(r'CUSTOMER')
CUSTOMER(r'CUSTOMER'),
    /// Role of the person
@JsonValue(r'TECHNICIAN')
TECHNICIAN(r'TECHNICIAN');

const PersonDtoPersonTypeEnum(this.value);

final String value;

@override
String toString() => value;
}


