"use client";

import { useEffect, useState } from "react";
import Pagination from "../../../components/common/Pagination/Pagination";

export interface Photos {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Photos = () => {
  const [photos, setPhotos] = useState([] as Photos[]);
  const [currentPage, setcurrentPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${currentPage}`
      );
      const data = await response.json();
      setPhotos(data);
    };
    getData();
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setcurrentPage(pageNumber);
  };

  return (
    <>
      <h3 className="fw-bold my-4">Photos</h3>
      <div className="row">
        {photos.map((data: Photos) => (
          <>
            <div className="col-12 col-sm-6 col-md-4 mb-4">
              <img src={data.url} alt="" className="photo-img img-fluid " />
            </div>
          </>
        ))}
      </div>
      <Pagination
        onPageChange={handlePageChange}
        totalPages={5}
        currentPage={currentPage}
      />
    </>
  );
};

export default Photos;
