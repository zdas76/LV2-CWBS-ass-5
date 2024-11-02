import { Button, Space, Table } from "antd";
import { useChangeUserRoalMutation, useDeleteUserByIdMutation, useGetAllUserQuery } from "../../redux/features/userApi";
import { DeleteOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { TUser } from "../../types/authtypes";

export default function Users() {
  const{ data: users, isFetching } = useGetAllUserQuery([]);
  const [deleteUserById]=useDeleteUserByIdMutation();
  const [ChangeUserRole]=useChangeUserRoalMutation();


  const handelChangeUserRoal = (user:TUser)=> {
const data = {
  id: user._id,
  role: user.role
}
    Swal.fire({
      title: "Are you sure?",
      text: "You can change this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Change it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res:any = await ChangeUserRole(data);
          if (res.error) {
            Swal.fire({
              title: "Not Change User Role",
              text: res?.error?.message,
              icon: "error",
            });
          }
          Swal.fire({
            title: "Changed!",
            text: "You Change the roal.",
            icon: "success",
          });
          
        } catch (error) {
          Swal.fire({
            title: "Somthin went wrong",
          });
        }
      }
    });

  }

  const handelDelet = async (id: string): Promise<any> => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res:any = await deleteUserById(id);
          if (res.error) {
            Swal.fire({
              title: "Not Deleted",
              text: res?.error?.message,
              icon: "error",
            });
          }
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } catch (error) {
          Swal.fire({
            title: "Somthin went wrong",
          });
        }
      }
    });
  };

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: "Action",
    key: "action",
    render: (user:TUser) => (
      <Space size="middle">
        <Button
          type="text"
          className="p-2"
          onClick={() => handelChangeUserRoal(user as TUser)}
        >
          Change Role
        </Button>
        
        <Button
          type="text"
          className="rounded-full size-10"
          onClick={() => handelDelet(user?._id as string)}
        >
          <DeleteOutlined />
        </Button>
      </Space>
    ),
  },
];
  return <div>

<Table dataSource={users?.data} columns={columns} loading={isFetching} />
  </div>
}
