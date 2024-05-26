import { IsEmail, IsString, IsNotEmpty, Length } from 'class-validator';

class BaseUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(9,32)
  public password: string;
}

export class CreateUserDto extends BaseUserDto {
  @IsEmail()
  public email: string;
}

export class UpdateUserDto extends BaseUserDto {}
