import React from "react";
import Card from "react-bootstrap/Card";

const Post = ({ post }) => {
  return (
    <Card className="m-3 single-post">
      <Card.Header className="single-post-header">{post?.title}</Card.Header>
      <Card.Body className="single-post-body">{post?.body}</Card.Body>
    </Card>
  );
};

export default Post;
