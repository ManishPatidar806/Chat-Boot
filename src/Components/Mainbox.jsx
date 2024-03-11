import Center from "./Center";
import "./Mainbox.css"
import SideBar from "./SideBar";
export default function Mainbox(){
    return (
      <div className="MainBox">
        <SideBar/>
        <Center/>
      </div>
    );
}