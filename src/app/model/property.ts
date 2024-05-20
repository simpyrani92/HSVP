import { IPropertyBase } from "./Ipropertybase";

export class Property implements IPropertyBase {
    Id!: number;
    SellRent!: number;
    Name!: string;
    PType!: string;
    FType!: string;
    Price!: number;
    Image?: string | undefined;
    BHK!: string;
    BuiltArea!: number;
    RTM!: number;
    city!: string;
    CarpetArea: number = 0;
    Address: string = "";
    Address2?: string;
    FloorNo?: string;
    TotalFloor?: String;
    AOP?: string;
    Maintainance?: string;
    Security?: number;
    Gated?: string;
 MainEntrance?:string;
    Description?: string;
    PostedOn?: string
    Maintnance?: number;
    Possession?:string;
    readyToMove!: boolean;


    // photos?: Photo[];
}