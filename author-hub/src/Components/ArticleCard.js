import React from "react";
import { Badge } from "react-bootstrap";

const ArticleCard = ({ title, date, status }) => {
  const getStatusVariant = (status) => {
    switch (status.toLowerCase()) {
      case "published":
        return "success";
      case "draft":
        return "warning";
      case "archived":
        return "secondary";
      default:
        return "primary";
    }
  };

  return (
    <div className="card shadow-sm p-3 mb-3 small-article-card">
      <div className="d-flex justify-content-between align-items-center">
        <div><h6 className="mb-1">{title}</h6><small className="text-muted">{date}</small>
        </div>
        <Badge pill bg={getStatusVariant(status)}>
          {status}
        </Badge>
      </div>
    </div>
  );
};

export default ArticleCard;
