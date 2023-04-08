import { IsString, IsUrl } from 'class-validator';

export class ShopDto {
    @IsUrl()
    img: string;

    @IsString()
    address: string;

    @IsString()
    openTime: string;

    @IsString()
    closeTime: string;
}
