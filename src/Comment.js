import React from "react";



const Comment = (props) => {
    const {name,gun,yorum,star,avatar}= props;

  return (
    <div className="comment">
      <a className="avatar" href="/">
        <img alt="Furkan Peker" src={avatar} />
      </a>
      <div className="content">
        <a className="author">{name}</a>
        <div className="metadata">
          <div className="date">{gun}</div>
          <div className="rating"> 
            <i className="star icon" />{star} Beğeni
          </div>
        </div>
        <div className="text">
          {yorum}
        </div>
      </div>
    </div>
  );
};

export default Comment;
