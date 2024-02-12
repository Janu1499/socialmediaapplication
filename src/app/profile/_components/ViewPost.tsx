"use client";

import { useEffect, useState } from "react";

export interface Comments {
  id: number;
  name: string;
  email: string;
  body: string;
}

const ViewPost = ({ postId }: { postId: number }) => {
  const [comments, setComments] = useState([] as Comments[]);
  const [currentPage, setcurrentPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      const data = await response.json();
      setComments(data);
    };
    getData();
  }, [postId]);

  return (
    <>
      {comments.map((data: Comments) => (
        <>
          <h5 className="fw-semibold">{data.name}</h5>
          <h6>{data.email}</h6>
          <p className="text-muted">{data.body}</p>
        </>
      ))}
    </>
  );
};

export default ViewPost;
