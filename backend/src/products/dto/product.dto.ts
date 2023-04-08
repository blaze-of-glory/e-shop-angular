import { IsInt, IsNumberString, IsString, IsUrl } from 'class-validator';

export class ProductDto {
    @IsInt()
    providerId: number;

    @IsInt()
    materialId: number;

    productDetails: ProductDetailsDto;
}

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
