
import SlotsModal from '../../components/page/dashboard/CreateSlotsModa'
import { Divider } from 'antd'

export default function ManageSlote() {
  return (
    <div>
        <div className='flex justify-between bg-slate-300 p-4 rounded-md'>
            <div> <p className='uppercase text-2xl font-bold'>Create Slots</p></div>
            <div><SlotsModal /> </div>
        </div>
        <Divider />
        <div>

        </div>
    </div>
  )
}
