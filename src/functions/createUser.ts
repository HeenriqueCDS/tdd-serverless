import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { bodySchema } from "../schema";
import {
  INVALID_BODY,
  INVALID_CPF,
  PASSWORD_WITHOUT_NUMBER,
  PASSWORD_WITHOUT_UPPERCASE,
  SHORT_PASSWORD,
  SUCCESS,
} from "../responses";
import { cpf as validator } from "cpf-cnpj-validator";

export const handler = async (
  event: Partial<APIGatewayProxyEvent>
): Promise<APIGatewayProxyResult> => {
  const result = bodySchema.safeParse(JSON.parse(event.body!));

  if (!result.success) return INVALID_BODY
  const {cpf, password} = result.data

  if (!validator.isValid(cpf)) return INVALID_CPF
  if (!(password.length >= 8)) return SHORT_PASSWORD
  if (!/\d/.test(password)) return PASSWORD_WITHOUT_NUMBER
  if (!/[A-Z]/.test(password)) return PASSWORD_WITHOUT_UPPERCASE

  return SUCCESS;
};
