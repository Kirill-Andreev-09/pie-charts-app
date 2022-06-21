import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {DefaultForm} from "../../components/common/DefaultForm";
import {useMutation} from "@apollo/react-hooks";
import {LOGIN} from "../../querys/Login";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [login, {data, loading, error}] = useMutation(LOGIN);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard", {replace: true});
    }

    if (data?.login?.token) {
      localStorage.setItem("token", data?.login?.token);
      navigate("/dashboard");
    }
  }, [data?.login?.token, navigate]);

  return (
    <DefaultForm
      title="Вход"
      submitForm={login}
      loading={loading}
      error={error}
    />
  );
};

export {SignIn};
