//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:copy_with_extension/copy_with_extension.dart';
import 'package:json_annotation/json_annotation.dart';

part 'edit_user_dto.g.dart';


@CopyWith()
@JsonSerializable(
  checked: true,
  createToJson: true,
  disallowUnrecognizedKeys: false,
  explicitToJson: true,
)
class EditUserDto {
  /// Returns a new [EditUserDto] instance.
  EditUserDto({

     this.email,

     this.personId,
  });

  @JsonKey(
    
    name: r'email',
    required: false,
    includeIfNull: false,
  )


  final String? email;



  @JsonKey(
    
    name: r'personId',
    required: false,
    includeIfNull: false,
  )


  final Object? personId;





    @override
    bool operator ==(Object other) => identical(this, other) || other is EditUserDto &&
      other.email == email &&
      other.personId == personId;

    @override
    int get hashCode =>
        email.hashCode +
        personId.hashCode;

  factory EditUserDto.fromJson(Map<String, dynamic> json) => _$EditUserDtoFromJson(json);

  Map<String, dynamic> toJson() => _$EditUserDtoToJson(this);

  @override
  String toString() {
    return toJson().toString();
  }

}

