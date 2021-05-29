import React from "react";
import {CButton, CCard, CCardBody, CCardHeader, CCol, CFormGroup, CInput, CLabel, CRow} from "@coreui/react";

const CreatePost = () => {
  return (<CCard>
    <CCardHeader>
      New Post
    </CCardHeader>
    <CCardBody>
      <CRow>
        <CCol>
          <CFormGroup>
            <CLabel htmlFor="name">Name</CLabel>
            <CInput id="name" placeholder="Enter your name" required/>
          </CFormGroup>
        </CCol>
      </CRow>
    </CCardBody>
  </CCard>);
};
export default CreatePost;
