import "./AddNewBlog.scss";
import { useState } from "react";
import axios from "axios";

const AddNewBlog = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  let data = { title: title, body: content, userId: 1 };
  const handleSubmitBtn = async () => {
    if (!title || !content) {
      alert("Missing data input");
      return;
    }
    let res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );
    if (res && res.data) {
      props.handleSubmitBlog(res.data);
    }

    console.log(res);
  };

  return (
    <div>
      {/* <form action="/" method="post"> */}
      <div className="add-new-container">
        <label>
          <b>Title</b>
        </label>
        <input
          type="text"
          placeholder="Enter title"
          name="title"
          required
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />

        <label>
          <b>Content</b>
        </label>
        <textarea
          type="text"
          className="content"
          name="content"
          required
          placeholder="Enter Content.."
          onChange={(event) => {
            setContent(event.target.value);
          }}
          // style="height:200px"
        ></textarea>

        <button className="btn-submit" type="submit" onClick={handleSubmitBtn}>
          Submit
        </button>
      </div>
      {/* </form> */}
    </div>
  );
};

export default AddNewBlog;
