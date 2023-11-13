import loadingSpinner from "../../../assets/Loading/loop64.svg"
import "./Spinner.css"

export default function Spinner () {
  return  (
    <img src={loadingSpinner} alt="Loading..." className="LoadingSpinner" />
  )
}