import "./Pagination.scss";

const Pagination: React.FC = () => {
  return (
    <div className="pagination">
      <button className="pagination-button">Prev</button>
      <span className="pagination-list">1 2 3 4 5 6</span>
      <button className="pagination-button">Next</button>
    </div>
  );
};

export default Pagination;
