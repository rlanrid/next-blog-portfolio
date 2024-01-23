import Link from 'next/link'
import React from 'react'

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/post", {
        cache: "no-store"
    })

    if (!res.ok) {
        throw new Error("실패")
    }

    return res.json()
}

export default async function Post() {
    const data = await getData();

    console.log(data);

    return (
        <div className="list__inner">
            {data.map((item, index) => (
                <div className="list">
                    <div className="thumb">
                        <div className="image">
                            <img src="" alt="게시글썸네일" />
                        </div>
                        <div className="info">
                            <div className="profile"></div>
                            <div className="view"></div>
                            <div className="like"></div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="title">{item.title}</div>
                        <div className="date">{item.createdAt}</div>
                        <div className="desc">{item.desc}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
