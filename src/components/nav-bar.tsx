import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <Link href="/" aria-label="메인페이지로 이동">
        <Image src="/images/logo.png" width={100} height={38} alt="Arrr logo" />
      </Link>
    </nav>
  );
}
