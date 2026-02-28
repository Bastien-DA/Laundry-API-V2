//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:copy_with_extension/copy_with_extension.dart';
import 'package:json_annotation/json_annotation.dart';

part 'edit_person_dto.g.dart';


@CopyWith()
@JsonSerializable(
  checked: true,
  createToJson: true,
  disallowUnrecognizedKeys: false,
  explicitToJson: true,
)
class EditPersonDto {
  /// Returns a new [EditPersonDto] instance.
  EditPersonDto({

     this.username,

    required  this.personType,

     this.laundryIds,

     this.machineIds,

     this.userId,
  });

  @JsonKey(
    
    name: r'username',
    required: false,
    includeIfNull: false,
  )


  final String? username;



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


  final Object? userId;





    @override
    bool operator ==(Object other) => identical(this, other) || other is EditPersonDto &&
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

  factory EditPersonDto.fromJson(Map<String, dynamic> json) => _$EditPersonDtoFromJson(json);

  Map<String, dynamic> toJson() => _$EditPersonDtoToJson(this);

  @override
  String toString() {
    return toJson().toString();
  }

}

