import { styled } from 'styled-components'
import { CalendarWidget } from '../../../widget/CalendarWidget'
import { SpotifyWebWidget } from '../../../widget/MusicPlayerWidget'
import { BtcWidget } from '../../Widget/BtcWidget'

const DashboardContainer = styled.div`
  /* background-color: ${({ theme }) => theme.colors.black}; */
`

export const Dashboard = () => {

  return (
    <DashboardContainer>
      <h1>Dashboard</h1>
      <BtcWidget />
      <SpotifyWebWidget />
      <CalendarWidget />
    </DashboardContainer>
  )
}
