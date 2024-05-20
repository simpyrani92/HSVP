export interface IPropertyBase{
    Id:number;
    SellRent:number;
    Name:string;
    PType:string;
    FType:string;
    Price:number;
    Image?:string;
    city:string;
    BHK:string;
    BuiltArea:number;
    RTM:number;
    readyToMove?: boolean;
    estPossessionOn?: string;
    
}