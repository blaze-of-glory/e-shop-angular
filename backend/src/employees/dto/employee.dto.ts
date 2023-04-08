import { IsInt, IsString, IsUrl } from 'class-validator';

export class EmployeeDto {
    @IsUrl()
    img: string;

    @IsString()
    name: string;

    @IsString()
    surname: string;

    @IsInt()
    age: number;

    @IsString()
    position: string;

    @IsInt()
    salary: number;
}
