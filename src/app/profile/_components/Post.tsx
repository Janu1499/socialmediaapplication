"use client";

import { useEffect, useState } from "react";
import Modal from "../../../components/common/Modal/Modal";
import Pagination from "../../../components/common/Pagination/Pagination";
import ViewPost from "./ViewPost";

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const Post = () => {
  const [post, setPost] = useState([] as Post[]);
  const [currentPage, setcurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectId, setSelectId] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}`
      );
      const data = await response.json();
      setPost(data);
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
      <Modal isOpen={isOpen} title="Comments View" onClose={handleClose}>
        <ViewPost postId={selectId} />
      </Modal>
      <h3 className="fw-bold my-4">Posts</h3>
      {post.map((data: Post) => (
        <>
          <div
            className="border shadow-sm rounded w-75 mb-4 p-3"
            onClick={() => handleOpen(data.id)}
          >
            <h4 className="fs-4 fw-semibold">{data.title}</h4>
            <p className="text-muted">{data.body}</p>
            <div>{data.userId}</div>
          </div>
        </>
      ))}
      <Pagination
        onPageChange={handlePageChange}
        totalPages={11}
        currentPage={currentPage}
      />
    </>
  );
};

export default Post;
