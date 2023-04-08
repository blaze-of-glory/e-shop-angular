import { IsInt, IsString, IsUrl } from 'class-validator';

export class MaterialDto {
    @IsInt()
    providerId: number;

    materialDetails: MaterialDetailsDto;
}

export class MaterialDetailsDto {
    @IsUrl()
    img: string;

    @IsString()
    title: string;

    @IsString()
    description: string;
}
