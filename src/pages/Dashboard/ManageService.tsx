import { Button, Divider, Space, Table, TableProps } from "antd";
import {
  useDeleteServiceByIdMutation,
  useGetAllServiceQuery,
} from "../../redux/features/serviceApi";
import { DeleteOutlined } from "@ant-design/icons";
import AddServiceModal from "../../components/page/dashboard/AddServiceModal";
import UpdateServiceModal from "../../components/page/dashboard/UpdateServiceModal";

import Swal from "sweetalert2";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

export default function ManageService() {
  const { data: services, isFetching } = useGetAllServiceQuery([]);
  const [deleteServiceById] = useDeleteServiceByIdMutation();

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
          const res:any = await deleteServiceById(id);
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

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "No.",
      dataIndex: "index",
      key: "index",
      render: (_text, _record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Duration",
      dataIndex: "duration",
    },
    {
      title: "Price",
      dataIndex: "price",
    },

    {
      title: "Action",
      key: "action",
      render: (item) => (
        <Space size="middle">
          <UpdateServiceModal {...item}  />
          
          <Button
            type="text"
            className="rounded-full size-10"
            onClick={() => handelDelet(item._id)}
          >
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className=" p-3">
      <div className="flex justify-between bg-gray-400 p-3 rounded-xl">
        <div className="">
          <p className="text-xl uppercase font-semibold">Create Serivce</p>
        </div>
        <div>
          <AddServiceModal />
        </div>
      </div>
      <Divider />
      <div>
        <h1 className="text-xl font-semibold font-open uppercase mb-3">
          Service List
        </h1>
        <div className="w-full">
          <Table
            columns={columns}
            dataSource={services?.data}
            loading={isFetching}
            rowKey="name" 
          />
        </div>
      </div>
    </div>
  );
}
