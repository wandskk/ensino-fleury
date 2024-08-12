"use client";

import React from "react";
import Button from "@/components/Button/Button";
import FieldError from "../FieldError/FieldError";

import { useFormik } from "formik";
import { TextField, ThemeProvider, createTheme } from "@mui/material";
import { FormServices } from "@/services/modules/form";
import { SubscribeFormProps } from "@/types/SubscribeForm/SubscribeFormProps.types";
import { schema } from "./schema/contactForm";
import { telephoneMask } from "@/resouces/helpers/telephone/telephoneMask";

import "@/styles/ContactForm/ContactForm.scss";

interface ContactFormProps {
  titulo: string;
  descricao: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ titulo, descricao }) => {
  const [isSent, setIsSent] = React.useState(false);

  async function handleSubmit(
    values: SubscribeFormProps,
    resetForm: () => void
  ) {
    try {
      const { name, fone, email, areaOfActivity, message } = values;
      const sendMail = await FormServices.sendContactForm(
        name,
        email,
        fone,
        areaOfActivity,
        message ?? ""
      );

      if (sendMail && sendMail.status === "ok") {
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
      message: "",
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
      className="contactForm"
      onSubmit={(e) => {
        e.preventDefault;
        formik.handleSubmit(e);
      }}
    >
      <ThemeProvider theme={theme}>
        <div className="contactForm__header">
          <h2 className="contactForm__title">{titulo}</h2>
          <p className="contactForm__description">{descricao}</p>
        </div>
        <div className="contactForm__fields">
          <div className="contactForm__input">
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
          <div className="contactForm__input">
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
          <div className="contactForm__input">
            <TextField
              id="fone"
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
          <div className="contactForm__input">
            <TextField
              id="occupationArea"
              name="occupationArea"
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
          <div className="contactForm__input --message">
            <TextField
              id="message"
              label="Mensagem"
              placeholder="Escreva aqui sua mensagem"
              multiline
              rows={6}
              value={formik.values.message}
              onChange={formik.handleChange("message")}
              onBlur={formik.handleBlur("message")}
            />
            {formik.touched.message && formik.errors.message && (
              <FieldError text={formik.errors.message} />
            )}
          </div>
        </div>
        <div className="contactForm__submit">
          <Button variant="red">
            {!isSent ? "Cadastrar" : "Formulário enviado!"}
          </Button>
        </div>
      </ThemeProvider>
    </form>
  );
};

export default ContactForm;
