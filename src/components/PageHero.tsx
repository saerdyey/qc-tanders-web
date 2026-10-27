import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";

type Props = {
  crumbs: { name: string; path: string }[];
  title: string;
  eyebrow?: ReactNode;
  lead?: ReactNode;
  photo?: StaticImageData;
};

export function PageHero({ crumbs, title, eyebrow, lead, photo }: Props) {
  return (
    <section className="page-hero">
      {photo && <Image src={photo} alt="" fill priority sizes="100vw" className="page-hero-photo" />}
      <div className="container">
        <Breadcrumbs items={crumbs} />
        {eyebrow && <p className="tape">{eyebrow}</p>}
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  );
}
