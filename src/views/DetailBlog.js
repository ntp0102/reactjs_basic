import { useParams, useHistory } from "react-router-dom";
import useFetch from "../customize/fetch";

const DetailBlog = () => {
  let { id } = useParams();
  let history = useHistory();
  function handleClick() {
    history.push("/blog");
  }
  let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const { data: dataBlogsDetail, isLoading, isError } = useFetch(url, false);
  console.log(dataBlogsDetail);
  console.log(dataBlogsDetail.id);
  return (
    <div>
      <div>
        <span
          onClick={handleClick}
          style={{
            cursor: "pointer",
            border: "1px solid black",
            margin: "10px 0",
            backgroundColor: "#CCCDCD",
          }}
        >
          &lt;-Back
        </span>
      </div>
      {isLoading === false && isError === false && (
        <div>
          <h1>{dataBlogsDetail.title}</h1>
          <article style={{ textAlign: "left", width: "70%", margin: "0 15%" }}>
            <p>{dataBlogsDetail.body}</p>
          </article>
        </div>
      )}
      {isLoading === true && isError === false && <div>Loading.....</div>}
    </div>
  );
};

export default DetailBlog;
