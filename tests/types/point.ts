// THIS FILE IS AUTOMATICALLY GENERATED BY SPACETIMEDB. EDITS TO THIS FILE
// WILL NOT BE SAVED. MODIFY TABLES IN RUST INSTEAD.

// @ts-ignore
import {
  __SPACETIMEDB__,
  AlgebraicType,
  ProductType,
  BuiltinType,
  ProductTypeElement,
  SumType,
  SumTypeVariant,
  IDatabaseTable,
  AlgebraicValue,
  ReducerEvent,
} from "../../src/index";

export class Point extends IDatabaseTable {
  public static tableName = "Point";
  public x: number;
  public y: number;

  public static primaryKey: string | undefined = undefined;

  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
  }

  public static serialize(value: Point): object {
    return [value.x, value.y];
  }

  public static getAlgebraicType(): AlgebraicType {
    return AlgebraicType.createProductType([
      new ProductTypeElement(
        "x",
        AlgebraicType.createPrimitiveType(BuiltinType.Type.U16)
      ),
      new ProductTypeElement(
        "y",
        AlgebraicType.createPrimitiveType(BuiltinType.Type.U16)
      ),
    ]);
  }

  public static fromValue(value: AlgebraicValue): Point {
    let productValue = value.asProductValue();
    let __x = productValue.elements[0].asNumber();
    let __y = productValue.elements[1].asNumber();
    return new this(__x, __y);
  }
}

export default Point;

__SPACETIMEDB__.registerComponent("Point", Point);
