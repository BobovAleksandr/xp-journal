'use server';

import {BASE_URL, ENDPOINTS} from "@/app/constants";
import {TClientCompany, TIgdbCompany} from "@/entities/company/types";

type TIgdbCompanyResponse = {
  id: number;
  company: TIgdbCompany;
}

export default async function getCompanyBySlug(companySlug: string): Promise<TClientCompany | null> {
  try {
    const response = await fetch(`${BASE_URL}${ENDPOINTS.COMPANIES}`, {
      method: 'POST',
      headers: {
        'Client-ID': process.env.IGDB_CLIENT_ID!,
        Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN!}`,
      },
      body: `
        fields company.name, company.country, company.logo.image_id, company.parent.slug, company.parent.name, company.created_at, company.status;
        where company.slug = "${companySlug}";
        limit: 1;
      `,
    });

    if (!response.ok) {
      throw new Error(`Ошибка получения данных о компании`);
    }

    const dataArray: TIgdbCompanyResponse[] = (await response.json());
    const company = dataArray[0].company;

    if (!company) return null

    const {created_at, logo, ...rest} = company;

    return {
      ...rest,
      createdAt: created_at,
      logo: {
        ...logo,
        imageId: logo.image_id
      }
    };
  } catch (error) {
    throw new Error(`Ошибка получения данных о серии игр: ${(error as Error).message}`);
  }
}
