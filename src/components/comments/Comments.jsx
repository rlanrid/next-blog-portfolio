"use client"
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import useSWR, { mutate } from 'swr';

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
        const error = new Error(data.message);
        throw error;
    }

    return data;
}

export default function Comments({ slug }) {
    const { data: session, status } = useSession();

    const { data, mutate, isLoading } = useSWR(`http://localhost:3000/api/comments?slug=${slug}`, fetcher)

    const [comment, setComment] = useState();

    const handleSubmit = async () => {
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({ desc: comment, postSlug: slug }),
        });
        mutate()
    }

    const handleDelete = async (commentId) => {
        const confirmDelete = window.confirm("댓글을 삭제하시겠습니까?");
        if (confirmDelete) {
            try {
                const res = await fetch("/api/comment", {
                    method: "DELETE",
                    body: JSON.stringify({
                        id: commentId,
                    }),
                });

                if (res.ok) {
                    alert("댓글이 삭제되었습니다.");
                    mutate();
                } else {
                    const arrMsg = await res.json();
                    alert(arrMsg.message || "실패");
                }
            } catch (error) {
                console.error(error);
                alert("실패");
            }
        }
    };

    return (
        <div>
            <h3>댓글</h3>
            <div>
                {status == "authenticated" ? (
                    <div>
                        <input type="text" placeholder='댓글' onChange={(e) => setComment(e.target.value)} />
                        <button onClick={handleSubmit}>dddd</button>
                    </div>
                ) : (
                    <div>로그인하면 댓글을 작성할 수 잇습니다.</div>
                )}
            </div>
            <div>
                {isLoading ? "isLoading" : data?.map((item) => (
                    <div key={item.id}>
                        <p>{item.user.name}</p>
                        <p>{item.user.createdAt}</p>
                        <p>{item.desc}</p>
                        {item.user.email === session?.user.email ? (
                            <p onClick={() => { handleDelete(item.id) }}>삭제</p>
                        ) : (null)}
                    </div>
                ))}
            </div>
        </div>
    )
}