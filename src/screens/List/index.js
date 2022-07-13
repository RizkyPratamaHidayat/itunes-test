import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import { setSongList } from "../../redux";
import { useHistory } from "react-router-dom";
import ListItem from "../../components/SongList";
import Button from "../../components/Button";
import { getSong } from "../../helpers/request";
import { useDidUpdateEffect } from "../../shared/hooks";

const List = (props) => {
  const { setSongList, songList } = props;
  const [limit, setLimit] = useState(5);
  const history = useHistory();
  const urlParams = new URLSearchParams(window.location.search);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!songList?.data?.results) {
      history.goBack();
    }
  }, [songList]);

  const handleGetSong = () => {
    setLimit(limit + 5);
  };

  useDidUpdateEffect(() => {
    setSubmitting(true);
    const params = {
      term: songList.searchKey || urlParams.get("term"),
      limit: limit + 5,
    };
    getSong(params)
      .then((res) => {
        setSubmitting(false);
        setSongList({ data: res });
      })
      .catch((err) => {
        setSubmitting(false);
        console.log(err);
      });
  }, [limit]);

  const renderItemList = () => {
    return (
      <>
        {songList?.data?.results?.map((e) => {
          return <ListItem item={e} />;
        })}
      </>
    );
  };

  return (
    <div>
      <Header />
      <div className="mt30 display-flex align-center justify-center vw">
        <span className="search-text">
          Search Result For :{" "}
          <b>{songList.searchKey || urlParams.get("term")}</b>
        </span>
      </div>
      {renderItemList()}
      <div className="mb10 display-flex align-center justify-center vw">
        <Button
          className="bg-muted"
          submitting={submitting}
          handleClick={handleGetSong}
          label="Load More"
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    songList: state.generalReducer.songList,
  };
};
export default connect(mapStateToProps, { setSongList })(List);
