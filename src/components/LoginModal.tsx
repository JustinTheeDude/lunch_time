import Input from "./Input";

const LoginModal = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-wrap max-w-xl py-28 px-10 bg-gray-700">
      <Input inputPlaceholder="email" 
             className="mb-3"/>
      <Input inputPlaceholder="password" />
      <button>Sign In</button>
    </div>
  );
}

export default LoginModal;