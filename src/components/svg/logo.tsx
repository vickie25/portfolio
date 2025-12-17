import Image from "next/image"
import { SVGProps } from "@/types/global"
import React from "react"

export const Logo = (props: SVGProps) => {
  return (
    <Image
      src="/images/NEWLOGO.png"
      alt="Logo"
      width={56}
      height={56}
      className="w-full h-full"
      priority
    />
  )
}
