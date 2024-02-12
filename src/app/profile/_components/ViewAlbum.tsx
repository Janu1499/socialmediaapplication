"use client";

import { useEffect, useState } from "react";

export interface IPhotos {
    albumId: number;
    id: number;
    thumbnailUrl: string;
    title: string;
    url: string;
}

const ViewAlbum = ({ albumId }: { albumId: number }) => {
    const [photos, setPhotos] = useState([] as IPhotos[]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
            );
            const data = await response.json();
            setPhotos(data);
        };
        getData();
    }, [albumId]);

    return (
        <>
            <div className="row overflow-y">
                {photos.map((data: IPhotos) => (
                    <>
                        <div className="col-12 col-sm-6 mb-4">
                            <div className="card min-h" key={data.id}>
                                <img src={data.url} alt={data.title} />
                                <div className="card-body">
                                    <h5 className="card-title fs-12">{data.title}</h5>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
};

export default ViewAlbum;
