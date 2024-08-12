import Link from "next/link";
import React from "react";

import { FaWhatsapp } from "react-icons/fa";

import "@/styles/Whatsapp/Whatsapp.scss";

interface WhatsappProps {
  url: string;
}

const Whatsapp: React.FC<WhatsappProps> = ({ url }) => {
  return (
    <a href={url} title="Link flutuante" className="whatsapp">
      <FaWhatsapp />
    </a>
  );
};

export default Whatsapp;
