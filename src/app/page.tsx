import HomeFirstSection from "@/components/Home/HomeFirstSection";
import HomeSecondSection from "@/components/Home/HomeSecondSection";
import HomeThirdSection from "@/components/Home/HomeThirdSection";
import HomeFourthSection from "@/components/Home/HomeFourthSection";
import HomeFifthSection from "@/components/Home/HomeFifthSection";
import HomeSixthSection from "@/components/Home/HomeSixthSection";

import { HomeServices } from "@/services/modules/home";
import { CoursesServices } from "@/services/modules/courses";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const seo = await HomeServices.getHomeSeo();
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

export default async function Home() {
  const data = await HomeServices.getHome();
  const courses = await CoursesServices.getCoursesHighlighted();

  const {
    primeiraSecao,
    segundaSecao,
    terceiraSecao,
    quartaSecao,
    quintaSecao,
    sextaSecao,
  } = data;

  return (
    <>
      <HomeFirstSection
        backgroundImage={primeiraSecao.imagemDeFundo}
        slideList={primeiraSecao.slide}
      />
      <HomeSecondSection
        titulo={segundaSecao.titulo}
        descricao={segundaSecao.descricao}
        listItems={segundaSecao.itens}
      />
      <HomeThirdSection
        titulo={terceiraSecao.titulo}
        listItems={terceiraSecao.itens}
      />
      <HomeFourthSection
        titulo={quartaSecao.titulo}
        backgroundImage={quartaSecao.imagemDeFundo}
        coursesList={courses}
      />
      <HomeFifthSection
        titulo={quintaSecao.titulo}
        listaDePerguntas={quintaSecao.listaDePerguntas}
      />
      <HomeSixthSection
        titulo={sextaSecao.titulo}
        buttons={sextaSecao.botoes}
      />
    </>
  );
}
