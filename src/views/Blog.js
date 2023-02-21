import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../customize/fetch";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Blog.scss";
import AddNewBlog from "./AddNewBlog";

const Blog = () => {
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let url = `https://jsonplaceholder.typicode.com/posts`;

  const { data: dataBlogs, isLoading, isError } = useFetch(url, false);
  useEffect(() => {
    if (dataBlogs && dataBlogs.length > 0) {
      let newData_1 = dataBlogs.slice(0, 10);
      setNewData(newData_1);
      console.log(newData);
    }
  }, [dataBlogs]);

  console.log("loading", isLoading);
  console.log("err", isError);

  const handleSubmitBlog = (blog) => {
    let data = newData;
    data.unshift(blog);
    setNewData(data);
    setShow(false);
  };

  return (
    <div>
      <Button variant="primary" className="mt-1" onClick={handleShow}>
        + Add new blog
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNewBlog handleSubmitBlog={handleSubmitBlog} />
        </Modal.Body>
      </Modal>
      {/* <div className="btn-add-new-container">
        <Link to={"/add-new-blog"} className="btn-add-new-blog">
          +Add new Blog
        </Link>
      </div> */}
      <table className="blog-container">
        <thead>
          <tr>
            <th className="id">Id</th>
            <th className="title">Title</th>
            <th className="body">Body</th>
          </tr>
        </thead>
        <tbody>
          {isLoading === false &&
            isError === false &&
            newData &&
            newData.length > 0 &&
            newData.map((item) => {
              return (
                <tr key={item.id} className="blog-single">
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>
                    <button style={{ cursor: "pointer" }}>
                      <Link
                        to={`/blog/${item.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        View Detail
                      </Link>
                    </button>
                  </td>
                </tr>
              );
            })}
          {isLoading === true && isError === false && (
            <tr>
              <td colSpan={3} style={{ textTransform: "capitalize" }}>
                Loading data...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Blog;
