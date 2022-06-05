import { ApiProperty } from '@nestjs/swagger';

export class MetadataDto {
  @ApiProperty({
    required: true,
    description: 'Name of this object',
    examples: ['Foo', 'Bar', 'Steven'],
  })
  name: string;
  @ApiProperty({
    required: false,
    description: 'Description for this object',
  })
  description?: string;
  @ApiProperty({
    required: false,
    description: 'Author of this object',
  })
  author?: string;
}
