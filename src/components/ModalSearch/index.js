import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import { connect } from "react-redux";
import { setModalSearch, setSongList } from "../../redux";
import SearchInput from "../../components/InputSearch";
import Button from "../../components/Button";
import { getSong } from "../../helpers/request";
const ModalSearch = (props) => {
  const { modalSearch, setModalSearch, setSongList } = props;
  const [term, setTerm] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const toggle = () => {
    setModalSearch({ visible: false });
  };
  const handleGetSong = () => {
    if (term) {
      setSubmitting(true);
      const params = {
        term: term,
        limit: 5,
      };
      getSong(params)
        .then((res) => {
          setSubmitting(false);
          setSongList({ data: res, searchKey: term });
          setTerm('');
          toggle();
        })
        .catch((err) => {
          setSubmitting(false);
          console.log(err);
        });
    }
  };
  return (
    <Modal isOpen={modalSearch?.visible} toggle={toggle}>
      <ModalBody className="modal-form-login">
        <h2 className="mb10 text-light text-center">Search</h2>
        <SearchInput
          value={term}
          inputChange={(e) => setTerm(e.target.value)}
          className="mb10 w100"
          placeholder="Artist / Album / Title"
        />
        <Button
          className="bg-primary-linear w100"
          submitting={submitting}
          handleClick={handleGetSong}
          label="Search"
        />
      </ModalBody>
    </Modal>
  );
};
const mapStateToProps = (state) => {
  return {
    modalSearch: state.generalReducer.modalSearch,
  };
};
export default connect(mapStateToProps, {
  setModalSearch,
  setSongList,
})(ModalSearch);
