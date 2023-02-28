/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";

// This is the class which represents the shape of the user objects In future if get into DB connections this entity class also represents database tables. Entities usually map one to one with database tables.
export class User {
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    name?: string;
}