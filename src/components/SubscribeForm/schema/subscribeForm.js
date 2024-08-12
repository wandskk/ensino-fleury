import { isValidEmail } from "@/resouces/helpers/email/isValidEmail";
import { isValidName } from "@/resouces/helpers/name/isValidName";
import { isValidTelephone } from "@/resouces/helpers/telephone/isValidTelephone";
import * as Yup from "yup";

export const schema = Yup.object().shape({
  name: Yup.string()
    .required("Preencha o campo de nome")
    .test("isValidName", "Digite um nome válido.", (value) =>
      isValidName(value)
    ),
  fone: Yup.string()
    .required("Preencha o campo de telefone")
    .test("isValidPhone", "Digite um telefone válido.", (value) =>
      isValidTelephone(value)
    ),
  email: Yup.string()
    .required("Preencha o campo de e-mail")
    .test("isValidEmail", "Digite um e-mail válido.", (value) =>
      isValidEmail(value)
    ),
  areaOfActivity: Yup.string().required("Preencha o campo de área de atuação"),
});
