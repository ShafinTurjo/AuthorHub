import React, { useState } from "react";
import ArticleCard from "./ArticleCard";
import Pagination from "react-bootstrap/Pagination";
import { Container, Row, Col } from "react-bootstrap";

const dummyArticles = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Article ${i + 1}`,
  date: `2025-08-${(i % 30 + 1).toString().padStart(2, "0")}`,
  status: i % 3 === 0 ? "Published" : i % 3 === 1 ? "Draft" : "Archived",
}));

const Article = () => {
  const articlesPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * articlesPerPage;
  const indexOfFirst = indexOfLast - articlesPerPage;
  const currentArticles = dummyArticles.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(dummyArticles.length / articlesPerPage);

  return (
    <Container className="py-4">
      <h4 className="mb-3 text-white">My Articles</h4>
      <Row>
        {currentArticles.map((article) => (
          <Col key={article.id} md={6} lg={4}>
            <ArticleCard {...article} />
          </Col>
        ))}
      </Row>

      <Pagination className="justify-content-center">
        <Pagination.First
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        >
          «
        </Pagination.First>
        <Pagination.Prev
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          ‹
        </Pagination.Prev>
        {Array.from({ length: totalPages }, (_, i) => (
          <Pagination.Item
            key={i + 1}
            active={i + 1 === currentPage}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
        >
          ›
        </Pagination.Next>
        <Pagination.Last
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          »
        </Pagination.Last>
      </Pagination>
    </Container>
  );
};

export default Article;
