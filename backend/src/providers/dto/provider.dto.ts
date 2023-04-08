import { IsDateString, IsString, IsUrl } from 'class-validator';

export class ProviderDto {
    @IsString()
    title: string;

    @IsString()
    subtitle: string;

    @IsUrl()
    img: string;

    @IsString()
    description: string;

    @IsDateString()
    foundingDate: string;
}
