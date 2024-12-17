
import SlotsModal from '../../components/page/dashboard/CreateSlotsModa'
import { Button, Divider, Space, Table, TableProps } from 'antd'
import { useDeleteSloteByIdMutation, useGetAllSlotsQuery } from '../../redux/features/slotsApi'
import { TSlot } from '../../types/Slots';
import { DeleteOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';
import dayjs from 'dayjs';

export default function ManageSlote() {

  const {data, isFetching} = useGetAllSlotsQuery([])
  const [deleteSloteById] = useDeleteSloteByIdMutation()

  const slots = data?.data;
  
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
          const res:any = await deleteSloteById(id);
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


  const columns: TableProps<TSlot>['columns'] = [
    {
      title: "No.",
      dataIndex: "index",
      key: "index",
      render: (_text, _record, index) => index + 1,
    },
    {
      title: 'Service Name',
      dataIndex: ['service', 'name'],
    },
    {
      title: 'Service Date',
      dataIndex: 'date',
      render:(date) => dayjs(date).format('DD/MM/YYYY')
    },
    {
      title: 'Start Time',
      dataIndex: 'startTime',
    },
    {
      title: 'End Time',
      dataIndex: 'endTime',
    },
    {
      title: 'Status',
      dataIndex: 'isBooked',
      render:(isBooked)=> (
        isBooked === 'available' ? <span className='text-green-500'>{isBooked}</span> : isBooked === 'booked' ? <span className='text-yellow-500'>{isBooked}</span> : <span className='text-red-500'>{isBooked}</span>)
      
        
    },
    {
      title: "Action",
      key: "action",
      render: (item) => (
        <Space size="middle">
          
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
    <div>
        <div className='flex justify-between bg-slate-300 p-4 rounded-md'>
            <div> <p className='uppercase text-2xl font-bold'>Create Slots</p></div>
            <div><SlotsModal /> </div>
        </div>
        <Divider />
        <div>
        <Table columns={columns} dataSource={slots} loading={isFetching}
            rowKey={`${(record: { id: any; }) => record.id}`} />
        </div>
    </div>
  )
}
