import Image from "next/image";
import { formatPrice, type MerchItem } from "@/lib/merch";
import { site } from "@/lib/site";

export function MerchCard({ item, compact }: { item: MerchItem; compact?: boolean }) {
  return (
    <article className="merch-card" id={item.slug}>
      <div className="merch-visual">
        {item.badge && <span className="tape tape-small merch-badge">{item.badge}</span>}
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(min-width: 900px) 60vw, 100vw"
          className="merch-photo"
        />
      </div>
      <div className="merch-body">
        <div className="merch-title">
          <h3>{item.name}</h3>
          <p className="merch-price">{formatPrice(item.price)}</p>
        </div>
        <p className="muted">{item.description}</p>
        {!compact && (
          <>
            {item.details && (
              <ul className="merch-details">
                {item.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            )}
            <a className="btn btn-block" href={site.messenger} target="_blank" rel="noopener">
              Order on Messenger
            </a>
          </>
        )}
      </div>
    </article>
  );
}
