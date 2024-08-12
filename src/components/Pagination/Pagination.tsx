import React from "react";
import Button from "@/components/Button/Button";

import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

import "@/styles/Pagination/Pagination.scss";

interface PaginationProps {
  handleNext: () => void;
  handlePrevious: () => void;
  currentPage: number;
  maxPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  handlePrevious,
  handleNext,
  currentPage,
  maxPage,
}) => {
  return (
    <div className="pagination">
      <Button variant="red" onClick={handlePrevious}>
        <FaCaretLeft />
      </Button>
      <span className="pagination__indicators">
        {currentPage}/{maxPage}
      </span>
      <Button variant="red" onClick={handleNext}>
        <FaCaretRight />
      </Button>
    </div>
  );
};

export default Pagination;
