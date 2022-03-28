import React from "react";
import { fightnews } from "/workspace/MMA/src/newsdata.js"; 

export const News =() => {
    return (
        <div>
          <div className="news-container">
            {fightnews.map((data, key) => {
              return (
                <div key={key}>
                  {data.title +
                    " , " +
                    data.pubDate +
                    " , " +
                    data.link}
                </div>
              );
            })}
          </div>
        </div>
      );
    };