import Image from "next/image";
import logo from "../../../public/images/vscode_icon.svg";

const Logo = () => {
  return (
    <div>
      <Image src={logo} width={15} height={15} alt="visual studio code logo" />
    </div>
  );
};

export default Logo;
