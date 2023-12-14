import { describe, expect, it } from "vitest";
import { handler } from "./createUser";
import { INVALID_BODY, INVALID_CPF, PASSWORD_WITHOUT_NUMBER, PASSWORD_WITHOUT_UPPERCASE, SHORT_PASSWORD, SUCCESS } from "../responses";
import { cpf } from "cpf-cnpj-validator";

describe("create-user-lambda", () => {
    const validCPF = cpf.generate()
    const invalidCPF  = "111.111.111-11"

    it("should not create if body is invalid", async () => {
        const res = await handler({ body: JSON.stringify("invalid body") });
        expect(res).toEqual(INVALID_BODY);
    })
    it("should not create if cpf is invalid", async () => {
        const res = await handler({ body: JSON.stringify({ cpf: invalidCPF, password: "Strong12345678ç#" }) });
        expect(res).toEqual(INVALID_CPF);
    })
    it("should no create if password does not have at least 8 characters", async () => {
        const res = await handler({ body: JSON.stringify({ cpf: validCPF, password: "weak" })});
        expect(res).toEqual(SHORT_PASSWORD);
    })
    it("should no create if password does not have at least 1 number", async () => {
        const res = await handler({ body: JSON.stringify({ cpf: validCPF, password: "StrongPassword" })});
        expect(res).toEqual(PASSWORD_WITHOUT_NUMBER);
    })
    it("should not create if password does not have at least one uppercase letter", async () => {
        const res = await handler({ body: JSON.stringify({ cpf: validCPF, password: "strongpassword123" })});
        expect(res).toEqual(PASSWORD_WITHOUT_UPPERCASE);
    })
    it("should create if everything is valid", async () => {
        const res = await handler({ body: JSON.stringify({ cpf: validCPF, password: "Strong12345678ç#" })});
        expect(res).toEqual(SUCCESS);
    })
});
