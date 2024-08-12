"use client";

import React from "react";
import Link from "next/link";

import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { HeaderNavProps } from "@/types/Header/HeaderNavProps.types";

import "@/styles/Header/HeaderNav.scss";

const HeaderNav = ({ data }: { data: HeaderNavProps[] }) => {
  const [isOpenMenuMobile, setIsOpenMenuMobile] = React.useState(false);
  const [isOpenItem, setIsOpenItem] = React.useState(false);
  const pathname = usePathname();

  const handleOpenMenuMobile = () => setIsOpenMenuMobile(!isOpenMenuMobile);
  const handleOpenItem = () => setIsOpenItem(!isOpenItem);

  React.useEffect(() => {
    setIsOpenItem(false);
    setIsOpenMenuMobile(false);
  }, [pathname]);

  if (!data || data.length === 0) return null;
  return (
    <>
      <nav className="headerNav">
        <div className="headerNav__hamburger" onClick={handleOpenMenuMobile}>
          {isOpenMenuMobile ? <IoCloseSharp /> : <IoMenu />}
        </div>
        <ul className={`headerNav__list ${isOpenMenuMobile ? "--open" : ""}`}>
          {data.map((item, index) => {
            const { subItens } = item;
            const hasSubitems = subItens && subItens.length > 0;
            const subItemClassName = hasSubitems ? "headerNav__dropdown" : "";

            return (
              <li
                key={index}
                className={`headerNav__item ${subItemClassName ?? false}`}
              >
                <a
                  className="headerNav__link"
                  href={!hasSubitems ? item.url : "#"}
                  onClick={hasSubitems ? handleOpenItem : undefined}
                >
                  {item.rotulo}
                  {hasSubitems && !isOpenItem && <FaCaretDown />}
                  {hasSubitems && isOpenItem && <FaCaretUp />}
                </a>

                {subItens && subItens.length > 0 && (
                  <ul
                    className={`headerNav__dropdown__list ${
                      isOpenItem ? "--open" : ""
                    }`}
                  >
                    {subItens.map((subitem, subIndex) => (
                      <li
                        key={`${index}-${subIndex}`}
                        className="headerNav__dropdown__item"
                      >
                        <Link
                          className="headerNav__dropdown__link"
                          href={subitem.url}
                        >
                          {subitem.rotulo}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default HeaderNav;
