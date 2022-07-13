import React, { useState } from "react";
import { connect } from "react-redux";
import Music from "../../assets/png/musicLogo.png";
import SearchInput from "../../components/InputSearch";
import Button from "../../components/Button";
import { setSongList } from "../../redux";
import { getSong } from "../../helpers/request";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const history = useHistory();
  const { setSongList } = props;
  const [term, setTerm] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const handleGetSong = () => {
    if (term) {
      setSubmitting(true);
      const params = {
        term: term,
        limit: 5
      };
      getSong(params)
        .then((res) => {
          setSubmitting(false);
          setSongList({ data: res });
          history.push("/list?term=" + term);
        })
        .catch((err) => {
          setSubmitting(false);
          console.log(err);
        });
    }
  };
  return (
    <div className="bgHome vw vh justify-center display-flex align-center">
      <img src={Music} width={100} alt="logoimg" />
      <div className="footer-bottom">
        <SearchInput
          value={term}
          inputChange={(e) => setTerm(e.target.value)}
          className="mb10"
          placeholder="Artist / Album / Title"
        />
        <Button
          submitting={submitting}
          handleClick={handleGetSong}
          label="Search"
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, { setSongList })(Home);
