import { IsInt, IsNumberString, IsString, IsUrl, IsNotEmptyObject } from 'class-validator';

export class ProductDetailsDto {
    @IsUrl()
    img: string;

    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsString()
    type: string;

    @IsNumberString()
    weight: string;

    @IsNumberString()
    cost: string;
}

export class ProductDto {
    @IsInt()
    providerId: number;

    @IsInt()
    materialId: number;

    @IsNotEmptyObject()
    productDetails: ProductDetailsDto;
}
