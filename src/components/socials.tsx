import Image from "next/image"
import Link from "next/link"

interface SocialsProps extends React.HTMLAttributes<HTMLDivElement> {
  socials: Array<{
    media: "instagram" | "twitter" | "github" | "whatsapp" | "linkedin"
    link: string
  }>
}

export function Socials({ socials, ...props }: SocialsProps) {
  return (
    <div className="relative flex w-full justify-center gap-4 lg:justify-start">
      {socials.map((social) => (
        <Link
          key={social.media}
          href={social.link}
          className="rounded-full p-0.5 duration-300 hover:-translate-y-2 hover:scale-110"
        >
          <Image
            src={`/images/social/${social.media}.png`}
            alt=""
            height={40}
            width={40}
            className="pointer-events-none rounded-full bg-white"
          />
        </Link>
      ))}
    </div>
  )
}
