// Static imports give next/image the real dimensions and a blur placeholder.
// The files are black-and-white copies of the club's photos.
import backPatch from "../../public/images/qc-tanders-back-patch-rider.jpg";
import members from "../../public/images/qc-tanders-members-leather-vests.jpg";
import nightStreet from "../../public/images/qc-tanders-rider-night-street.jpg";
import hangout from "../../public/images/qc-tanders-club-night-hangout.jpg";
import blackHelmet from "../../public/images/qc-tanders-rider-black-helmet.jpg";
import logo from "../../public/images/qc-tanders-rc-logo.jpg";
import { captions } from "./captions";

export const photos = {
  backPatch: {
    src: backPatch,
    alt: captions["qc-tanders-back-patch-rider.jpg"],
  },
  members: {
    src: members,
    alt: captions["qc-tanders-members-leather-vests.jpg"],
  },
  nightStreet: {
    src: nightStreet,
    alt: captions["qc-tanders-rider-night-street.jpg"],
  },
  hangout: {
    src: hangout,
    alt: captions["qc-tanders-club-night-hangout.jpg"],
  },
  blackHelmet: {
    src: blackHelmet,
    alt: captions["qc-tanders-rider-black-helmet.jpg"],
  },
  logo: {
    src: logo,
    alt: captions["qc-tanders-rc-logo.jpg"],
  },
} as const;
