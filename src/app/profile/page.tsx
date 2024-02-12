"use client";

import Albums from "@/app/profile/_components/Albums";
import Photos from "@/app/profile/_components/Photos";
import Post from "@/app/profile/_components/Post";
import Image from "next/image";
import { useState } from "react";
import JanujaDP from "../../../public/images/JanujaDP.jpg";
import apptimus from "../../../public/images/LinkedInPost.jpg";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("post");

  const handleTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="main-container">
        <div className="profile-container">
          <Image src={apptimus} alt="" width={1000} height={1000} />
          <div className="profile-image bg-secondary">
            <Image
              className="image rounded-circle"
              src={JanujaDP}
              alt=""
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="profile-name mb-4">
          <h2 className="fw-bold m-0 ">Januja Varatharajah </h2>
          <div className="fw-bold text-muted">1600k</div>
        </div>
        <div>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className={`nav-link pointer ${
                  activeTab === "post" ? "active" : ""
                }`}
                onClick={() => handleTab("post")}
              >
                Posts
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link pointer ${
                  activeTab === "album" ? "active" : ""
                }`}
                onClick={() => handleTab("album")}
              >
                Albums
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link pointer ${
                  activeTab === "photos" ? "active" : ""
                }`}
                onClick={() => handleTab("photos")}
              >
                Photos
              </a>
            </li>
          </ul>
          {activeTab === "post" && <Post />}
          {activeTab === "album" && <Albums />}
          {activeTab === "photos" && <Photos />}
        </div>
      </div>
    </>
  );
};

export default Profile;
