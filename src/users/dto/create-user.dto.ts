/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";

//DTO: Data Transfer object is just a schema representation for of whatever object you want to use intermediary way to transfer information.
export class CreateUserDto {
    @ApiProperty()
    name: string;

    @ApiProperty({required: false})
    age?: number;
}