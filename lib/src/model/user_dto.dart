//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:copy_with_extension/copy_with_extension.dart';
import 'package:json_annotation/json_annotation.dart';

part 'user_dto.g.dart';


@CopyWith()
@JsonSerializable(
  checked: true,
  createToJson: true,
  disallowUnrecognizedKeys: false,
  explicitToJson: true,
)
class UserDto {
  /// Returns a new [UserDto] instance.
  UserDto({

    required  this.id,

    required  this.email,

    required  this.createdAt,

    required  this.personId,
  });

  @JsonKey(
    
    name: r'id',
    required: true,
    includeIfNull: false,
  )


  final String id;



  @JsonKey(
    
    name: r'email',
    required: true,
    includeIfNull: false,
  )


  final String email;



      /// ms timestamp
  @JsonKey(
    
    name: r'createdAt',
    required: true,
    includeIfNull: false,
  )


  final num createdAt;



  @JsonKey(
    
    name: r'personId',
    required: true,
    includeIfNull: true,
  )


  final Object? personId;





    @override
    bool operator ==(Object other) => identical(this, other) || other is UserDto &&
      other.id == id &&
      other.email == email &&
      other.createdAt == createdAt &&
      other.personId == personId;

    @override
    int get hashCode =>
        id.hashCode +
        email.hashCode +
        createdAt.hashCode +
        (personId == null ? 0 : personId.hashCode);

  factory UserDto.fromJson(Map<String, dynamic> json) => _$UserDtoFromJson(json);

  Map<String, dynamic> toJson() => _$UserDtoToJson(this);

  @override
  String toString() {
    return toJson().toString();
  }

}

