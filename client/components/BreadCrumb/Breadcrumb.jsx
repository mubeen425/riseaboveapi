import Link from "next/link";
import React from "react";

const Breadcrumb = ({ PageName, Previous, Current }) => {
  return (
    <div
      class="bg-dark text-white d-flex flex-column align-items-center justify-content-center py-3 pb-5 "
      style={{ height: 174   }}
    >
      <div class="h1 font-weight-bold">{PageName}</div>
      <div className="d-flex justify-content-center">
        <div class="w-100 rounded px-2 text-xs">
          <ol class="list-unstyled d-flex">
            <Link href={`/`}>
              <a class="text-primary hover:text-primary">{Previous}</a>
            </Link>
            <li>
              <span class="mx-2 text-muted">/</span>
            </li>
            <li class="text-muted">{Current}</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
