"use client";

import Image from "next/image";
import { ArrowUpRight, Building2 } from "lucide-react";

import type { Region } from "@/types/region";

type FeaturedCompaniesProps = {
  region: Region;
};

export default function FeaturedCompanies({
  region,
}: FeaturedCompaniesProps) {
  return (
    <section className="space-y-6">

      <div>

        <h3 className="text-lg font-semibold text-slate-900">
          Entreprises mises en avant
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Quelques entreprises emblématiques de la région.
        </p>

      </div>

      {region.featuredCompanies.length === 0 ? (

        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            rounded-2xl
            border
            border-dashed
            border-slate-300
            bg-slate-50
            px-6
            py-10
            text-center
          "
        >
          <Building2
            size={40}
            className="text-slate-400"
          />

          <h4 className="mt-4 font-semibold text-slate-700">
            Aucune entreprise disponible
          </h4>

          <p className="mt-2 text-sm text-slate-500">
            Les entreprises de cette région seront
            bientôt ajoutées à la plateforme.
          </p>

        </div>

      ) : (

        <div className="space-y-3">

          {region.featuredCompanies.map((company) => (

            <button
              key={company.id}
              className="
                group
                flex
                w-full
                items-center
                justify-between
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
                text-left
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-1
                hover:border-blue-300
                hover:shadow-lg
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                  "
                >

                  {company.logo ? (

                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />

                  ) : (

                    <Building2
                      size={24}
                      className="text-slate-400"
                    />

                  )}

                </div>

                <div>

                  <div className="font-semibold text-slate-900">
                    {company.name}
                  </div>

                  <div className="mt-1 inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                    {company.sector}
                  </div>

                </div>

              </div>

              <ArrowUpRight
                size={20}
                className="
                  text-slate-400
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  group-hover:text-blue-600
                "
              />

            </button>

          ))}

        </div>

      )}

    </section>
  );
}