import { InformationLeft } from "./InformationLeft";
import { InformationRight } from "./InformationRight";
const Information = () => {
  return (
    <div className="max-w-[1440px] mx-auto md:flex md:pl-6 md:py-8">
      <InformationLeft></InformationLeft>
      <InformationRight></InformationRight>
    </div>
  );
};

export default Information;
