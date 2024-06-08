import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-yellow-500 flex flex-col">
      <div className="bg-blue-500 flex gap-2 items-center self-end">
        <Link href="/login">로그인</Link>
        <div className="text-gray-500 text-sm">|</div>
        <Link href="/signup">회원가입</Link>
      </div>
      <div className="bg-red-500 flex justify-between">
        <div className="flex gap-3 items-top">
          <Link href="/" aria-label="메인페이지로 이동">
            <Image
              src="/images/logo.png"
              width={100}
              height={38}
              alt="Arrr logo"
            />
          </Link>

          {/* <Link className="" href="/product"> */}
          <Link className="leading-[38px] align-top" href="/product">
            product
          </Link>
          <Link href="/best">best</Link>
          <Link href="/arrr-life">Arrr life</Link>
        </div>

        <div className="bg-pink-500">
          <button aria-label="search button">search</button>
          <button aria-label="recently viewed products">recently</button>
          <button aria-label="cart">cart</button>
        </div>
      </div>
    </nav>
  );
}
