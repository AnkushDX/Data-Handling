import React, { useState, useEffect } from "react";
import Style from "../ApiData/ApiData.module.css";
import axios from "axios";
// import {useNavigate} from "react-router-dom"

const ApiData = () => {
  // const navigate = useNavigate()
  const [originalData, setOriginalData] = useState([]);
  const [myData, setMyData] = useState([]);
  const [searchUserId, setSearchUserId] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");
  const [noData, setNoData] = useState(true);
  const [loading, setLoading] = useState(true);
  const [perPage, setPerpage] = useState(10);
  const [currentPage, setcurrentPage] = useState(1);
  const [searchPage, setSearchPage]=useState("")

  const shouldShowpagination = myData.length > perPage && !noData;

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setOriginalData(res.data);
      setMyData(res.data);
      setNoData(false);
      setTimeout(() => setLoading(false), 500);
    });
  }, []);

  const indexLast = currentPage * perPage;
  const indeFpage = indexLast - perPage;
  const currentpostPage = myData.slice(indeFpage, indexLast);

  const PageNumber = [];
  for (var i = 1; i <= Math.ceil(myData.length / perPage); i++) {
    PageNumber.push(i);
  }
  const PageShow = (num) => {
    setcurrentPage(num);
  };
  // ......................NextPage..................................
  const Nextpage = () => {
    const lastpage = Math.ceil(myData.length / perPage);
    if (currentPage < lastpage) {
      var count = currentPage + 1;
      setcurrentPage(count);
    }
  };
  // .......................PrevPage.................................
  const Prevpage = () => {
    if (currentPage > 1) {
      var count = currentPage - 1;
      setcurrentPage(count);
    }
  };

  const handleSearch = () => {
    let filteredData = originalData;

    if (selectedUserId) {
      filteredData = filteredData.filter(
        (post) => post.userId.toString() === selectedUserId
      );
    }

    if (searchUserId) {
      filteredData = filteredData.filter((post) =>
        post.userId.toString().includes(searchUserId.trim())
      );
    }

    if (searchTitle) {
      filteredData = filteredData.filter((post) =>
        post.title.toLowerCase().includes(searchTitle.trim().toLowerCase())
      );
    }

    setMyData(filteredData);
    setNoData(filteredData.length === 0);
    setSearchPage("");
  };

  const handleSearchUserId = (e) => {
    setSearchUserId(e.target.value.trim());
  };

  const handleSearchTitle = (e) => {
    setSearchTitle(e.target.value.trim());
  };

  const handleUserIdFilter = (e) => {
    setSelectedUserId(e.target.value);
  };

  const handleReset = () => {
    setSearchTitle("");
    setSearchUserId("");
    setSelectedUserId("");
    setSearchPage("")
    setcurrentPage(1)
    setMyData(originalData);
    setNoData(false);
   
    // navigate('/')
  };

  useEffect(() => {
    handleSearch();
  }, [searchUserId, searchTitle, selectedUserId]);

  useEffect(()=>{
    if(searchPage !=="" && searchPage >0 && searchPage <= Math.ceil (myData.length/perPage)){
      setcurrentPage(searchPage)
    }
    // else{
    //   setNoData(true)
      
    // }
  },[searchPage,myData.length,perPage]);

  const handlPageSearch =(e)=>{
    setSearchPage(e.target.value.trim())
  }

  return (
    <>
      <div className="container">
        <div className={Style.main}>
          <h1>All Api Data Page</h1>
        </div>
        <div className={Style.searchBar}>
          <input
            className={Style.sTitle}
            type="text"
            id="searchId"
            placeholder="Search by userId"
            value={searchUserId}
            onChange={handleSearchUserId}
          />
          <input
            className={Style.sTitle}
            type="text"
            value={searchTitle}
            placeholder="Search by title"
            onChange={handleSearchTitle}
          />
          <select
            value={selectedUserId}
            onChange={handleUserIdFilter}
            className={Style.selecteid}
          >
            <option value=""> Search select by userId </option>
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={(num + 1).toString()}>
                {num + 1}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="btn btn-sm btn-danger ms-4 mb-1"
            onClick={handleReset}
          >
            Reset
          </button>
          <br/>
          <label className={Style.pageSearch}>Page Search</label>
          <input
          className={Style.sTitle}
            type="text"
            id="searchpage"
            placeholder="Search by page"
           value={searchPage}
           onChange={handlPageSearch}
          />
          <label className={Style.allData}>All Data Search</label>
          <input
          className={Style.sTitle}
            type="text"
            id="alldata"
            placeholder="Search all data"
           
          />
        </div>
        {loading ? (
          <h1>Loading data ...</h1>
        ) : (
          <div>
            <table className="table  table-hover">
              <thead>
                <tr className={Style.head}>
                  <th>Id</th>
                  <th>UserId</th>
                  <th>Title</th>
                  <th>Body</th>
                </tr>
              </thead>
              <tbody>
                {noData ? (
                  <tr>
                    <td colSpan="4">
                      <h1 className={Style.noData}> No Data Found..!!</h1>
                    </td>
                  </tr>
                ) : (
                  currentpostPage.map((post) => {
                    const { id, userId, title, body } = post;
                    return (
                      <tr key={id}>
                        <th className={Style.thborder}>{id}</th>
                        <td className={Style.thborder}>{userId}</td>
                        <td className={Style.thborder}>{title}</td>
                        <td className={Style.thborder}>{body}</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {shouldShowpagination && (
        <nav aria-label="Page navigation example" style={{alignItems:"center",justifyContent:"center",display:"flex"}}>
          <ul className={`pagination ${Style.pagibtn}`}>
            {" "}
            <li className="page-item">
              <a className="page-link" href="#" onClick={Prevpage}>Prev</a>
            </li>
            {PageNumber.map((number) => (
              <li key={number} className={`page-item ${currentPage === number ? 'active':''}`}>
                <a className="page-link" href="#" onClick={() => PageShow(number)}>{number}</a>
              </li>
            ))}
            <li className="page-item">
              <a className="page-link" href="#" onClick={Nextpage}>Next</a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default ApiData;
