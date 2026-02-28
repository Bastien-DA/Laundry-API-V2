//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:copy_with_extension/copy_with_extension.dart';
import 'package:json_annotation/json_annotation.dart';

part 'edit_machine_dto.g.dart';


@CopyWith()
@JsonSerializable(
  checked: true,
  createToJson: true,
  disallowUnrecognizedKeys: false,
  explicitToJson: true,
)
class EditMachineDto {
  /// Returns a new [EditMachineDto] instance.
  EditMachineDto({

     this.name,

     this.type,

     this.price,

     this.personId,

     this.programIds,
  });

  @JsonKey(
    
    name: r'name',
    required: false,
    includeIfNull: false,
  )


  final String? name;



  @JsonKey(
    
    name: r'type',
    required: false,
    includeIfNull: false,
  )


  final String? type;



  @JsonKey(
    
    name: r'price',
    required: false,
    includeIfNull: false,
  )


  final String? price;



  @JsonKey(
    
    name: r'personId',
    required: false,
    includeIfNull: false,
  )


  final Object? personId;



  @JsonKey(
    
    name: r'programIds',
    required: false,
    includeIfNull: false,
  )


  final List<String>? programIds;





    @override
    bool operator ==(Object other) => identical(this, other) || other is EditMachineDto &&
      other.name == name &&
      other.type == type &&
      other.price == price &&
      other.personId == personId &&
      other.programIds == programIds;

    @override
    int get hashCode =>
        name.hashCode +
        type.hashCode +
        price.hashCode +
        personId.hashCode +
        programIds.hashCode;

  factory EditMachineDto.fromJson(Map<String, dynamic> json) => _$EditMachineDtoFromJson(json);

  Map<String, dynamic> toJson() => _$EditMachineDtoToJson(this);

  @override
  String toString() {
    return toJson().toString();
  }

}

