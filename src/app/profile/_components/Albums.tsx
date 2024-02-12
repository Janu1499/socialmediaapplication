"use client";

import { useEffect, useState } from "react";
import Modal from "../../../components/common/Modal/Modal";
import Pagination from "../../../components/common/Pagination/Pagination";
import ViewAlbum from "./ViewAlbum";

export interface IAlbum {
  id: number;
  userId: number;
  title: string;
}

const Album = () => {
  const [album, setAlbum] = useState([] as IAlbum[]);
  const [currentPage, setcurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectId, setSelectId] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums?_page=${currentPage}`
      );
      const data = await response.json();
      setAlbum(data);
    };
    getData();
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setcurrentPage(pageNumber);
  };

  const handleOpen = (id: number) => {
    setIsOpen(true);
    setSelectId(id);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectId(0);
  };

  return (
    <>
      <Modal isOpen={isOpen} title="Album Photos" onClose={handleClose}>
        <ViewAlbum albumId={selectId} />
      </Modal>
      <h3 className="fw-bold my-4">Albums</h3>
      <div className="row">
        {album.map((data: IAlbum) => (
          <>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div
                className="border shadow-sm rounded p-3 min-h-100 pointer"
                onClick={() => handleOpen(data.id)}
              >
                <h4 className="fw-semibold fs-16">{data.title}</h4>
              </div>
            </div>
          </>
        ))}
      </div>
      <Pagination
        onPageChange={handlePageChange}
        totalPages={11}
        currentPage={currentPage}
      />
    </>
  );
};

export default Album;
