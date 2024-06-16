"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { generatePagination } from "@/app/lib/util";
// import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }) {
  //   const pathname = usePathname();
  //   const searchParams = useSearchParams();
  //   const currentPage = Number(searchParams.get('page')) || 1;
  const currentPage = 1;

  //   const createPageURL = (pageNumber) => {
  //     const params = new URLSearchParams(searchParams);
  //     params.set('page', pageNumber.toString());
  //     return `${pathname}?${params.toString()}`;
  //   };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-y-6 items-center md:justify-between">
        {/* <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        /> */}
        <PaginationArrow
          href={"/"}
          direction="left"
          isDisabled={currentPage <= 1}
        />

        <div className="flex -space-x-px">
          {allPages.map((page, index) => {
            let position;

            if (index === 0) position = "first";
            if (index === allPages.length - 1) position = "last";
            if (allPages.length === 1) position = "single";
            if (page === "...") position = "middle";
            console.log(page, index, position);
            return (
              //   <PaginationNumber
              //     key={page}
              //     href={createPageURL(page)}
              //     page={page}
              //     position={position}
              //     isActive={currentPage === page}
              //   />
              <PaginationNumber
                key={page}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            );
          })}
        </div>

        {/* <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        /> */}
        <PaginationArrow
          href={"/"}
          direction="right"
          isDisabled={currentPage >= totalPages}
        />
      </div>
    </>
  );
}

function PaginationNumber({ page, href, isActive, position }) {
  const className = clsx(
    "flex h-10 w-10 items-center justify-center text-sm border",
    {
      "rounded-l-md": position === "first" || position === "single",
      "rounded-r-md": position === "last" || position === "single",
      "z-10 bg-blue-600 border-blue-600 text-white": isActive,
      "hover:bg-gray-100": !isActive && position !== "middle",
      "text-gray-300": position === "middle",
    }
  );

  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={"/"} className={className}>
      {page}
    </Link>
  );
}

function PaginationArrow({ href, direction, isDisabled }) {
  const className = clsx(
    "flex gap-x-2 h-10 w-fit px-4 py-2 text-sm font-semibold items-center justify-center rounded-md border",
    {
      "pointer-events-none text-gray-300": isDisabled,
      "hover:bg-gray-100": !isDisabled,
      "mr-2 md:mr-4": direction === "left",
      "ml-2 md:ml-4": direction === "right",
    }
  );

  const icon =
    direction === "left" ? (
      <>
        <ArrowLeftIcon className="w-4" />
        <span>Prev</span>
      </>
    ) : (
      <>
        <span>Next</span>
        <ArrowRightIcon className="w-4" />
      </>
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
}
