import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsAlphanumeric(null, {
    message: 'Username does not allow other than alpha numeric chars.',
  })
  @IsNotEmpty()
  user_name: string;

  @IsNotEmpty()
  @IsEmail(null, { message: 'Please provide valid Email.' })
  user_email: string;

  @IsString()
  @IsEnum(['economist', 'gatekeeper', 'user'])
  role: string;

  @IsString() //need to be changed
  updated_at: string;

  @IsString() //need to be changed
  updated_by: string;
}
