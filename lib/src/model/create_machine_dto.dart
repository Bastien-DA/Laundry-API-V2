//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:copy_with_extension/copy_with_extension.dart';
import 'package:json_annotation/json_annotation.dart';

part 'create_machine_dto.g.dart';


@CopyWith()
@JsonSerializable(
  checked: true,
  createToJson: true,
  disallowUnrecognizedKeys: false,
  explicitToJson: true,
)
class CreateMachineDto {
  /// Returns a new [CreateMachineDto] instance.
  CreateMachineDto({

    required  this.name,

    required  this.type,

    required  this.price,

    required  this.laundryId,

     this.personId,

     this.programIds,
  });

  @JsonKey(
    
    name: r'name',
    required: true,
    includeIfNull: false,
  )


  final String name;



  @JsonKey(
    
    name: r'type',
    required: true,
    includeIfNull: false,
  )


  final String type;



  @JsonKey(
    
    name: r'price',
    required: true,
    includeIfNull: false,
  )


  final String price;



  @JsonKey(
    
    name: r'laundryId',
    required: true,
    includeIfNull: false,
  )


  final String laundryId;



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
    bool operator ==(Object other) => identical(this, other) || other is CreateMachineDto &&
      other.name == name &&
      other.type == type &&
      other.price == price &&
      other.laundryId == laundryId &&
      other.personId == personId &&
      other.programIds == programIds;

    @override
    int get hashCode =>
        name.hashCode +
        type.hashCode +
        price.hashCode +
        laundryId.hashCode +
        personId.hashCode +
        programIds.hashCode;

  factory CreateMachineDto.fromJson(Map<String, dynamic> json) => _$CreateMachineDtoFromJson(json);

  Map<String, dynamic> toJson() => _$CreateMachineDtoToJson(this);

  @override
  String toString() {
    return toJson().toString();
  }

}

