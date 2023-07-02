import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const d = new Date();

const Footer = () => {
  return (
    <>
      <hr style={{ "border": "0.5px solid #CCC"}}/>
      <footer className="d-flex justify-content-center mb-4">
        &copy; {d.getFullYear()} copyright footer text devrd
      </footer>
    </>
  )
}

export default Footer
