import { CalendarWidget } from '../../../widget/CalendarWidget'
import { SpotifyWebWidget } from '../../../widget/MusicPlayerWidget'
import { BtcWidget } from '../../Widget/BtcWidget'

export const Dashboard = () => {
  return (
    <div>
      Dashboard
      <BtcWidget />
      <SpotifyWebWidget />
      <CalendarWidget />
    </div>
  )
}
