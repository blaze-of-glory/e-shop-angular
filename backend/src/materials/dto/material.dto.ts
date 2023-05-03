import { IsInt, IsString, IsUrl, IsNotEmptyObject } from 'class-validator';

export class MaterialDetailsDto {
    @IsUrl()
    img: string;

    @IsString()
    title: string;

    @IsString()
    description: string;
}

export class MaterialDto {
    @IsInt()
    providerId: number;

    @IsNotEmptyObject()
    materialDetails: MaterialDetailsDto;
}
