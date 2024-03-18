import { styled } from 'styled-components'
import { CalendarWidget } from '../../../widget/CalendarWidget'
import { SpotifyWebWidget } from '../../../widget/MusicPlayerWidget'

const DashboardContainer = styled.div`
`

export const Dashboard = () => {

  return (
    <DashboardContainer>
      <h1>Dashboard</h1>
      <SpotifyWebWidget />
      <CalendarWidget />
    </DashboardContainer>
  )
}
