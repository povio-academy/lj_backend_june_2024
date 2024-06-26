import { applyDecorators, Type } from '@nestjs/common';
import {
    ApiExtraModels,
    ApiOkResponse,
    ApiResponseOptions,
    getSchemaPath,
} from '@nestjs/swagger';
import { PagedResDto } from '~data-api/common/dto/paged.res.dto';
import { PagingMetadataDto } from '~data-api/common/dto/paging-metadata.dto';

export function ApiPaginationResponse<TModel extends Type>(
    model: TModel,
    response: (
        options?: ApiResponseOptions,
    ) => MethodDecorator & ClassDecorator = ApiOkResponse,
): any {
    return applyDecorators(
        ApiExtraModels(model),
        ApiExtraModels(PagedResDto, PagingMetadataDto),
        response({
            schema: {
                title: `PaginationResponseOf${model.name}`,
                type: 'object',
                properties: {
                    data: {
                        type: 'array',
                        items: { $ref: getSchemaPath(model) },
                    },
                    metadata: {
                        type: 'object',
                        $ref: getSchemaPath(PagingMetadataDto),
                    },
                },
            },
        }),
    );
}
