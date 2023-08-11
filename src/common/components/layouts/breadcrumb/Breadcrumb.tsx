import Container from "../../container";
import Breadcrumblink from "./Breadcrumblink";

const Breadcrumb = () => {
  return (
    <Container>
      <div className="w-[101%] overflow-y-auto overflow-x-hidden pb-[20px] xl:ml-0">
        <div className="relative min-h-[1px] w-full max-w-full flex-100 pr-[15px]">
          <ol className="mb-[10px] mt-0 w-full list-none rounded-[0.25rem] border-none bg-transparent p-0">
            <Breadcrumblink />
          </ol>
        </div>
      </div>
    </Container>
  );
};

export default Breadcrumb;
