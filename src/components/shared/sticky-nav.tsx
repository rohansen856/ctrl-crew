import React from "react"
import Link from "next/link"
import { CalendarIcon, HomeIcon, MailIcon, PencilIcon } from "lucide-react"

import { members } from "@/config/team"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Dock, DockIcon } from "@/components/magicui/dock"
import { ModeToggle } from "@/components/mode-toggle"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export type IconProps = React.HTMLAttributes<SVGElement>

const Icons = {
  calendar: (props: IconProps) => <CalendarIcon {...props} />,
  email: (props: IconProps) => <MailIcon {...props} />,
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>LinkedIn</title>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  ),
  x: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>X</title>
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      />
    </svg>
  ),
  youtube: (props: IconProps) => (
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>youtube</title>
      <path d="M29.41,9.26a3.5,3.5,0,0,0-2.47-2.47C24.76,6.2,16,6.2,16,6.2s-8.76,0-10.94.59A3.5,3.5,0,0,0,2.59,9.26,36.13,36.13,0,0,0,2,16a36.13,36.13,0,0,0,.59,6.74,3.5,3.5,0,0,0,2.47,2.47C7.24,25.8,16,25.8,16,25.8s8.76,0,10.94-.59a3.5,3.5,0,0,0,2.47-2.47A36.13,36.13,0,0,0,30,16,36.13,36.13,0,0,0,29.41,9.26ZM13.2,20.2V11.8L20.47,16Z" />
    </svg>
  ),
  rohan: (props: IconProps) => (
    <Avatar className="size-8 border-2 border-green-800">
      <AvatarImage
        src="/images/avatars/rohan.jpg"
        alt="@rcsen"
        className="object-cover"
      />
      <AvatarFallback>RCS</AvatarFallback>
    </Avatar>
  ),
}

const DATA = {
  navbar: [{ href: "/#home", icon: HomeIcon, label: "Home" }],
  contact: {
    social: {
      Rohan: {
        name: "Rohan",
        url: "/#rohan",
        icon: (
          <Avatar className="size-8 border-2 border-green-800">
            <AvatarImage
              src="/images/avatars/rohan.jpg"
              alt="@rcsen"
              className="object-cover"
            />
            <AvatarFallback>RCS</AvatarFallback>
          </Avatar>
        ),
      },
      Ritankar: {
        name: "Ritankar",
        url: "/#ritankar",
        icon: (
          <Avatar className="size-8 border-2 border-green-800">
            <AvatarImage
              src="/images/avatars/ritankar.jpg"
              alt="@rcsen"
              className="object-cover"
            />
            <AvatarFallback>RCS</AvatarFallback>
          </Avatar>
        ),
      },
      Om: {
        name: "Om",
        url: "/#om",
        icon: (
          <Avatar className="size-8 border-2 border-green-800">
            <AvatarImage
              src="/images/avatars/om.jpg"
              alt="@rcsen"
              className="object-cover"
            />
            <AvatarFallback>RCS</AvatarFallback>
          </Avatar>
        ),
      },
    },
  },
}

export function AnimatedNavbar() {
  return (
    <TooltipProvider>
      <Dock direction="middle">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {members.map((member, i) => (
          <DockIcon key={member.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={`/#${member.name.toLowerCase()}`}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                >
                  <Avatar className="size-8 border-2 border-green-800">
                    <AvatarImage
                      src={`/images/avatars/${member.name}.jpg`}
                      alt={member.name}
                      className="object-cover"
                    />
                    <AvatarFallback>RCS</AvatarFallback>
                  </Avatar>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{member.name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </TooltipProvider>
  )
}
