import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";

export class CreatePostDto implements Prisma.PostCreateInput{
    @ApiProperty()
    title: string;
    @ApiProperty()
    content: string;
    @ApiProperty()
    createdAt?: string | Date;
    @ApiProperty()
    updatedAt?: string | Date;
    @ApiProperty()
    deletedAt?: string | Date;
    @ApiProperty()
    author: Prisma.UserCreateNestedOneWithoutPostsInput;
    @ApiProperty()
    comments?: Prisma.CommentCreateNestedManyWithoutPostInput;
    @ApiPropertyOptional()
    likes?: Prisma.LikeCreateNestedManyWithoutPostInput;
}
