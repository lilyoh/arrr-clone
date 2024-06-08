import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex flex-col gap-6 max-w-[1200px] m-auto py-4">
      <div className="flex gap-2 items-center self-end text-gray-500 text-xs">
        <Link href="/login">로그인</Link>
        <div className="text-sm">|</div>
        <Link href="/signup">회원가입</Link>
      </div>
      <div className="flex justify-between text-[1.5rem] leading-[1.5rem]">
        <div className="flex gap-4">
          <Link href="/" aria-label="메인페이지로 이동">
            <Image
              src="/images/logo.png"
              width={100}
              height={38}
              alt="Arrr logo"
            />
          </Link>

          <Link href="/product">Product</Link>
          <Link href="/best">Best</Link>
          <Link href="/arrr-life">Arrr Life</Link>
        </div>

        <div className="flex gap-4 items-start">
          <button aria-label="search button">
            <Image
              src="/images/ico_search.png"
              width={26}
              height={27}
              alt="search icon"
            />
          </button>
          <button aria-label="recently viewed products">
            <Image
              src="/images/ico_clock.png"
              width={26}
              height={26}
              alt="search icon"
            />
          </button>
          <button aria-label="cart">
            <Image
              src="/images/ico_bag.png"
              width={29}
              height={29}
              alt="search icon"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
