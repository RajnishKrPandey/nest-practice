/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, MaxLength } from "class-validator";

//we usually use class decorators in dto
export class CreateUserDto {
    @ApiProperty()
    @IsAlphanumeric()
    @MaxLength(20)
    name: string;

    // @ApiProperty({required: false})
    // age?: number;
}