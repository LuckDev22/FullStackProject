import { z } from "zod";
import {
    clientSchema,
    clientSchemaRequest,
    clientSchemaResponse,
} from "../schemas/client.schemas";
import { DeepPartial } from "typeorm";

export type TClient = z.infer<typeof clientSchema>;
export type TClientRequest = z.infer<typeof clientSchemaRequest>;
export type TClientResponse = z.infer<typeof clientSchemaResponse>;
export type TClientsResponse = z.infer<typeof clientSchemaResponse>;
export type TClientUpdateRequest = DeepPartial<TClientRequest>;
