import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString, IsStrongPassword, isEmail } from "class-validator";


export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly name?: string;

  @IsEmail({}, { message: 'Email is not valid' })
  @IsOptional()
  @ApiProperty()
  readonly email?: string;

  @IsOptional()
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 0,
    },
    { message: 'Password is not strong enough' },
  )
  @ApiProperty()
  readonly password?: string;
}