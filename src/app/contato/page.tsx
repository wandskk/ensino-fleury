import Contact from "@/components/Contact/Contact";
import Heading from "@/components/Heading/Heading";
import React from "react";

import { contactData } from "@/resouces/utils/contact/contactData";
import { ContactServices } from "@/services/modules/contact";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const seo = await ContactServices.getContactSeo();
  console.log(seo);
  const { title, description, ogTitle, ogDescription } = seo;

  return {
    title,
    description,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      images: ["/og-image.png"],
    },
  };
}

const ContactPage = async () => {
  const data = await ContactServices.getContactPage();
  const { info, titulo: title, contato } = data;
  const { iconesLinksMediasSociais } = info;
  const { breadcrumb } = contactData;

  return (
    <>
      <Heading title={title} breadcrumb={breadcrumb} />
      <Contact
        info={info}
        socialsLink={iconesLinksMediasSociais}
        formContato={contato}
      />
    </>
  );
};

export default ContactPage;
