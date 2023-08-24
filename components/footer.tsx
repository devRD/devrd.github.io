import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const d = new Date();

const Footer = () => {
  return (
    <>
      <hr style={{ "border": "0.5px solid #CCC"}}/>
      <footer className="d-flex flex-column align-items-center justify-content-center mb-4">
        <a href="/" className="d-flex justify-content-center">
          <img src="/assets/logo.png" className="img-fluid w-25"/> 
        </a>
        <p className="mb-1">
          &copy; {d.getFullYear()} copyright &nbsp;
          <a href="https://github.com/devRD" target="_blank">@devRD</a>
        </p>
        <p className="p-0 m-0">
          This blog is licensed under &nbsp; 
          <a
            className="text-secondary lh-0"
            href="http://creativecommons.org/licenses/by/4.0/"
            target="_blank"
          >
            Creative Commons Attribution 4.0 International License.
          </a>
        </p>
      </footer>
    </>
  )
}

export default Footer
