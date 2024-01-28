import { IsOptional, IsEmail, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  name?: string;

  @IsEmail({}, { message: 'Email is not valid' })
  readonly email: string;
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
  readonly password: string;
}
