"use server";

import styles from "./page.module.scss";
import PageSection from "@/shared/components/PageSection/PageSection";
import { H1 } from "@/shared/components/Typography/Typography";
import GameCard from "@/entities/game/ui/GameCard/GameCard";
import { notFound } from "next/navigation";
import getCompanyBySlug from "@/shared/api/toIgdb/getCompanyBySlug";
import convertDate from "@/shared/utils/convertDate";
import countries from "i18n-iso-countries";
import ru from "i18n-iso-countries/langs/ru.json";
import Image from "next/image";
import { buildImageUrl } from "@/shared/utils/buildImageUrl";
import { COMPANY_STATUSES } from "@/entities/company/types";
import Fact from "@/entities/game/ui/Fact/Fact";
import CustomLink from "@/shared/components/CustomLink/CustomLink";
import { PUBLIC_ROUTES } from "@/app/constants";

countries.registerLocale(ru);

type CompanyPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { slug } = await params;
  const company = await getCompanyBySlug(slug);

  if (!company) {
    notFound();
  }

  const countryName = countries.getName(`${company.country}`, "ru");

  return (
    <>
      <H1>{company.name}</H1>
      <PageSection>
        {countryName && (
          <Fact variant="text" title="Страна" content={countryName} />
        )}

        {company.parent && (
          <Fact
            variant="link"
            title="Родительская компания"
            content={{
              variant: "internal",
              href: `${PUBLIC_ROUTES.COMPANIES}/${company.parent.slug}`,
              children: company.parent.name,
            }}
          />
        )}
        <p>{COMPANY_STATUSES[company.status]}</p>
        <p>{convertDate(company.createdAt)}</p>
        <div className={styles.cover_container}>
          <Image
            className={styles.cover}
            alt={`Логотип ${company.name}`}
            width="328"
            height="328"
            src={buildImageUrl(company.logo.imageId, "original")}
          />
        </div>

        {/*<ul className={styles.games_list}>*/}
        {/*  {company.games.map((game) => (*/}
        {/*    <li key={game.id}>*/}
        {/*      <GameCard*/}
        {/*        name={game.name}*/}
        {/*        slug={game.slug}*/}
        {/*        cover={game.cover?.imageId}*/}
        {/*      />*/}
        {/*    </li>*/}
        {/*  ))}*/}
        {/*</ul>*/}
      </PageSection>
    </>
  );
}
