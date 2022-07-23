import Card from "../components/Card"
import {Link} from 'react-router-dom'


function AboutPage() {
  return (
    <Card>
      <h2>About Our Project</h2>
      <p>This helps the users to provide the feedback about our project</p>

      <p><Link to="/">Back To Home </Link></p>
      
    </Card>
  )
}

export default AboutPage
