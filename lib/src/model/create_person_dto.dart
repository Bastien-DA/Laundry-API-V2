//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:copy_with_extension/copy_with_extension.dart';
import 'package:json_annotation/json_annotation.dart';

part 'create_person_dto.g.dart';


@CopyWith()
@JsonSerializable(
  checked: true,
  createToJson: true,
  disallowUnrecognizedKeys: false,
  explicitToJson: true,
)
class CreatePersonDto {
  /// Returns a new [CreatePersonDto] instance.
  CreatePersonDto({

    required  this.username,

    required  this.personType,

     this.laundryIds,

     this.machineIds,

     this.userId,
  });

  @JsonKey(
    
    name: r'username',
    required: true,
    includeIfNull: false,
  )


  final String username;



  @JsonKey(
    
    name: r'personType',
    required: true,
    includeIfNull: false,
  )


  final String personType;



  @JsonKey(
    
    name: r'laundryIds',
    required: false,
    includeIfNull: false,
  )


  final List<String>? laundryIds;



  @JsonKey(
    
    name: r'machineIds',
    required: false,
    includeIfNull: false,
  )


  final List<String>? machineIds;



  @JsonKey(
    
    name: r'userId',
    required: false,
    includeIfNull: false,
  )


  final String? userId;





    @override
    bool operator ==(Object other) => identical(this, other) || other is CreatePersonDto &&
      other.username == username &&
      other.personType == personType &&
      other.laundryIds == laundryIds &&
      other.machineIds == machineIds &&
      other.userId == userId;

    @override
    int get hashCode =>
        username.hashCode +
        personType.hashCode +
        laundryIds.hashCode +
        machineIds.hashCode +
        userId.hashCode;

  factory CreatePersonDto.fromJson(Map<String, dynamic> json) => _$CreatePersonDtoFromJson(json);

  Map<String, dynamic> toJson() => _$CreatePersonDtoToJson(this);

  @override
  String toString() {
    return toJson().toString();
  }

}

