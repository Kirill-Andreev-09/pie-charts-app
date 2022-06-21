import {Form, Input, Button} from "antd";
import {UserOutlined, LockOutlined} from "@ant-design/icons";
import "./DefaultForm.scss";
import {LoginType} from "../../../types/querys";
import {ApolloError} from "apollo-client";

type DefaultFormPropsType = {
  title: string;
  submitForm: (values: LoginType) => void;
  loading: boolean;
  error: ApolloError | undefined;
};

const DefaultForm: React.FC<DefaultFormPropsType> = ({
  title,
  submitForm,
  loading,
  error,
}) => {
  return (
    <div className="default-form">
      <h1>{title}</h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{remember: true}}
        onFinish={async (values) => {
          submitForm({variables: {...values}});
        }}>
        <Form.Item
          name="username"
          rules={[{required: true, message: "Please input your Username!"}]}>
          <Input
            type="text"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Логин"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{required: true, message: "Please input your Password!"}]}>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Пароль"
          />
        </Form.Item>

        <div className="buttons">
          <Button block type="primary" htmlType="submit" loading={loading}>
            Войти
          </Button>
        </div>

        {error?.message && <div className="errors">{error?.message}</div>}
      </Form>
    </div>
  );
};

export {DefaultForm};
