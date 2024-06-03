import mangrove from "./mangrove";

export default function Mangrove() {
  return <div dangerouslySetInnerHTML={{ __html: mangrove }} />;
}
