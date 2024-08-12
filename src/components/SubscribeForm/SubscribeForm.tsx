"use client";

import React from "react";
import Button from "@/components/Button/Button";
import FieldError from "@/components/FieldError/FieldError";

import { TextField, ThemeProvider, createTheme } from "@mui/material";
import { useFormik } from "formik";
import { telephoneMask } from "@/resouces/helpers/telephone/telephoneMask";
import { SubscribeFormProps } from "@/types/SubscribeForm/SubscribeFormProps.types";
import { schema } from "./schema/subscribeForm";
import { FormServices } from "@/services/modules/form";

import "@/styles/SubscribeForm/SubscribeForm.scss";

const SubscribeForm = () => {
  const [isSent, setIsSent] = React.useState(false);

  async function handleSubmit(
    values: SubscribeFormProps,
    resetForm: () => void
  ) {
    try {
      const { name, fone, email, areaOfActivity } = values;
      const sendMail = await FormServices.sendSubscribeForm(
        name,
        email,
        fone,
        areaOfActivity
      );

      if (sendMail.documentId) {
        setIsSent(true);
        resetForm();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: "#003A6A",
      },
    },
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      fone: "",
      email: "",
      areaOfActivity: "",
    },
    validateOnMount: true,
    onSubmit: (values, { resetForm }) => handleSubmit(values, resetForm),
    validationSchema: schema,
  });

  const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    let input = event.target;

    if (input) {
      input.value = telephoneMask(input.value);
    }
  };

  return (
    <form
      className="subscribeForm"
      onSubmit={(e) => {
        e.preventDefault;
        formik.handleSubmit(e);
      }}
    >
      <ThemeProvider theme={theme}>
        <div className="subscribeForm__header">
          <h2 className="subscribeForm__title">Quer continuar informado?</h2>
          <p className="subscribeForm__description">
            Na Ensino Fleury, oferecemos cursos online de alta qualidade para
            profissionais da área médica, combinando conhecimento especializado
            com tecnologia avançada para impulsionar sua carreira e transformar
            a saúde.
          </p>
        </div>
        <div className="subscribeForm__fields">
          <div className="subscribeForm__input">
            <TextField
              id="name"
              disabled={isSent}
              name="name"
              label="Nome"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange("name")}
              onBlur={formik.handleBlur("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <FieldError text={formik.errors.name} />
            )}
          </div>
          <div className="subscribeForm__input">
            <TextField
              id="email"
              disabled={isSent}
              name="email"
              label="E-mail"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <FieldError text={formik.errors.email} />
            )}
          </div>
          <div className="subscribeForm__input">
            <TextField
              id="fone"
              disabled={isSent}
              name="fone"
              label="Telefone"
              type="text"
              inputProps={{ maxLength: 15 }}
              onInput={handlePhone}
              value={formik.values.fone}
              onChange={formik.handleChange("fone")}
              onBlur={formik.handleBlur("fone")}
            />
            {formik.touched.fone && formik.errors.fone && (
              <FieldError text={formik.errors.fone} />
            )}
          </div>
          <div className="subscribeForm__input">
            <TextField
              id="areaOfActivity"
              disabled={isSent}
              name="areaOfActivity"
              label="Área de atuação"
              type="text"
              value={formik.values.areaOfActivity}
              onChange={formik.handleChange("areaOfActivity")}
              onBlur={formik.handleBlur("areaOfActivity")}
            />
            {formik.touched.areaOfActivity && formik.errors.areaOfActivity && (
              <FieldError text={formik.errors.areaOfActivity} />
            )}
          </div>
        </div>
        <div className="subscribeForm__submit">
          <Button disabled={isSent} variant="red">
            {!isSent ? "Cadastrar" : "Formulário enviado!"}
          </Button>
        </div>
      </ThemeProvider>
    </form>
  );
};

export default SubscribeForm;
