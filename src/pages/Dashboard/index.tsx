import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Chart} from "../../components/common/Chart";
import {LogoutOutlined} from "@ant-design/icons";
import "./Dashboard.scss";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage?.getItem("token")) {
      navigate("/sign-in", {replace: true});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/sign-in", {replace: true});
  };

  return (
    <>
      <div className="log-out">
        <LogoutOutlined onClick={logOut} style={{fontSize: "32px"}} />
      </div>

      <Chart />
    </>
  );
};

export {Dashboard};
