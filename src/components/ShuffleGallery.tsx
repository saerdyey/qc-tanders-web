"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";

type Photo = { src: string; width: number; height: number; alt: string };
type Tile = { photo: Photo; ratio: string; feature?: boolean };

const isPortrait = (p: Photo) => p.height > p.width;
const pick = <T,>(list: T[]) => list[Math.floor(Math.random() * list.length)];

// Tile shapes stay close to each photo's own shape so crops are gentle.
const portraitRatios = ["2 / 3", "3 / 4", "4 / 5"];
const landscapeRatios = ["1 / 1", "4 / 3", "3 / 2"];

// Server HTML uses a fixed layout; the browser swaps in a new random one on every page load.
function fixedLayout(photos: Photo[]): Tile[] {
  const featureIndex = Math.max(0, photos.findIndex((p) => !isPortrait(p)));
  const rest = photos.filter((_, i) => i !== featureIndex);
  return [
    { photo: photos[featureIndex], ratio: "21 / 9", feature: true },
    ...rest.map((photo) => ({ photo, ratio: isPortrait(photo) ? "3 / 4" : "4 / 3" })),
  ];
}

function shuffledLayout(photos: Photo[]): Tile[] {
  const deck = [...photos];
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  // Feature the first landscape photo in the shuffled deck (it crops best to a wide banner).
  const featureIndex = Math.max(0, deck.findIndex((p) => !isPortrait(p)));
  const [feature] = deck.splice(featureIndex, 1);
  return [
    { photo: feature, ratio: "21 / 9", feature: true },
    ...deck.map((photo) => ({ photo, ratio: pick(isPortrait(photo) ? portraitRatios : landscapeRatios) })),
  ];
}

// One shuffle per page load, reused across re-renders.
let cache: { key: string; tiles: Tile[] } | null = null;
function getShuffled(photos: Photo[]) {
  const key = photos.map((p) => p.src).join("|");
  if (cache?.key !== key) cache = { key, tiles: shuffledLayout(photos) };
  return cache.tiles;
}

const subscribe = () => () => {};

export function ShuffleGallery({ photos }: { photos: Photo[] }) {
  const shuffled = useSyncExternalStore(
    subscribe,
    () => getShuffled(photos),
    () => null,
  );
  const tiles = shuffled ?? fixedLayout(photos);

  return (
    <>
      <div className="mosaic" data-ready={shuffled ? "" : undefined}>
        {tiles.map(({ photo, ratio, feature }) => (
          <figure
            key={photo.src}
            className={feature ? "tile tile-feature" : "tile"}
            style={{ aspectRatio: ratio }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={feature ? "100vw" : "(min-width: 1100px) 25vw, (min-width: 720px) 33vw, 50vw"}
            />
          </figure>
        ))}
      </div>
      {/* Without JavaScript there is no shuffle, so show the fixed layout. */}
      <noscript>
        <style>{".mosaic{opacity:1}"}</style>
      </noscript>
    </>
  );
}
