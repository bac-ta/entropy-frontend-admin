import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CDataTable,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle
} from "@coreui/react";
import usersData from "../users/UsersData";
import React from "react";
import CIcon from "@coreui/icons-react";

const getBadge = status => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
}
const fields = ['name', 'registered', 'role', 'status'];

export const ListPost = () => {
  return (
    <CCard>
      <CCardHeader>
        <CButton color="success">
          <CIcon size="sm" name="cil-plus"/>
          <span className="mfs-2">New Post</span>
        </CButton>
      </CCardHeader>
      <CCardBody>
        <CDropdown className="m-1">
          <CDropdownToggle color="primary">
            Post Options
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem>All</CDropdownItem>
            <CDropdownItem>Published</CDropdownItem>
            <CDropdownItem>Waiting</CDropdownItem>
            <CDropdownItem>InActive</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <CDataTable
          sorter
          items={usersData}
          fields={fields}
          striped
          itemsPerPage={10}
          pagination
          scopedSlots={{
            'status':
              (item) => (
                <td>
                  <CBadge color={getBadge(item.status)}>
                    {item.status}
                  </CBadge>
                </td>
              )
          }}
        />
      </CCardBody>
    </CCard>);
};
export default ListPost;
