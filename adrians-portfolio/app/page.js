import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-[#FFFAE7] w-full h-full">
      <Image
        src="./logo.svg"
        alt="Computer Icon"
        width={67}
        height={69}
        className="ml-[104px] mt-[60px]"
      />
    </main>
  )
}
