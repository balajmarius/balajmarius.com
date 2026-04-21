import { permanentRedirect } from "next/navigation";

const ReadingsPage = () => {
  permanentRedirect("/bookmarks");
};

export default ReadingsPage;
