import { useLogger } from "react-use";
import { authDispatch, authState } from "../../context/auth/auth.context";
import HeaderWrapper from "./header.style";

export default function Header({ className }) {
  useLogger("Header -->");
  const { isAuthenticated } = authState();
  const dispatch = authDispatch();
  console.log(isAuthenticated);
  return (
    <HeaderWrapper className={className} id="layout-header"></HeaderWrapper>
  );
}
