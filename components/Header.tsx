import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { selectBasketItems } from "redux/basketSlice";

export const Header = () => {
  const session = false;
  const items = useSelector(selectBasketItems);
  const signIn = () => {};
  const signOut = () => {};
  return (
    <header className="p4 sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE]">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href={"/"}>
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
            <Image
              src={"https://rb.gy/vsvv2o"}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink" href="">
          Product
        </a>
        <a className="headerLink" href="">
          Explore
        </a>
        <a className="headerLink" href="">
          Support
        </a>
        <a className="headerLink" href="">
          Business
        </a>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <SearchIcon className="headerIcon" />

        <Link href={"/checkout"}>
          <div className="relative cursor-pointer">
            {items.length > 0 && (
              <span className="absolute -right-6 -top-1 z-50 mr-5 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
                {items.length}
              </span>
            )}
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>
        {session ? (
          <Image
            src={
              //   session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000?d=mp&f=y"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            onClick={() => signOut()}
          />
        ) : (
          <UserIcon className="headerIcon" onClick={() => signIn()} />
        )}
      </div>
    </header>
  );
};
