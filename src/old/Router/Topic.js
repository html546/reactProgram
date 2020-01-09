import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Topic() {
  const { page } = useParams();
  const [content, setContent] = useState([]);
  useEffect(() => {
    fetch(`https://cnodejs.org/api/v1/topics?page=${page}`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res.data);
        setContent(res.data);
        return res;
      });
    return () => {};
  }, [page]);
  return (
    <div>
      {content.map(item => (
        <div key={item.id}>
          <div
            style={{ width: 800, height: 800, overflow: 'scroll' }}
            dangerouslySetInnerHTML={{ __html: item.content }}
          ></div>
        </div>
      ))}
    </div>
  );
}
